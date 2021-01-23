import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadataQuery = () => {
  const { site: { siteMetadata } } = useStaticQuery(graphql`
    query SiteMetaData {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return { siteMetadata }
}

export { useSiteMetadataQuery }