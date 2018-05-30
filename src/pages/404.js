import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import NotFound from '../components/NotFound'

const NotFoundPage = ({ data }) => {
  return (
    <div>
      <Helmet title={`Page Not Found | ${data.site.siteMetadata.title}`} />
      <NotFound />
    </div>
  )
}

NotFoundPage.propTypes = {
  data: PropTypes.object,
}

export default NotFoundPage

export const NotFoundPageQuery = graphql`
  query PageNotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
    allFile(filter: { absolutePath: { regex: "/images/" } }) {
      edges {
        node {
          extension
          dir
          absolutePath
          relativePath
        }
      }
    }
  }
`
