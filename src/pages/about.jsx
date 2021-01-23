import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const AboutPage = () => {
  return (
    <>
      <SEO title='About page' />
      <Layout>
        <h1>About</h1>
        <div className="about-content">
          <p>About content...</p>
          <Link to='/'>Return to index page.</Link>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage