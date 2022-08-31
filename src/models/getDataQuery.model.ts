export type statisticType = {
   roi: number,
   budget: number,
   clients: number
}

export type pageContentType = {
   headline: string;
   subtitle: string;
}

export type allSpecializationsType = {
   id: string,
   name: string,
   description: string
}[]

export type allOpinionsType = {
   company?: string,
   author: string,
   id: string,
   description: string,
   img?: {
      url: string,
      alt: string,
   }
}[]

interface IGetQuery {
   data: {
      statistic: statisticType,
      pageContent: pageContentType,
      allSpecializations: allSpecializationsType,
      allOpinions: allOpinionsType
   };
}

export type ModelGetQuery = IGetQuery;