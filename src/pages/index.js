import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout'

import MainImage from '../components/MainImage'
import TheTuneImage from '../components/TheTuneImage'

import { color, media } from '../utilities/styles'

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem;
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
  margin: 8rem auto 0;
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
  color: ${color.black};
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
  height: 37rem;
  width: 37rem;
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
  top: 6rem;
  left: 3rem;
  font-size: 5rem;
`

const TheTunePrice = styled(TheTuneOverlayText)`
  top: 12.5rem;
  left: 5rem;
  font-size: 4rem;
`

const TheTuneButton = styled.button`
  position: absolute;
  bottom: 1rem;
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

const IndexPage = () => (
  <Layout>
    <Main>
      <Banner>
        <ImageContainer>
          <MainImage />
        </ImageContainer>
        <TextContainer>
          <Quote>
            <div>You love your bike.</div>
            <div>So do I.</div>
          </Quote>
          <Author>~ Lukasz Dybinski</Author>
        </TextContainer>
      </Banner>
    </Main>
    <TheTuneSection>
      <TheTuneText>
        <LeadingCapital>W</LeadingCapital>elcome, Woodward Bicycle Co is a
        repair and build studio in Carlington, Ottawa. All repairs are by
        appointment in order to give you our undivided attention and all starts
        with…
      </TheTuneText>
      <TheTuneContainer>
        <TheTuneImage />
        <TheTuneTitle>the tune</TheTuneTitle>
        <TheTunePrice>$145</TheTunePrice>
        <TheTuneButton>
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

export default IndexPage
