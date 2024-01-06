import { FC } from "react";
import { useTranslation } from "react-i18next";
import BlogPostPreview from "../components/BlogPage/BlogPostPerview";
import RowTemplate from "../components/templates/RowTemplate";
import { IBlogQuery } from "../models/getDataQuery.model";
import { BlogPostsWrapper, Wrapper } from "./BlogPage.styles";

const BlogPage: FC<IBlogQuery> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <RowTemplate>
        <h1 className="page__heading">{t("blog-heading")}</h1>
        <p className="page_paragraph">{t("blog-paragraph")}</p>
        <BlogPostsWrapper>
          {data.allBlogposts.map((p: any) => (
            <BlogPostPreview key={p.id} data={p} />
          ))}
        </BlogPostsWrapper>
      </RowTemplate>
    </Wrapper>
  );
};

export default BlogPage;
