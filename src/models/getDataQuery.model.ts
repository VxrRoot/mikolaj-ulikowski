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

export type ModelGetQuery = IGetQuery;
