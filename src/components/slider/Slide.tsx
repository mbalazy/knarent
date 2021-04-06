import React from "react";
import styled from "styled-components";

type SlideProps = {
  imgUrl: string;
  children: JSX.Element;
};

const SlideWrapperStyles = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
`;
const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
`;
const Content = styled.div`
  position: absolute;
  z-index: 1;
`;

const Slide = ({ imgUrl, children }: SlideProps) => {
  return (
    <SlideWrapperStyles>
      <ImageWrapper>
        <Image
          src={imgUrl}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </ImageWrapper>
      <Content>{children}</Content>
    </SlideWrapperStyles>
  );
};

export default Slide;
