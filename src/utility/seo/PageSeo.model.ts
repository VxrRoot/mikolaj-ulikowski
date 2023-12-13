interface IModelPageSeo {
  locale?: string;
  route?: string;
  noindex: boolean;
  nofollow: boolean;
  keywords?: string;
  meta: {
    title: string;
    description: string;
  };
  cannonicalUrl: string;
  og: {
    title: string;
    description: string;
    type?: string;
    images?: {
      url: string;
      width: number;
      height: number;
      alt: string;
      type: string;
    }[];
  };
  ogArticle?: {};
}

export type ModelPageSeo = {
  page: IModelPageSeo;
};
