import React from 'react'
import styled from 'styled-components'
import { H2, H6 } from '../Typography'
import { Container, Row, Col } from '../Layout'

const Wrapper = styled.div`
  padding-top: 200px;
  padding-bottom: 115px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-top: 150px;
  }
  @media screen and (max-width: 576px) {
    padding-top: 80px;
  }
`

const ImgView = styled.div`
  width: 100%;
  height: 140px;
  position: relative;
  margin-bottom: 16px;

  @media screen and (max-width: 576px) {
    height: 110px;
  }
`

const BannerCol = Col.extend`
  @media screen and (max-width: 576px) {
    width: 80%;
    margin: 0 auto;
  }
`

const BenefitsSectionTitle = H2.extend`
  text-align: center;
  @media screen and (max-width: 576px) {
    margin-top: 18px;
    margin-bottom: 18px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`

const Header = H6.extend`
  margin-bottom: 10px;
`

const Description = H6.extend`
  font-weight: 500;
`

const iconStyle = {
  position: 'absolute',
  bottom: 0,
  left: '50%',
  transform: 'translateX(-50%)',
}

const BenefitsSection = data => {
  const benefits = data.data.allMarkdownRemark.edges.filter(item => {
    return item.node.frontmatter.contentType === 'benefit'
  })
  return (
    <Wrapper>
      <BenefitsSectionTitle>Benefits</BenefitsSectionTitle>
      {benefits && (
        <Container>
          <Row>
            {benefits.map((item, i) => (
              <BannerCol xs="12" sm="6" md="3" key={i}>
                <ImgView>
                  <img
                    src={item.node.frontmatter.image}
                    style={iconStyle}
                    width="50px"
                  />
                </ImgView>
                <Header>{item.node.frontmatter.header}</Header>
                <Description>{item.node.frontmatter.description}</Description>
              </BannerCol>
            ))}
          </Row>
        </Container>
      )}
    </Wrapper>
  )
}

export default BenefitsSection
