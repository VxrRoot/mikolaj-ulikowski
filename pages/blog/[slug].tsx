import React from "react";
import MainTemplate from "../../src/components/templates/MainTemplate";
import {
  BLOG_POST_QUERY,
  BLOG_PATHS_QUERY,
} from "../../src/graphql/getBlog.query";
import { request } from "../../src/lib/datocms";
import BlogPostPage from "../../src/pages/BlogPostPage";

const BlogPost = (props: any) => {
  return (
    <MainTemplate>
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
