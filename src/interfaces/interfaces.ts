export interface IBlogPost {
  data: {
    blogpost: {
      id: string;
      author: {
        name: string;
      };
      image: any;
      _allContentLocales: any;
      _allTitleLocales: { value: string }[];
    };
  };
}
