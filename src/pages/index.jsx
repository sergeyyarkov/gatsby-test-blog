import React from 'react';
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const IndexPage = ({ data: { articles: { edges } } }) => {
  return (
    <>
      <SEO title='Index page' />
      <Layout>
        <h1>Articles ({ edges.length }):</h1>
        <div className="main-posts">
          {edges.map(({ node }, i) => (
             <div className='post' key={i}>
                <h2>
                  <Link to={`/article/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                </h2>
                <small>{node.frontmatter.date}</small>
                <p>{node.frontmatter.description}</p>
              </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
{
    articles: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "article" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "D MMMM YYYY", locale: "ru-RU")
            description
          }
        }
      }
    }
  }
`

export default IndexPage