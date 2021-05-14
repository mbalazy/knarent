import { graphql, useStaticQuery } from 'gatsby'
import { Category, MainCategory } from '../../types/sanity'

export const useAllCategory = () => {
  const {
    allSanityMainCategory: { nodes: mainCategories },
    allSanityCategory: { nodes: categories },
  }: {
    allSanityMainCategory: { nodes: MainCategory[] }
    allSanityCategory: { nodes: Category[] }
  } = useStaticQuery(graphql`
    query {
      allSanityMainCategory {
        nodes {
          id
          description
          title
          images {
            asset {
              id
            }
          }
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          title
          id
          slug {
            current
          }
          mainCategory {
            id
          }
        }
      }
    }
  `)
  return { mainCategories, categories }
}
