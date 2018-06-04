import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import BannerSection from '../components/Features/BannerSection'
import FeaturesTitle from '../components/Features/FeaturesTitle'
import FeaturesOne from '../components/Features/FeaturesOne'
import FeaturesTwo from '../components/Features/FeaturesTwo'
import FeaturesThree from '../components/Features/FeaturesThree'
import AutomatedMarketing from '../components/Home/AutomatedMarketing'

//import featuresScore from '../../img/img-features_score_rank.svg'

const FeaturesPage = ({ data }) => {
  return (
    <div>
      <Helmet title={`Features | ${data.site.siteMetadata.title}`} />
      <BannerSection data={data.allMarkdownRemark.edges} />
      <FeaturesTitle data={data.allMarkdownRemark.edges} />
      <FeaturesOne data={data.allMarkdownRemark.edges} />
      <FeaturesTwo data={data.allMarkdownRemark.edges} />
      <FeaturesThree data={data.allMarkdownRemark.edges} />
      <AutomatedMarketing data={data.allMarkdownRemark.edges} />
    </div>
  )
}

FeaturesPage.propTypes = {
  data: PropTypes.object,
}

export default FeaturesPage

export const featurePageQuery = graphql`
  query FeaturesQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            automatedMarketingButton
            contentType
            date(formatString: "MMMM DD, YYYY")
            description
            featureButton
            featureType
            header
            path
            title
            step
          }
        }
      }
    }
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
