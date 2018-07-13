import React from 'react'
import { Container } from '../Layout'
import { H2, H6 } from '../Typography'
import styled from 'styled-components'
import Button from '../Button'
import Link from 'gatsby-link'

// import bannerImage from '../../img/background.svg'
import bannerImage from '../../img/banner-backdrop.jpg'
import bannerImageMobile from '../../img/mobile-background_blue.svg'
// import personOne from '../../img/img-person1.svg'
// import personTwo from '../../img/img-person2.svg'
// import personThree from '../../img/img-person3.svg'
// import personFour from '../../img/img-person4.svg'

const Wrapper = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-position: left top;
  color: ${props => props.theme.banner.color.text};
  position: relative;
  margin-top: 90px;
  height: 700px;
  @media screen and (max-width: 767px) {
    height: 750px;
  }
  @media screen and (max-width: 576px) {
    background-image: url(${bannerImageMobile});
    margin-top: 70px;
    height: 680px;
  }
`

const Header = H2.extend`
  color: ${props => props.theme.banner.color.text};
  font-family: GTWalsheimMedium;
  @media screen and (max-width: 576px) {
    font-size: 24px;
    line-height: 28px;
  }
`

const BannerSubTitle = H6.extend`
  color: #fff;
  font-weight: 400;
  max-width: 560px;
  margin-bottom: 26px;
`

const BannerContainer = Container.extend`
  padding-top: 144px;
  height: 100%;
  position: relative;
`

const BannerSection = data => {
  const homeBanner = data.data.filter(item => {
    return item.node.frontmatter.contentType == 'banner'
  })
  return (
    <Wrapper>
      {homeBanner && (
        <BannerContainer>
          {homeBanner.map((item, i) => (
            <Header key={i}>{item.node.frontmatter.header}</Header>
          ))}
          {homeBanner.map((item, i) => (
            <BannerSubTitle key={i}>
              {item.node.frontmatter.title}
            </BannerSubTitle>
          ))}
          {homeBanner.map((item, i) => (
            <Link to="/onboard" key={i}>
              <Button>{item.node.frontmatter.button}</Button>
            </Link>
          ))}
        </BannerContainer>
      )}
    </Wrapper>
  )
}

export default BannerSection
