import React from 'react'
import PropTypes from 'prop-types'
import { navigate, graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import TracedImage from '../components/TracedImage'

import { color, media } from '../utilities/styles'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
  align-self: stretch;
`

const Banner = styled.div`
  max-width: 70rem;
  width: 100%;
  padding-top: 1rem;
  height: 40rem;
  position: relative;

  @media only screen and (min-width: 40rem) {
    margin-top: 3rem;
  }

  @media only screen and (min-width: 60rem) {
    margin-top: 5rem;
  }
`

const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;
  max-width: 45rem;

  div {
    height: 145%;
    margin-top: -25%;
  }
`

const TextContainer = styled.h1`
  position: absolute;
  top: 4rem;
  right: 0;
  width: calc(100vw - 4rem);
  background: ${color.grey.transparent};
  color: ${color.white};
  padding: 2rem;
  font-size: 2.6rem;
  font-weight: 300;

  max-width: 40rem;
`

const Quote = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const Author = styled.div`
  font-size: 1.6rem;
  text-align: right;
  font-weight: 600;
  letter-spacing: 1px;
`

const TheTuneSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8rem 0 0;
  max-width: 100rem;

  ${media.largeAndUp`
    flex-direction: row;
    align-items: flex-start;
  `}
`

const TheTuneText = styled.div`
  font-size: 1.8rem;
  line-height: 2.8rem;
  padding: 0 2rem;
  letter-spacing: 0.4px;
  color: ${color.black.main};
  font-weight: 500;
  margin-bottom: 6rem;
  max-width: 45rem;
`

const LeadingCapital = styled.span`
  font-weight: 600;
  font-size: 3rem;
  font-style: italic;
`

const TheTuneContainer = styled.div`
  box-shadow: 0 0px 70px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30rem;
  position: relative;
  width: 100%;
  max-width: 37rem;
`

const TheTuneOverlayText = styled.div`
  position: absolute;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  text-transform: uppercase;
  padding: 1rem;
  font-weight: 300;
`

const TheTuneTitle = styled(TheTuneOverlayText)`
  top: 2rem;
  left: 1rem;
  font-size: 4rem;
`

const TheTunePrice = styled(TheTuneOverlayText)`
  top: 8rem;
  left: 13rem;
  font-size: 3rem;
`

const TheTuneButton = styled.button`
  position: absolute;
  bottom: 4rem;
  right: 1rem;
  height: 13rem;
  width: 13rem;
  background: ${color.blue.dark};
  border: none;
  padding: 0;

  border-radius: 50%;
  box-shadow: 0px 5px 14px 0px hsla(0, 0%, 0%, 0.95);
  display: flex;
  justify-content: center;
`

const TheTuneButtonRing = styled.div`
  background: #fff;
  height: 12rem;
  width: 12rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TheTuneButtonInside = styled.div`
  background: ${color.blue.dark};
  height: 11rem;
  width: 11rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`

const TheTuneButtonText = styled.div`
  color: #fff;
  font-size: 2.2rem;
  font-weight: 500;
  padding: 0.3rem 0.3rem;
  border-bottom: 2px solid #fff;
  margin-top: -1rem;
`

const PathWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 8rem 0;
  font-size: 2rem;
  text-transform: uppercase;
`

const PathContentWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  max-width: 56rem;
  alignt: center;

  ${media.smallAndDown`
    flex-direction: column;
  `}
`

const Divider = styled.div`
  content: '';
  width: 1px;
  align-self: stretch;
  background: #ddd;

  ${media.smallAndDown`
    height: 1px;
    width: 30rem;
    align-self: center;
  `}
`

const ShortUnderline = styled.div`
  content: '';
  width: 6rem;
  height: 1px;
  background: #ccc;
  transition: all 0.2s;
`

const PathLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  &:hover {
    ${ShortUnderline} {
      width: 10rem;
      background: #333;
    }

    a {
      transform: scale(1.1);
    }
  }

  ${media.smallAndDown`
    margin: 4rem;
  `}
`

const PathLink = styled(Link)`
  margin-bottom: 1rem;
  letter-spacing: 1px;
  transition: all 0.2s;
`

const IndexPageTemplate = ({ quote, mainText, mainImage, topPackage }) => {
  const handleTuneClick = event => {
    event.preventDefault()

    navigate('/thetune')
  }

  const getMainText = () => {
    return (
      <React.Fragment>
        <LeadingCapital>{mainText[0]}</LeadingCapital>
        {mainText.substring(1)}
      </React.Fragment>
    )
  }
  return (
    <Layout>
      <Main>
        <Banner>
          <ImageContainer>
            <TracedImage imageInfo={mainImage} />
          </ImageContainer>
          <TextContainer>
            <Quote>
              {quote.map((q, i) => (
                <div key={`quote${i}`}>{q.text}</div>
              ))}
            </Quote>
            <Author>~ Lukasz Dybinski</Author>
          </TextContainer>
        </Banner>
      </Main>
      <PathWrapper>
        <PathContentWrapper>
          <PathLinkWrapper>
            <PathLink to="/">Fix My Bike</PathLink>
            <ShortUnderline />
          </PathLinkWrapper>
          <Divider />
          <PathLinkWrapper>
            <PathLink to="/">Build My Bike</PathLink>
            <ShortUnderline />
          </PathLinkWrapper>
        </PathContentWrapper>
      </PathWrapper>
      <TheTuneSection>
        <TheTuneText>{getMainText()}</TheTuneText>
        <TheTuneContainer>
          <TracedImage imageInfo={topPackage.packageImage} />
          <TheTuneTitle>{topPackage.title}</TheTuneTitle>
          <TheTunePrice>{topPackage.price}</TheTunePrice>
          <TheTuneButton type="button" onClick={handleTuneClick}>
            <TheTuneButtonRing>
              <TheTuneButtonInside>
                <TheTuneButtonText>Details</TheTuneButtonText>
              </TheTuneButtonInside>
            </TheTuneButtonRing>
          </TheTuneButton>
        </TheTuneContainer>
      </TheTuneSection>
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  quote: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  mainText: PropTypes.string,
  mainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  topPackage: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
  }),
}

const IndexPage = ({ data }) => {
  const {
    frontmatter: { quote, mainText, mainImage, topPackage },
  } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        quote={quote}
        mainText={mainText}
        mainImage={mainImage}
        topPackage={topPackage}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        quote {
          text
        }
        mainText
        mainImage {
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        topPackage {
          title
          price
          packageImage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
