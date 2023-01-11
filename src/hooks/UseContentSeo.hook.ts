const UseContentSeo = () => {
  const appName = "Mikolaj Ulikowski";

  const pageIndex = {
    noindex: false,
    nofollow: false,
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

  return {
    pageIndex,
  };
};

export default UseContentSeo;
