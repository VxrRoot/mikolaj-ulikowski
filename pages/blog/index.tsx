import { useRouter } from "next/router";
import React, { FC } from "react";
import i18n from "../../i18n";
import MainTemplate from "../../src/components/templates/MainTemplate";
import { BLOG_PAGE_QUERY } from "../../src/graphql/getBlog.query";
import { request } from "../../src/lib/datocms";
import { IBlogQuery } from "../../src/models/getDataQuery.model";
import BlogPage from "../../src/pages/BlogPage.component";

export async function getStaticProps() {
  const data = await request({
    query: BLOG_PAGE_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}

const BlogPageIndex: FC<IBlogQuery> = ({ data }) => {
  return (
    <MainTemplate>
      <BlogPage data={data} />
    </MainTemplate>
  );
};

export default BlogPageIndex;
