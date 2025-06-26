import pkg from '@apollo/client';
const { ApolloClient, InMemoryCache, gql, createHttpLink } = pkg;
import { setContext } from '@apollo/client/link/context';

// Simple cache with 2-minute TTL
const queryCache = new Map();
const CACHE_TTL = 2 * 60 * 1000; // 2 minutes

function getCacheKey(query: string, variables: any) {
  return `${query}:${JSON.stringify(variables)}`;
}

function getCachedResult(key: string) {
  const cached = queryCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }
  queryCache.delete(key);
  return null;
}

function setCachedResult(key: string, data: any) {
  queryCache.set(key, { data, timestamp: Date.now() });
}

// Create function to get Apollo Client with optional preview token
export function getClient(previewToken?: string) {
  const httpLink = createHttpLink({
    uri: process.env.PUBLIC_APP_GRAPHQL_API,
  });

  const authLink = setContext((_, { headers }) => {
    // Return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: previewToken ? `Bearer ${previewToken}` : '',
      }
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache', // Use our custom cache instead
      },
    },
  });
}

const defaultClient = getClient();


export async function getArticles(previewToken?: string) {
  const client = previewToken ? getClient(previewToken) : defaultClient;
  const results = await client.query({
    query: gql`
    query ArticlePages {
      ArticlePage(locale: en, orderBy: { _metadata: { published: DESC } }) {
        items {
          Heading
          Image {
            url {
              default
            }
          }
          MetaDescription
          _metadata {
            displayName
            published
            url {
              default
            }
            types
          }
        }
      }
    }
    `,
  });

  return results.data.ArticlePage.items ?? [];
}

export async function getStartPage(previewToken?: string){
  // Skip cache for preview mode
  if (previewToken) {
    const client = getClient(previewToken);
    const results = await client.query({
      query: gql`
      query getStartPage {
        StartPage(locale: ALL) {
          items {
            Heading
            CompanyName
            Body {
              html
            }
            BannerImages { 
              _metadata {
                url { default } 
              }
            }
            Logo {
              url { default }
            }
            _metadata {
              displayName
              url {
                hierarchical
                default
              }
              published
              __typename
            }
            _link {
              _Page {
                items {
                  _metadata {
                    displayName
                    published
                    url {
                      default
                    }
                  }
                }
              }
            }
          }
        }
      }
      `
    });
    return results.data.StartPage.items[0];
  }

  // Use cache for regular requests
  const cacheKey = getCacheKey('getStartPage', {});
  const cached = getCachedResult(cacheKey);
  if (cached) {
    return cached;
  }

  const client = defaultClient;
  const results = await client.query({
    query: gql`
    query getStartPage {
      StartPage(locale: ALL) {
        items {
          Heading
          CompanyName
          Body {
            html
          }
          BannerImages { 
            _metadata {
              url { default } 
            }
          }
          Logo {
            url { default }
          }
          _metadata {
            displayName
            url {
              hierarchical
              default
            }
            published
            __typename
          }
          _link {
            _Page {
              items {
                _metadata {
                  displayName
                  published
                  url {
                    default
                  }
                }
              }
            }
          }
        }
      }
    }
    `
  });

  const result = results.data.StartPage.items[0];
  setCachedResult(cacheKey, result);
  return result;
}

