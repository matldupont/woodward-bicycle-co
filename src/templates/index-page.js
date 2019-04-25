import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
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
    width: 25rem;
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

const TestimonialWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 2rem 8rem;
`

const TestimonialContent = styled.div`
  padding: 0 3rem;
  max-width: 100rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${media.smallAndDown`
    padding: 0;
  `}

  & > * {
    max-width: 70rem;
    padding: 4rem;
    border-radius: 1px;
  }

  & > *:nth-child(odd) {
    align-self: flex-start;
    margin-top: -2rem;
  }

  & > *:nth-child(even) {
    margin-top: -2rem;
    align-self: flex-end;
    background-color: #333;
    color: #eaeaea;
  }

  & > *:nth-child(1) {
    background-color: ${color.gold};
  }

  & > *:nth-child(2) {
    background-color: ${color.grey.light};
  }

  & > *:nth-child(3) {
    background-color: ${color.teal.main};

    ${media.mediumAndUp`
      margin-left: 5rem;
    `}
  }
`

const TestimonialHeading = styled.h3`
  align-self: center;
  font-size: 3rem;
  font-weight: 300;
  margin-bottom: 2rem;

  ${media.smallAndDown`
    font-size: 2.4rem;
  `}
`

const Testimonial = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`

const TestimonialQuote = styled.div`
  align-self: flex-start;
`

const TestimonialAuthor = styled.i`
  align-self: flex-end;
`

const Location = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 8rem 2rem;

  div {
    text-align: center;

    &:nth-child(1) {
      font-size: 2.4rem;
      margin: 2rem;
    }

    &:nth-child(2) {
      font-style: italic;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;

      &::before,
      &::after {
        content: '';
        height: 1px;
        background-color: #333;
        width: 4rem;
        margin: 0 1rem;
      }
    }
  }
`

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Map = styled.iframe`
  align-self: stretch;
  width: 90%;
  margin: 4rem 0;
  max-width: 100rem;
  height: 50rem;
  flex: 1;
`

const Copyright = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
  font-size: 1.2rem;
`

const IndexPageTemplate = ({ quote, mainImage }) => {
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
            <PathLink to="/fix">Fix My Bike</PathLink>
            <ShortUnderline />
          </PathLinkWrapper>
          <Divider />
          <PathLinkWrapper>
            <PathLink to="/build">Build My Bike</PathLink>
            <ShortUnderline />
          </PathLinkWrapper>
        </PathContentWrapper>
      </PathWrapper>
      <TestimonialHeading>
        What are people saying about WBco?
      </TestimonialHeading>
      <TestimonialWrapper>
        <TestimonialContent>
          <Testimonial>
            <TestimonialQuote>
              {`"Great Service! Friendly, knowledgeable and passionate! Love your
            bike? It will be in good hands at Woodward Bicycle Co."`}
            </TestimonialQuote>
            <TestimonialAuthor>- Kyle</TestimonialAuthor>
          </Testimonial>
          <Testimonial>
            <TestimonialQuote>
              {`"Fantastic Service. Super knowledgeable and very helpful. I trust
            this guy with all my bikes, definitely my go-to guy for bikes!"`}
            </TestimonialQuote>
            <TestimonialAuthor>- Chris</TestimonialAuthor>
          </Testimonial>
          <Testimonial>
            <TestimonialQuote>
              {`"Are you eating enough?! You're looking thin..."`}
            </TestimonialQuote>
            <TestimonialAuthor>- Mom</TestimonialAuthor>
          </Testimonial>
        </TestimonialContent>
      </TestimonialWrapper>

      <Location>
        <div>Located near Carling/Kirkwood, Ottawa.</div>
        <div>By appointment only</div>
        <MapWrapper>
          <Map
            title="map to WBco"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7580.342177739016!2d-75.74240575547937!3d45.378867850299926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce06973f5df719%3A0xa28e9f509836f068!2sWoodward+Ave%2C+Ottawa%2C+ON!5e0!3m2!1sen!2sca!4v1554603667239!5m2!1sen!2sca"
            width="600"
            height="450"
            frameBorder="0"
            allowFullscreen
          />
        </MapWrapper>
      </Location>
      <Copyright>
        © Copyright 2019 Woodward Bicycle Co. All rights reserved.
      </Copyright>
    </Layout>
  )
}

IndexPageTemplate.propTypes = {
  quote: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  mainImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const IndexPage = ({ data }) => {
  const {
    frontmatter: { quote, mainImage },
  } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate quote={quote} mainImage={mainImage} />
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
        mainImage {
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
`
