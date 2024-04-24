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
        ArticlePage(locale: en, orderBy: { Created: DESC }) {
          items {
            Created
            ContentType
            Heading
            Image {
              Url
            }
            Language {
              Name
            }
            MainBody
            MetaDescription
            Name
            RelativePath
            Status
            Url
            StartPublish
            RouteSegment
            Category {
              Name
            }
          }
        }
      }
    `,
  });

  return results.data.ArticlePage.items ?? [];
}

export async function getSiteDefinition(){
  const results = await client.query({
    query: gql`
    query GetSiteDefinition {
      SiteDefinition {
        items {
          Name
          Languages {
            DisplayName
            Name
            Url
            UrlSegment
            IsMasterLanguage
          }
          ContentRoots {
            StartPage {
              Id
              GuidValue
            }
          }
          Status
          Id
          Hosts {
            Name
          }
        }
        total
      }
    }
    `
  })

  //console.log(results.data.SiteDefinition.items)

  return results.data.SiteDefinition.items;
}

export async function getStartPage(){
  const results = await client.query({
    query: gql`
    query getStartPage {
      StartPage(locale: ALL) {
        items {
          Heading
          CompanyName
          Body
          BannerImages {
            ContentLink {
              Expanded {
                Url
              }
            }
          }
          DisableHeadDeploymentWebhook
          Logo {
            Url
          }
          Name
          RelativePath
          SiteId
          StartPublish
          StopPublish
          Status
          RouteSegment
          ContentType
          _children {
            Content(where: { ContentType: { eq: "page" } }) {
              items {
                RelativePath
                RouteSegment
                Name
                Status
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

export async function resolveInternalContent(contentId){
  const results = await client.query({
    query: gql`
    query getContentInternal {
      Content(locale: en, where: { ContentLink: { Id : { eq: ${contentId} } } }) {
        ${getContentFragment}
      }
    }
    `
  });

  //console.log("getContentInternal", results.data.Content.items[0])

  return results.data.Content.items[0] ?? null;
}