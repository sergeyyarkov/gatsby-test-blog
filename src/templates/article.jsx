import React from 'react';
import { graphql } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const articleTemplate = ({ data: { article: { frontmatter, html } } }) => {
  return (
    <>
      <SEO title={frontmatter.title} />
      <Layout>
        <div className="blog-post">
          <div className="blog-post__title">
            <h1>{frontmatter.title}</h1>
          </div>
          <div className="blog-post__date">
            <small>{frontmatter.date}</small>
          </div>
          <div className="blog-post__description">
            <p>{frontmatter.description}</p>
          </div>
          <div className="blog-post__img">
            <img src={frontmatter.image} alt={frontmatter.title}/>
          </div>
          <div className="blog-post__content">
           <div dangerouslySetInnerHTML={{ __html: html }}></div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query Article($slug: String!) {
    article: markdownRemark(frontmatter: {slug: {eq: $slug}}) {
      html
      frontmatter {
        slug
        title
        description
        date(formatString: "D MMMM YYYY", locale: "ru-RU")
        image
      }
    }
  }
`

export default articleTemplate