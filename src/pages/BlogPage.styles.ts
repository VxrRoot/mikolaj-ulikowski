import styled from "styled-components";

export const Wrapper = styled.main`
  padding: 124px 0;
  background: rgb(53, 45, 42);
  background: linear-gradient(
    0deg,
    rgba(53, 45, 42, 1) 10%,
    rgba(122, 117, 117, 1) 100%
  );
  min-height: 100vh;
  color: white;

  p {
    max-width: 600px;
  }
`;

export const StyledArticle = styled.article`
  width: 100%;
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

export const StyledDiv = styled.div`
  background-color: transparent;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  border: 1px solid ${({ theme }) => theme.colorPeach};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const StyledParagraph = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;