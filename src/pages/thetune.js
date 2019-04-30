import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'

import { color } from '../utilities/styles'
import { navigate } from 'gatsby'

const TuneContent = styled.div`
  margin-top: 3rem;
  max-width: 90rem;
  align-self: center;
`

const TuneHeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

const BackButton = styled.button`
  color: ${color.white};
  appearance: none;
  background: transparent;
  border: none;
  font-size: 2rem;
  text-transform: uppercase;
  align-self: center;
  border-bottom: 2px solid ${color.white};
  padding-bottom: 0.3rem;
`

const TuneHeading = styled(Heading)`
  color: ${color.white};
`

const TuneWrapper = styled(Wrapper)`
  background: ${color.black.alt};
  height: 100%;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  padding-bottom: 20rem;
  color: ${color.white};
`

// const TuneParagraph = styled.p`
//   color: ${color.white};
//   font-size: 1.6rem;
//   font-weight: 300;
//   letter-spacing: 2px;
//   line-height: 2.6rem;

//   &:not(:last-child) {
//     margin-bottom: 2rem;
//   }
// `

const TuneListHeading = styled.h3`
  margin-bottom: 2rem;
`

// const TLDRParagraph = styled(TuneParagraph)`
//   font-weight: 600;
//   padding: 4rem 0;
// `

const TuneList = styled.ul`
  color: ${color.white};
  margin-left: 2rem;
  list-style-type: square;
`

const TuneListItem = styled.li`
  margin-bottom: 1rem;
`

const propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      srcUrl: PropTypes.string,
    }),
  }),
}

const TheTune = ({ location }) => {
  const handleBackClick = event => {
    if (!location || !location.state || !location.state.srcUrl) return
    const {
      state: { srcUrl },
    } = location
    event.preventDefault()
    navigate(srcUrl)
  }

  return (
    <Layout dark>
      <TuneWrapper>
        <TuneContent>
          <TuneHeadingWrapper>
            <TuneHeading>The Tune</TuneHeading>
            <BackButton type="button" onClick={handleBackClick}>
              back
            </BackButton>
          </TuneHeadingWrapper>

          <TuneListHeading>The Tune includes:</TuneListHeading>
          <TuneList>
            <TuneListItem>Frame cleaning and inspection</TuneListItem>
            <TuneListItem>Headset overhaul </TuneListItem>
            <TuneListItem>Bottom bracket shell cleaning </TuneListItem>
            <TuneListItem>Front and rear hub adjust </TuneListItem>
            <TuneListItem>Front and rear wheel true </TuneListItem>
            <TuneListItem>
              Front and rear wheel dish and spoke tension check{' '}
            </TuneListItem>
            <TuneListItem>Front and rear wheel cleaning </TuneListItem>
            <TuneListItem>Tire inspection and inflation </TuneListItem>
            <TuneListItem>
              Full brake system inspection and adjustment Lever throw adjustment{' '}
            </TuneListItem>
            <TuneListItem>
              Crankset, chain, and cassette inspection{' '}
            </TuneListItem>
            <TuneListItem>Cassette lock ring torque check </TuneListItem>
            <TuneListItem>Front and rear derailleur adjustment </TuneListItem>
            <TuneListItem>Seatpost clean and grease </TuneListItem>
            <TuneListItem>Pedal threads cleaned and greased </TuneListItem>
            <TuneListItem>
              All bolts checked for manufacturers torque specifications
            </TuneListItem>
            <TuneListItem>Test ride </TuneListItem>
            <TuneListItem>
              A detailed service report of all work done and items of note for
              your review{' '}
            </TuneListItem>
            <TuneListItem>Q&A session upon pick up</TuneListItem>
          </TuneList>
        </TuneContent>
      </TuneWrapper>
    </Layout>
  )
}

TheTune.propTypes = propTypes

export default TheTune
