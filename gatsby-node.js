import path from 'path'

async function turnPizzasIntoPages({ graphql, actions }) {
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
  // 3. Loop over each pizza and create a page for that pizza
  data.allSanityMainCategory.nodes.forEach((mainCategory) => {
    actions.createPage({
      // What is the URL for this new page??
      path: `/${mainCategory.slug.current}`,
      component: mainCategoryTemplate,
      context: {
        slug: mainCategory.slug.current,
      },
    })
  })
}

export async function createPages(params) {
  // Create pages dynamically
  // Wait for all promises to be resolved before finishing this function
  await Promise.all([turnPizzasIntoPages(params)])
}
