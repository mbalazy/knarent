import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { getHeroImageFromId } from "./lib";
import { ImageNode } from "gatsby-source-sanity/lib-es5/images/getGatsbyImageProps";

type SlideProps = {
  imageId?: ImageNode;
  children: JSX.Element;
};

const SlideWrapperStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const Content = styled.div`
  position: absolute;
  z-index: 1;
`;

const Slide = ({ imageId, children }: SlideProps) => {
  const imgData = getHeroImageFromId(imageId);
  return (
    <SlideWrapperStyles>
      <ImageWrapper>
        <GatsbyImage image={imgData} alt="kk" />
      </ImageWrapper>
      <Content>{children}</Content>
    </SlideWrapperStyles>
  );
};

export default Slide;
