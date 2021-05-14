import { useStaticQuery, graphql } from 'gatsby'
import { Product } from '../../types/sanity'
export const useFeaturedProducts = () => {
  const {
    allSanityEquipment: { nodes },
  }: { allSanityEquipment: { nodes: Product[] } } = useStaticQuery(graphql`
    query FeaturedProducts {
      allSanityEquipment(filter: { featured: { eq: true } }) {
        nodes {
          id
          description
          title
          slug {
            current
          }
          featured
          images {
            asset {
              id
            }
          }
          category {
            slug {
              current
            }
            mainCategory {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `)
  return nodes
}
