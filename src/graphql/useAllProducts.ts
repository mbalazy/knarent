import { useStaticQuery, graphql } from 'gatsby'
import { Product } from '../../types/sanity'

export const useAllProducts = () => {
  const {
    allSanityEquipment: { nodes },
  }: { allSanityEquipment: { nodes: Product[] } } = useStaticQuery(graphql`
    query {
      allSanityEquipment {
        nodes {
          title
          images {
            asset {
              id
            }
          }
          id
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
          slug {
            current
          }
        }
      }
    }
  `)
  return nodes
}
