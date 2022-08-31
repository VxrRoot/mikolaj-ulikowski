export const QUERY = `
{
   statistic {
      roi
      budget
      clients
   }
   pageContent {
      headline
      subtitle
   }
   allSpecializations {
      id
      name
      description
    }
    allOpinions {
      company
      author
      id
      description
      img {
        alt
        url
      }
    }
}
`;