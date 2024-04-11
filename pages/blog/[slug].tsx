import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import MainTemplate from "../../src/components/templates/MainTemplate";
import {
  BLOG_POST_QUERY,
  BLOG_PATHS_QUERY,
} from "../../src/graphql/getBlog.query";
import { request } from "../../src/lib/datocms";
import BlogPostPage from "../../src/pages/BlogPostPage";
import { PageSeo } from "../../src/utility/seo/PageSeo.component";

const BlogPost = (props: any) => {
  const { t } = useTranslation();

  const plLang = i18n.language === "pl";

  const blogPostTitle =
    props.data.blogpost?._allTitleLocales[plLang ? 1 : 0].value;

  const blogPostExcerpt =
    props.data.blogpost?._allExcerptLocales[plLang ? 1 : 0].value;

  return (
    <MainTemplate>
      <PageSeo
        page={{
          cannonicalUrl: `https://mikolajulikowski.pl/blog/${props.data.blogpost.slug}`,
          nofollow: false,
          noindex: false,
          og: {
            description: blogPostExcerpt,
            title: "",
            images: [
              {
                url: props.data.blogpost.image.url,
                alt: "Zdjęcie posta blogowego",
                height: 630,
                type: "image/jpeg",
                width: 1200,
              },
            ],
          },
          meta: {
            title: blogPostTitle,
            description: blogPostExcerpt,
          },
        }}
      />
      <BlogPostPage post={props} />
    </MainTemplate>
  );
};

export const getStaticPaths = async (context: any) => {
  const slugQuery: any = await request({
    query: BLOG_PATHS_QUERY,
    preview: context.preview,
  });

  let paths: any = [];
  slugQuery.allBlogposts.map((p: any) => paths.push(`/blog/${p.slug}`));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }: any) => {
  const graphqlRequest = {
    query: BLOG_POST_QUERY,
    variables: { slug: params.slug },
  };

  return {
    props: {
      data: await request(graphqlRequest),
    },
    revalidate: 10,
  };
};

export default BlogPost;
