export interface IBlogPost {
  data: {
    blogpost: {
      id: string;
      author: {
        name: string;
      };
      _allContentLocales: any;
      _allTitleLocales: { value: string }[];
    };
  };
}
