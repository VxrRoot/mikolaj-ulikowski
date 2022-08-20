import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
   static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet();
      const originalRenderPage = ctx.renderPage;
      
      try {
         ctx.renderPage = () =>
            originalRenderPage({
               enhanceApp: (App) => (props) =>
                  sheet.collectStyles(<App {...props} />)
            });
         
         const initialProps = await Document.getInitialProps(ctx);
         return {
            ...initialProps,
            styles: (
               <>
                  {initialProps.styles}
                  {sheet.getStyleElement()}
               </>
            ),
         };
      } finally {
         sheet.seal();
      }
   }
   render () {
      return (
         <Html lang="en">
            <Head>
               <meta name="application-name" content={process.env.NEXT_PUBLIC_SITE_URL} />
               <meta name="apple-mobile-web-app-capable" content="yes" />
               <meta name="apple-mobile-web-app-status-bar-style" content="default" />
               <meta name="apple-mobile-web-app-title" content={process.env.NEXT_PUBLIC_APP_NAME} />
               <meta name="format-detection" content="telephone=no" />
               <meta name="mobile-web-app-capable" content="yes" />
               <meta name="theme-color" content={process.env.NEXT_PUBLIC_THEME_COLOR}/>
               <meta name="google" content="notranslate" />
               <meta name="robots" content="noodp" />
               <meta name="copyright" content={process.env.NEXT_PUBLIC_SITE_URL} />
               <meta name="author" content={process.env.NEXT_PUBLIC_SITE_URL} />
               <meta name="viewport" content="width=device-width, initial-scale=1" />
               <meta httpEquiv="Content-Type" content="text/html; charset=uft-8" />
               <meta property="og:site_name" content={process.env.NEXT_PUBLIC_APP_NAME} />
               <link rel="apple-touch-icon" sizes="120x120" href="/static/icons/apple-touch-icon-120x120.png" />
               <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon-180x180.png" />
               <link href="/static/icons/icon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
               <link href="/static/icons/icon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
               <link rel="manifest" href="/manifest.json" />
               <link rel="shortcut icon" href="/static/icons/favicon.ico" />
               <link rel="stylesheet" href="https://use.typekit.net/syj1pvy.css" />
               <link href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;700&display=swap" rel="stylesheet"/>
               <link rel="preconnect" href="https://fonts.googleapis.com" />
               <link rel="preconnect" href="https://fonts.gstatic.com" />
               <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }


}

export default Document