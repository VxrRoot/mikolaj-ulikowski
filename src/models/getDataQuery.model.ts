export type statisticType = {
  roi: number;
  budget: number;
  clients: number;
};

export type pageContentType = {
  headline: string;
  subtitle: string;
};

export type allSpecializationsType = {
  id: string;
  name: string;
  description: string;
}[];

export type allOpinionsType = {
  company?: string;
  author: string;
  id: string;
  description: string;
  descriptionEn: string;
  // coverImage: any;
  img?: {
    url: string;
    alt: string;
  };
}[];

export type AllFaqItemsType = {
  answearEn: string;
  answearPl: string;
  questionEn: string;
  questionPl: string;
}[];

interface IGetQuery {
  data: {
    statistic: statisticType;
    pageContent: pageContentType;
    allSpecializations: allSpecializationsType;
    allOpinions: allOpinionsType;
    allFaqItems: AllFaqItemsType;
  };
}

export interface IBlogQuery {
  data: any;
}

export type ModelGetQuery = IGetQuery;
