const UseContentSeo = () => {
  const appName = "Mikolaj Ulikowski";

  const pageIndex = {
    noindex: false,
    nofollow: false,
    keywords:
      "Mikołaj Ulikowski, e-marketing, strategie marketingowe, lead generation, sprzedaż online, budowanie społeczności, reklama Facebook & Instagram, płatne kampanie online, konsultacje marketingowe, szkolenia marketingowe, lejki sprzedażowe, marketing w social mediach, optymalizacja kampanii reklamowych, reklama w Google",
    meta: {
      title: `${appName} - SKUTECZNIE KREATYWNY MARKETING`,
      description:
        "Marketing w social media, reklama na facebooku, reklama na instagramie, digital marketing",
    },
    cannonicalUrl: "https://mikolajulikowski.pl/",
    og: {
      title: `${appName} - SKUTECZNIE KREATYWNY MARKETING`,
      description:
        "Marketing w social media, reklama na facebooku, reklama na instagramie, digital marketing",
      type: "website",
      images: [],
    },
  };

  const pageBlog = {
    noindex: false,
    nofollow: false,
    keywords:
      "trendy w marketingu cyfrowym, content marketing, personal branding, strategie w mediach społecznościowych, case studies marketingowe, analizy rynku, SEO i SEM, marketingowe porady, nowoczesne techniki marketingowe, wpływ technologii na marketing, efektywność kampanii reklamowych, marketing dla małych firm, strategie budowania marki",
    meta: {
      title: `${appName} - SKUTECZNIE KREATYWNY BLOG`,
      description:
        "Marketing w social media, reklama na facebooku, reklama na instagramie, digital marketing",
    },
    cannonicalUrl: "https://mikolajulikowski.pl/",
    og: {
      title: `${appName} - SKUTECZNIE KREATYWNY BLOG`,
      description:
        "Marketing w social media, reklama na facebooku, reklama na instagramie, digital marketing",
      type: "website",
      images: [],
    },
  };

  return {
    pageIndex,
    pageBlog,
  };
};

export default UseContentSeo;