// This fragment is intended to be used on items within the _Content.items list.
// Optimizely Graph often uses a 'Content' interface for such items.
const ContentItemFields = gql`
  fragment ContentItemFields on _IContent { 
    _metadata {
      displayName
      published
      types
      __typename
      url {
        default
      }
    }
    ... on ImageRightContentPage {
      MainBody {
        html
      }
      Image {
        url {
          default
        }
      }
    }
    ... on BlogPage {
      Heading
      Description {
        html
      }
    }
    ... on ArticlePage {
      Heading
      MainBody {
        html
      }
      MetaDescription
      Image {
        url {
          default
        }
      }
    }
    ... on StandardPage {
      MainBody {
        html
      }
    }
    ... on StartPage {
      Heading
      CompanyName
      Body {
        html
      }
      BannerImages {
        _metadata {
          url {
            default
          }
        }
      }
    }
    ... on BlankExperience {
      composition {
        nodeType
        key
        nodes {
          nodeType
          key
          ... on CompositionComponentNode {
            component {
              _metadata {
                types
              }
              ... on Experience_Carousel {
                Carousel_Images {
                  _metadata {
                    url {
                      default
                    }
                    displayName
                  }
                }
              }
              ... on Experience_Hero {
                Heading {
                  html
                }
                Description {
                  html
                }
                Image {
                  default
                }
              }
              ... on Experience_RTE {
                Text {
                  html
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function resolveContent(url: string, previewToken?: string){
  const client = previewToken ? getClient(previewToken) : defaultClient;
  const results = await client.query({
    query: gql`
      query getContentPage($url: String!) {
        _Content(locale: en, where: { _metadata: { url: { default: { eq: $url } } } }) {
          items {
            _metadata {
              displayName
              published
              types
              __typename
              url {
                default
              }
            }
            ... on ImageRightContentPage {
              MainBody {
                html
              }
              Image {
                url {
                  default
                }
              }
            }
            ... on BlogPage {
              Heading
              Description {
                html
              }
            }
            ... on ArticlePage {
              Heading
              MainBody {
                html
              }
              MetaDescription
              Image {
                url {
                  default
                }
              }
            }
            ... on StandardPage {
              MainBody {
                html
              }
            }
            ... on StartPage {
              Heading
              CompanyName
              Body {
                html
              }
              BannerImages {
                _metadata {
                  url {
                    default
                  }
                }
              }
            }
            ... on BlankExperience {
              composition {
                nodeType
                key
                nodes {
                  nodeType
                  key
                  ... on CompositionComponentNode {
                    component {
                      _metadata {
                        types
                      }
                      ... on Experience_Carousel {
                        Carousel_Images {
                          _metadata {
                            url {
                              default
                            }
                            displayName
                          }
                        }
                      }
                      ... on Experience_Hero {
                        Heading {
                          html
                        }
                        Description {
                          html
                        }
                        Image {
                          default
                        }
                      }
                      ... on Experience_RTE {
                        Text {
                          html
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      url,
    },
  });

  const item = results.data._Content.items[0] ?? null;
  return item;
}

export async function resolveEditContent(version: string, previewToken: string){
  const client = previewToken ? getClient(previewToken) : defaultClient;
  const results = await client.query({
    query: gql`
      query getEditContent($version: String!) {
        _Content(locale: en, where: { _metadata: { version: { eq: $version } } }) {
          items {
            _metadata {
              displayName
              published
              types
              __typename
              url {
                default
              }
            }
            ... on ImageRightContentPage {
              MainBody {
                html
              }
              Image {
                url {
                  default
                }
              }
            }
            ... on BlogPage {
              Heading
              Description {
                html
              }
            }
            ... on ArticlePage {
              Heading
              MainBody {
                html
              }
              MetaDescription
              Image {
                url {
                  default
                }
              }
            }
            ... on StandardPage {
              MainBody {
                html
              }
            }
            ... on StartPage {
              Heading
              CompanyName
              Body {
                html
              }
              BannerImages {
                _metadata {
                  url {
                    default
                  }
                }
              }
            }
            ... on BlankExperience {
              composition {
                nodeType
                key
                nodes {
                  nodeType
                  key
                  ... on CompositionComponentNode {
                    component {
                      _metadata {
                        types
                      }
                      ... on Experience_Carousel {
                        Carousel_Images {
                          _metadata {
                            url {
                              default
                            }
                            displayName
                          }
                        }
                      }
                      ... on Experience_Hero {
                        Heading {
                          html
                        }
                        Description {
                          html
                        }
                        Image {
                          default
                        }
                      }
                      ... on Experience_RTE {
                        Text {
                          html
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      version,
    },
  });

  return results.data._Content.items[0] ?? null;
}