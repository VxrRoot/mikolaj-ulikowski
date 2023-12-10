import Link from "next/link";
import React, { FC } from "react";
import { StructuredText } from "react-datocms/structured-text";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import RowTemplate from "../components/templates/RowTemplate";
import { IBlogPost } from "../interfaces/interfaces";
import {
  BackLink,
  StyledArticle,
  StyledImageWrapper,
  Wrapper,
} from "./BlogPage.styles";
import { IoIosArrowRoundBack } from "react-icons/io";
import YouTube from "react-youtube";

interface IBlogPostPage {
  post: IBlogPost;
}

const BlogPostPage: FC<IBlogPostPage> = ({ post }) => {
  const { t } = useTranslation();

  const plLang = i18n.language === "pl";

  const opts = {
    height: "300px",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <Wrapper>
      <RowTemplate>
        <Link href="/blog">
          <BackLink>
            <IoIosArrowRoundBack />
            <span>Wróć</span>
          </BackLink>
        </Link>
        <h1>{post.data.blogpost?._allTitleLocales[plLang ? 1 : 0].value}</h1>
        <StyledImageWrapper>
          <img src={post.data.blogpost.image.url} alt="alt img" />
        </StyledImageWrapper>
        <StyledArticle>
          <StructuredText
            data={post.data.blogpost._allContentLocales[plLang ? 1 : 0].value}
            renderBlock={({ record }: any) => {
              switch (record.__typename) {
                case "VideoRecord":
                  return (
                    <YouTube
                      videoId={record.youtubeVideo.providerUid}
                      opts={opts}
                    />
                  );
                default:
                  return null;
              }
            }}
          />
        </StyledArticle>
      </RowTemplate>
    </Wrapper>
  );
};

export default BlogPostPage;
