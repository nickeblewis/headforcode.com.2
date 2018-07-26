import React from 'react'
import PropTypes from 'prop-types'
import graphql from 'graphql'
import Helmet from 'react-helmet'
import BannerSection from '../components/Home/BannerSection'
// import HowItWorks from '../components/Home/HowItWorks'
// import News from '../components/Home/News'
// import Benefits from '../components/Home/Benefits'
// import Testimonials from '../components/Home/Testimonials'
// import AutomatedMarketing from '../components/Home/AutomatedMarketing'

const IndexPage = ({ data }) => (
  <div>
    <Helmet title={`Home | ${data.site.siteMetadata.title}`} />
    <BannerSection data={data.allMarkdownRemark.edges} />
    {/* <HowItWorks />
    <Benefits data={data} />
    <News data={data} />
    <Testimonials data={data} />
    <AutomatedMarketing data={data.allMarkdownRemark.edges} /> */}
  </div>
)

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            title
            image
            contentType
            date(formatString: "MMMM DD, YYYY")
            path
            description
            summary
            newsFlag
            postimage
            position
            comment
            photo
            button
            header
            personName
            personRole
            mission
            content
            automatedMarketingButton
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
          absolutePath
          relativePath
          childImageSharp {
            sizes(maxWidth: 630) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`
