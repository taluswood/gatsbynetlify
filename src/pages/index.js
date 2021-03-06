import React from 'react'
import PostListing from '../components/posts/PostListing'

const IndexPage = ({data}) => (
  <div>
  <h2>Posts</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
)

export default IndexPage

export const query = graphql`
  query siteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`