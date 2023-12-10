import Link from "next/link";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";
import { StyledDiv, StyledParagraph, Title } from "./BlogPostPerview.styled";

const BlogPostPreview: FC<any> = (props) => {
  const { t } = useTranslation();

  const { data } = props;

  return (
    <StyledDiv>
      <img src={data.image.url} alt="blog post image" />
      <Title>
        <Link href={`/blog/${data.slug}`}>
          <a>{data._allTitleLocales[i18n.language === "pl" ? 1 : 0].value}</a>
        </Link>
      </Title>
      <StyledParagraph>
        {data.publishDate} {data.author.name}
      </StyledParagraph>
    </StyledDiv>
  );
};

export default BlogPostPreview;
