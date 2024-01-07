import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 124px 0;
  background-color: #f8f8f8;
  min-height: 100vh;
  color: black;

  .page__heading {
    margin-left: 10px;
    text-align: center;
  }

  .page_paragraph {
    text-align: center;
  }

  p {
    /* margin-left: 10px; */
    margin: 0 auto 20px auto;
    max-width: 600px;
    /* text-align: center; */
  }
`;

export const StyledImageWrapper = styled.div`
  height: 400px;
  width: auto;
  margin-bottom: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledImageContentWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const StyledArticle = styled.article`
  width: 100%;
  max-width: 800px;
  margin: auto;
  position: relative;
  padding: 0 16px;

  ol {
    padding-left: 16px;
  }

  p {
    width: 100% !important;
    margin: auto;
    margin-bottom: 12px;
    /* text-align: justify; */

    &:last-of-type {
      margin-bottom: 50px;
    }
  }

  @media (min-width: 720px) {
    ul,
    ol {
      padding: 0;
      padding-left: 16px;
    }
    p {
      min-width: 45rem;
      margin-right: 0;
      margin-left: 0;
    }
  }
`;

export const BackLink = styled.main`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  svg {
    width: 24px;
    height: auto;
  }
`;

export const BlogPostsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const StyledPostLink = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;

  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }

  h2 {
    margin-bottom: 5px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;
