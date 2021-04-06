import React from "react";
import { useState } from "react";
import styled, { css } from "styled-components";
import SliderContent from "./SliderContent";
import Slide from "./Slide";
import { useStaticQuery, graphql } from "gatsby";

export const MainSliderHeight = css`
  height: calc(100vh - 70px);
  height: calc(100vh - ${({ theme }) => theme.dimensions.navbarHeight});
`;

const SliderWrapperStyles = styled.div`
  position: relative;
  ${MainSliderHeight};
  width: 100%;
  overflow: hidden;
`;

const Slider = () => {
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

  const categories = allSanityMainCategory.edges;
  let getWidth = () => 0;
  if (typeof window !== "undefined") {
    // browser code
    getWidth = () => window?.innerWidth || 0;
  }

  const [state, setState] = useState({
    translateX: 0,
    transition: 0.45,
  });

  const { translateX, transition } = state;

  return (
    <SliderWrapperStyles>
      <SliderContent
        width={getWidth()}
        translateX={translateX}
        transition={transition}
      >
        <Slide imageId={categories[0].node.images.asset.id}>
          <p>a kajf ksjdf jdfhg 12hjebdk </p>
        </Slide>
      </SliderContent>
    </SliderWrapperStyles>
  );
};

export default Slider;
