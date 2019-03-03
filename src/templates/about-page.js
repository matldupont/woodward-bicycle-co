import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'
import TracedImage from '../components/TracedImage'

const AboutWrapper = styled(Wrapper)`
  max-width: 70rem;
`

const AboutParagraph = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;

  &:not(:last-child) {
    margin-bottom: 5rem;
  }
`
const CircleImageWrapper = styled.figure`
  width: 18rem;
  height: 18rem;
  float: left;
  margin-right: 2rem;

  @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
    clip-path: circle(50% at 50% 50%);
    shape-outside: circle(50% at 50% 50%);
  }
`

const BannerImageWrapper = styled.figure`
  height: 10rem;
  overflow: hidden;
  margin: 3rem 0;
  width: 100%;

  div {
    transform: translateY(-40%);
  }
`

const AboutPageTemplate = ({
  heading,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  roundImage,
  bannerImage,
  fullImage,
}) => {
  return (
    <Layout>
      <AboutWrapper>
        <Heading>{heading}</Heading>
        <AboutParagraph>{paragraph1}</AboutParagraph>
        <CircleImageWrapper>
          <TracedImage imageInfo={roundImage} />
        </CircleImageWrapper>

        <AboutParagraph>{paragraph2}</AboutParagraph>
      </AboutWrapper>

      <BannerImageWrapper>
        <TracedImage imageInfo={bannerImage} />
      </BannerImageWrapper>
      <AboutWrapper>
        <AboutParagraph>{paragraph3}</AboutParagraph>

        <AboutParagraph>{paragraph4}</AboutParagraph>
        <TracedImage imageInfo={fullImage} />
      </AboutWrapper>
    </Layout>
  )
}

AboutPageTemplate.propTypes = {
  heading: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  paragraph3: PropTypes.string,
  paragraph4: PropTypes.string,
  roundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  bannerImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const AboutPage = ({ data }) => {
  const {
    frontmatter: {
      heading,
      paragraph1,
      paragraph2,
      paragraph3,
      paragraph4,
      roundImage,
      bannerImage,
      fullImage,
    },
  } = data.markdownRemark

  return (
    <Layout>
      <AboutPageTemplate
        heading={heading}
        paragraph1={paragraph1}
        paragraph2={paragraph2}
        paragraph3={paragraph3}
        paragraph4={paragraph4}
        roundImage={roundImage}
        bannerImage={bannerImage}
        fullImage={fullImage}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heading
        paragraph1
        paragraph2
        paragraph3
        paragraph4
        roundImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        bannerImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fullImage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
