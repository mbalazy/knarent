import { getGatsbyImageData } from 'gatsby-source-sanity'
import {
  GatsbyImageDataArgs,
  ImageNode,
} from 'gatsby-source-sanity/lib-es5/images/getGatsbyImageProps'

const sanityConfig = {
  projectId: `${process.env.GATSBY_SANITY_PROJECT_ID}`,
  dataset: 'production',
}
type Layout = 'constrained' | 'fixed' | 'fullWidth'

export const getImageFromId = (
  imageId: ImageNode,
  layout: Layout = 'fullWidth',
  maxWidth = 800
) => {
  return getGatsbyImageData(imageId, { maxWidth, layout } as GatsbyImageDataArgs, sanityConfig)
}
