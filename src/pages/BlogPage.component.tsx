import Link from "next/link";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import RowTemplate from "../components/templates/RowTemplate";
import { IBlogQuery } from "../models/getDataQuery.model";
import {
  BlogPostsWrapper,
  StyledDiv,
  StyledParagraph,
  Title,
  Wrapper,
} from "./BlogPage.styles";

const BlogPage: FC<IBlogQuery> = ({ data }) => {
  return (
    <Wrapper>
      <RowTemplate>
        <h1>Blog o marketingu!</h1>
        <p>
          Zapraszam do lektury, jeśli pragniesz być na bieżąco z informacjami
          dotyczącymi e-marketingu, planowania działań marketingowych online,
          copywritingu, mediów społecznościowych i skuteczności biznesowej.
        </p>
        <BlogPostsWrapper>
          {data.allBlogposts.map((p: any) => (
            <BlogPostPreview key={p.id} data={p} />
          ))}
        </BlogPostsWrapper>
      </RowTemplate>
    </Wrapper>
  );
};

const BlogPostPreview: FC<any> = (props) => {
  const { t } = useTranslation();

  const { data } = props;

  return (
    <StyledDiv>
      <img src={data.image.url} alt="blog post image" />
      {/* <Image src={data.image.url} alt="" height={200} width={200} /> */}
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

export default BlogPage;
