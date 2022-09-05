import { FC } from 'react';
import { NextSeo } from 'next-seo';

// Model
import { ModelPageSeo } from './PageSeo.model';

export const PageSeo: FC<ModelPageSeo> = ({page}) => {
   return (
      <NextSeo 
         nofollow={page.nofollow}
         noindex={page.noindex}
         defaultTitle='Mikolaj Ulikowski - SKUTECZNIE KREATYWNY MARKETING'
         title={page.meta.title}
         description={page.meta.description}
         canonical={page.cannonicalUrl}
         additionalMetaTags={[{
            property: 'dc:creator',
            content: 'Mikolaj Ulikowski'
         }, {
            name: 'application-name',
            content: 'mikolajulikowski.pl'
         }, {
            httpEquiv: 'x-ua-compatible',
            content: 'IE-edge; chrome=1'
         }]}
         openGraph={{
            locale: 'pl_PL',
            url: page.cannonicalUrl,
            title: page.og.title,
            description: page.og.description,
            type: page.og.type ? page.og.type : 'page',
            article: page.ogArticle,
            site_name: 'mikolajulikowski.pl',
            images: page.og.images?.map(item => ({
               url: item.url,
               width: item.width ? item.width : 1200,
               height: item.height ? item.height : 630,
               alt: item.alt,
               type: item.type ? item.type : 'image/jpeg'
            }))
         }}
      />
   )
}