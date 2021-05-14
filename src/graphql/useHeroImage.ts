import { useStaticQuery, graphql } from 'gatsby'

export const useHeroImage = () => {
  const { imageFile } = useStaticQuery(graphql`
    query HeroImage {
      imageFile: file(relativePath: { eq: "hero-2.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH, quality: 80, width: 1800)
        }
      }
    }
  `)
  return imageFile
}
