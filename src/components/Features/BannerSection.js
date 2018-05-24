import React from 'react'
import { Container } from '../Layout'
import Button from '../Button'
import Link from 'gatsby-link'
import styled from 'styled-components'

import bannerImage from '../../img/background.svg'
import bannerImageMobile from '../../img/mobile-background_blue.svg'
import cupAndCards from '../../img/img-cup_and_cards.svg'

const Wrapper = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: left top;
  color: ${props => props.theme.banner.color.text};
  position: relative;
  margin-top: 90px;
  height: 452px;
  @media screen and (max-width: 767px) {
    height: 750px;
  }
  @media screen and (max-width: 576px) {
    background-image: url(${bannerImageMobile});
    margin-top: 60px;
    height: 340px;
  }
`

const BannerContainer = Container.extend`
  padding-top: 144px;
  height: 100%;
  position: relative;
`

const ImgCards = styled.img`
  width: auto;
  height: auto;
  @media screen and (max-width: 767px) {
    width: 80%;
    height: auto;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 576px) {
    width: 80%;
    height: auto;
  }
`

const FeaturesButton = Button.extend`
  position: absolute;
  right: 4rem;
  top: 14rem;
  @media screen and (max-width: 576px) {
    top: 5rem;
    right: 4rem;
    font-size: 14px;
    line-height: 19px;
    padding: 0.5rem 3rem;
  }
`

const BannerSection = data => {
  const featureBanner = data.data.filter(item => {
    return item.node.frontmatter.contentType == 'featureBanner'
  })
  return (
    <Wrapper>
      {featureBanner && (
        <BannerContainer>
          {featureBanner.map((item, i) => (
            <Link to="/beta" key={i}>
              <FeaturesButton>
                {item.node.frontmatter.featureButton}
              </FeaturesButton>
            </Link>
          ))}
          <ImgCards src={cupAndCards} />
        </BannerContainer>
      )}
    </Wrapper>
  )
}

export default BannerSection
