import React from 'react'
import { Col } from '../Layout'
import { H2 } from '../Typography'

const Wrapper = Col.extend`
  background: #f5f7fa;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 576px) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 20px;
    padding-bottom: 10px;
  }
`

const FeaturesSectionTitle = H2.extend`
  margin-bottom: 20px;
  text-align: center;
  @media screen and (max-width: 576px) {
    margin-bottom: 18px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`

const FeaturesTitle = data => {
  const featureTitle = data.data.filter(item => {
    return (
      item.node.frontmatter.contentType == 'feature' &&
      item.node.frontmatter.featureType == 'featureTitle'
    )
  })
  return (
    <Wrapper>
      {featureTitle && (
        <div>
          {featureTitle.map((item, i) => (
            <FeaturesSectionTitle key={i}>
              {item.node.frontmatter.title}
            </FeaturesSectionTitle>
          ))}
        </div>
      )}
    </Wrapper>
  )
}

export default FeaturesTitle
