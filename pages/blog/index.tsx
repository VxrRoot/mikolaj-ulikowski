import { FC } from "react";
import MainTemplate from "../../src/components/templates/MainTemplate";
import { BLOG_PAGE_QUERY } from "../../src/graphql/getBlog.query";
import UseContentSeo from "../../src/hooks/UseContentSeo.hook";
import { request } from "../../src/lib/datocms";
import { IBlogQuery } from "../../src/models/getDataQuery.model";
import BlogPage from "../../src/pages/BlogPage.component";
import { PageSeo } from "../../src/utility/seo/PageSeo.component";

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
  const { pageBlog } = UseContentSeo();

  return (
    <MainTemplate>
      <PageSeo page={pageBlog} />
      <BlogPage data={data} />
    </MainTemplate>
  );
};

export default BlogPageIndex;
