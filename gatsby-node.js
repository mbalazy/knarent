import path from 'path'

const turnMainCategoryIntoPages = async ({ graphql, actions }) => {
  const mainCategoryTemplate = path.resolve('./src/templates/MainCategory.tsx')
  const { data } = await graphql(`
    query AllMainCategory {
      allSanityMainCategory {
        nodes {
          title
          slug {
            current
          }
        }
      }
    }
  `)
  data.allSanityMainCategory.nodes.forEach((mainCategory) => {
    actions.createPage({
      path: `/${mainCategory.slug.current}`,
      component: mainCategoryTemplate,
      context: {
        slug: mainCategory.slug.current,
      },
    })
  })
}

const turnCategoryIntoPages = async ({ graphql, actions }) => {
  const categoryTemplate = path.resolve('./src/templates/Category.tsx')
  const { data } = await graphql(`
    query AllCategory {
      allSanityCategory {
        nodes {
          title
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
  `)
  data.allSanityCategory.nodes.forEach((category) => {
    actions.createPage({
      path: `/${category.mainCategory.slug.current}/${category.slug.current}`,
      component: categoryTemplate,
      context: {
        slug: category.slug.current,
      },
    })
  })
}

const turnProductsIntoPages = async ({ graphql, actions }) => {
  const productTemplate = path.resolve('./src/templates/Product.tsx')
  const { data } = await graphql(`
    query SanityProducts {
      allProducts: allSanityEquipment {
        nodes {
          slug {
            current
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
  data.allProducts.nodes.forEach((product) => {
    actions.createPage({
      path: `/${product.category.mainCategory.slug.current}/${product.category.slug.current}/${product.slug.current}`,
      component: productTemplate,
      context: {
        slug: product.slug.current,
      },
    })
  })
}

export async function createPages(params) {
  await Promise.all([
    turnMainCategoryIntoPages(params),
    turnCategoryIntoPages(params),
    turnProductsIntoPages(params),
  ])
}
