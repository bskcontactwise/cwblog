// exports.createPages = async function ({ graphql, actions })  {
   
//     const {data} = await graphql`
// query{
//   allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//     edges {
//       node {
//         frontmatter {
//           slug
//         }
//         id
//       }
//     }
//   }
// }
      
//     `
//     // Create pagintion pages for posts
//     const postPerPage = 3
//     const numPages = math.ceil(data.allMdx.edges.length/postPerPage)
//     console.log(JSON.stringify(result, null, 4))
//     Array.from ({Lenght:numPages}).forEach ((_, i) => {
//       actions.createPages({
//         path: i === 0 ? '/' : '/${i+1}',
//         component:require.resolve("./src/templates/allPosts.js"),
//         context:{
//           limit:postPerPage,
//           skip:i *postPerPage,
//           numPages,
//           currentPage:i + 1,
//         }

//       })
//     })

//     // Create single blog posts

//     data.allMdx.edges.forEach(edge => {
//       const slug = edge.node.frontmatter.slug
//       const id = edge.node.frontmatter.id
//       actions.createPages({
//         path:slug,
//         component:require.resolve('./src/templates/singlePost.js'),
//         context:{id},
//       })
//     })
    
//   }