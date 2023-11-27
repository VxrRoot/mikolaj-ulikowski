export const BLOG_PAGE_QUERY = `query MyQuery {
      allBlogposts(locale: en, orderBy: _createdAt_DESC) {
        _allContentLocales {
          locale
          value {
            value
          }
        }
        author {
          name
        }
        slug
        image {
          url
        }
        id
        publishDate
        _allTitleLocales {
          value
          locale
        }
        _allExcerptLocales {
          value
          locale
        }
      }
    }`;

export const BLOG_PATHS_QUERY = `
query MyQuery {
      allBlogposts(locale: en) {
        slug
      }
    }
`;

export const BLOG_POST_QUERY = `query MyQuery($slug: String) {
      blogpost(
        filter: {slug: {eq: $slug}, title: {}}
      ) {
        id
        author {
          name
        }
        _allTitleLocales {
          value
        }
        _allContentLocales {
          value {
            value
            links
            blocks {
              __typename
              ... on ImageRecord {
                id
                image { 
                  responsiveImage {
                    width
                    webpSrcSet
                    title
                    srcSet
                    src
                    sizes
                    height
                    bgColor
                    base64
                    aspectRatio
                    alt
                  }
                }
              }
            }
          }
        }
      }
    }`;
