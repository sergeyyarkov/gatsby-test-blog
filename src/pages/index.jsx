import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const IndexPage = () => {
  return (
    <>
      <SEO title='Index page' />
      <Layout>
        <h1>Articles (6):</h1>
        <div className="main-posts">
          <div className='post'>
              <h2>
                <Link to={'/'}>{'Article 1'}</Link>
              </h2>
              <small>{'2021-01-01'}</small>
            </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage