import React from 'react';
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useSiteMetadataQuery } from '../../hooks/useSiteMetadataQuery'

const SEO = ({ title, description }) => {
  const { siteMetadata } = useSiteMetadataQuery()

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description
  }

  return (
    <Helmet title={seo.title} titleTemplate={`${seo.title} - ${siteMetadata.title}`} >
      <html lang="ru" />
      <meta name="description" content={seo.description} />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}