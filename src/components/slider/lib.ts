import { GATSBY_SANITY_PROJECT_ID } from "gatsby-env-variables";
import { getGatsbyImageData } from "gatsby-source-sanity";
import {
  GatsbyImageDataArgs,
  ImageNode,
} from "gatsby-source-sanity/lib-es5/images/getGatsbyImageProps";

const sanityConfig = {
  projectId: GATSBY_SANITY_PROJECT_ID,
  dataset: "production",
};

export const getHeroImageFromId = (imageId: ImageNode) => {
  return getGatsbyImageData(
    imageId,
    { maxWidth: 1920, layout: "fullWidth" } as GatsbyImageDataArgs,
    sanityConfig
  );
};
