import path from 'path'

async function turnMainCategoryIntoPages({ graphql, actions }) {
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

async function turnCategoryIntoPages({ graphql, actions }) {
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

export async function createPages(params) {
  await Promise.all([turnMainCategoryIntoPages(params), turnCategoryIntoPages(params)])
}
