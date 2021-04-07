import React from "react";
import { useState } from "react";
import styled from "styled-components";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import { useStaticQuery, graphql } from "gatsby";
import useCurrentWidth from "../utils/useCurrentWidth";

const SliderWrapperStyles = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
  width: 100%;
`;

const HeroSlider = () => {
  const { allSanityMainCategory } = useStaticQuery(graphql`
    query AllMainCategory {
      allSanityMainCategory {
        edges {
          node {
            title
            images {
              asset {
                id
              }
            }
          }
        }
      }
    }
  `);

  const allMainCategories = allSanityMainCategory.edges;

  const windowWidth = useCurrentWidth();
  const contentWidth = windowWidth * allMainCategories.length;

  const [state, setState] = useState({
    translateX: windowWidth,
    transition: 0.35,
  });

  const { translateX, transition } = state;

  return (
    <SliderWrapperStyles>
      <SliderContent
        width={contentWidth}
        translateX={translateX}
        transition={transition}
      >
        {allMainCategories.map((category) => (
          <Slide
            key={category.node.title}
            imageId={category.node.images.asset.id}
          >
            {category.node.title}
          </Slide>
        ))}
      </SliderContent>
    </SliderWrapperStyles>
  );
};

export default HeroSlider;
