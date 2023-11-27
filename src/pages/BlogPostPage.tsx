import Link from "next/link";
import React, { FC } from "react";
import { StructuredText } from "react-datocms/structured-text";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import RowTemplate from "../components/templates/RowTemplate";
import { IBlogPost } from "../interfaces/interfaces";
import { BackLink, Wrapper } from "./BlogPage.styles";
import { IoIosArrowRoundBack } from "react-icons/io";

interface IBlogPostPage {
  post: IBlogPost;
}

const BlogPostPage: FC<IBlogPostPage> = ({ post }) => {
  const { t } = useTranslation();
  console.log(post);

  const plLang = i18n.language === "pl";

  return (
    <Wrapper>
      <RowTemplate>
        <Link href="/blog">
          <BackLink>
            <IoIosArrowRoundBack />
            <span>Wróć</span>
          </BackLink>
        </Link>
        <h1>{post.data.blogpost._allTitleLocales[plLang ? 0 : 1].value}</h1>
        <StructuredText
          data={post.data.blogpost._allContentLocales[plLang ? 0 : 1].value}
          renderBlock={({ record }) => {
            switch (record.__typename) {
              case "VideoBlockRecord":
                return <div>video</div>;
              case "ImageRecord":
                return <div>img</div>;
              default:
                return null;
            }
          }}
        />
      </RowTemplate>
    </Wrapper>
  );
};

export default BlogPostPage;
