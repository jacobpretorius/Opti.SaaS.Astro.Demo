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
          MainBody {
            html
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
          Page {
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
    `
  })

  //console.log(results.data.StartPage.items)

  return results.data.StartPage.items[0];
}

const getContentFragment = `
items {
  Name
  RelativePath
  RouteSegment
  ContentLink {
    Id
    WorkId
  }
  StartPublish
  StopPublish
  Url
  ContentType
  ... on ImageRightContentPage {
    _modified
    MainBody
    Image {
      Expanded {
        Url
        RelativePath
      }
    }
  }
  ... on BlogPage {
    _deleted
    _modified
    Heading
    Name
    Description
  }
  ... on ArticlePage {
    _deleted
    _modified
    Heading
    MainBody
    Name
    MetaDescription
    Image {
      Expanded {
        Url
      }
    }
  }
  ... on StandardPage {
    _deleted
    _modified
    MainBody
    Name
  }
  ... on StartPage {
    Heading
    Name
    CompanyName
    Body
  }
}
`;

export async function resolveContent(url){
  const results = await client.query({
    query: gql`
    query getContentPage {
      Content(locale: en, where: { RelativePath: { eq: "${url}" } }) {
        ${getContentFragment}
      }
    }
    `
  });

  //console.log("getContentPage", results.data.Content.items[0])

  return results.data.Content.items[0] ?? null;
}

