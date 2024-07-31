import pkg from '@apollo/client';
const {ApolloClient, InMemoryCache, gql} = pkg;

const client = new ApolloClient({
  uri: import.meta.env.PUBLIC_APP_GRAPHQL_API,
  cache: new InMemoryCache(),
});

export default client;

export async function getArticles() {
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

export async function getStartPage(){
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
              url {
                default
              }
            }
          }
          Logo {
            url {
              default
            }
          }
          _metadata {
            displayName
            url {
              hierarchical
              default
            }
            published
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
  })

  return results.data.StartPage.items[0];
}

const getContentFragment = `
items {
  ... on ImageRightContentPage {
    MainBody {
      html
    }
    Image {
      url {
        default
      }
    }
    _metadata {
      displayName
    }
  }
  ... on BlogPage {
    Heading
    Description {
      html
    }
    _metadata {
      displayName
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
    _metadata {
      displayName
    }
  }
  ... on StandardPage {
    MainBody {
      html
    }
    _metadata {
      displayName
    }
  }
  ... on StartPage {
    Heading
    CompanyName
    Body {
      html
    }
    _metadata {
      displayName
    }
  }
  _metadata {
    displayName
    published
    types
    url {
      default
    }
  }
}
`;

export async function resolveContent(url){
  const results = await client.query({
    query: gql`
    query getContentPage {
      _Content(locale: en, where: { _metadata: { url: { default: { eq: "${url}" } } } }) {
        ${getContentFragment}
      }
    }
    `
  });

  return results.data._Content.items[0] ?? null;
}

