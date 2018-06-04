import React from 'react'
import styled from 'styled-components'
import { H2, H6 } from '../Typography'
import { Container, Row, Col } from '../Layout'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import featuresScore from '../../img/img-features_score_rank.svg'

const Wrapper = styled.div`
  background: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
`

const Content = Container.extend`
  margin-top: 60px;
  column-count: 1;
  -webkit-column-count: 1;
  -moz-column-count: 1;
  @media screen and (max-width: 576px) {
    column-count: 1;
    -webkit-column-count: 1;
    -moz-column-count: 1;
    padding: 0 2rem;
  }
`

const FeatureContent = H6.extend`
  max-width: 380px;
  font-weight: 400;
  margin-bottom: 2rem;
  padding-left: 1rem;
  @media screen and (max-width: 576px) {
    margin-bottom: 1rem;
  }
`

const FeatureRow = Row.extend`
  position: relative;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap-reverse;
  }
`

const ImgCol = Col.extend`
  position: absolute;
  right: 80px;
  height: 480px;
  @media screen and (max-width: 767px) {
    position: initial;
    height: 500px;
  }
  @media screen and (max-width: 490px) {
    height: 440px;
  }
  @media screen and (max-width: 490px) {
    height: 90vw;
  }
`

const ContentCol = Col.extend`
  margin-left: 50%;
  left: -550px;
  @media screen and (max-width: 767px) {
    margin-left: 0;
    left: 0;
  }
`

const FeatureTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
  line-height: 24px;
  text-align: left;
`

const StepThree = H2.extend`
  color: #000000;
  line-height: normal;
  align: left;
  margin-top: 0px;
`

const FeaturesThree = data => {
  const featureThree = data.data.filter(item => {
    return (
      item.node.frontmatter.contentType == 'feature' &&
      item.node.frontmatter.featureType == 'featureThree'
    )
  })
  return (
    <Wrapper>
      {featureThree && (
        <Content>
          <FeatureRow>
            <ImgCol xs="12" sm="6">
              {typeof window !== 'undefined' && (
                <LazyLoadImage
                  src={featuresScore}
                  effect="blur"
                  width="100%"
                  height="auto"
                />
              )}
            </ImgCol>
            {featureThree.map((item, i) => (
              <ContentCol xs="12" sm="6" key={i}>
                <StepThree>{item.node.frontmatter.step}</StepThree>
                <FeatureTitle>{item.node.frontmatter.title}</FeatureTitle>
                <FeatureContent>
                  {item.node.frontmatter.description}
                </FeatureContent>
              </ContentCol>
            ))}
          </FeatureRow>
        </Content>
      )}
    </Wrapper>
  )
}

export default FeaturesThree
