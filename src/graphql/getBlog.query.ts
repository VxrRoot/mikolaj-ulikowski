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

export const BLOG_POST_QUERY = `query MyQuery {
  blogpost(
    filter: {title: {}, slug: {eq: "marketing-internetowy-klucz-do-sukcesu-w-erze-cyfrowej"}}
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
          ... on VideoRecord {
            id,
            youtubeVideo {
              url
              height
              width
              providerUid
            }
          }
        }
      }
    }
  }
}`;
