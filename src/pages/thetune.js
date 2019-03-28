import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'

import { color } from '../utilities/styles'

const TuneContent = styled.div`
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
`

const TuneParagraph = styled.p`
  color: ${color.white};
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: 2px;
  line-height: 2.6rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`

const TLDRParagraph = styled(TuneParagraph)`
  font-weight: 600;
  padding: 4rem 0;
`

const TheTune = () => {
  const handleBackClick = event => {
    event.preventDefault()
    window.history.back()
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

          <TLDRParagraph>
            TLDR; Your bike now rides better than it ever has.
          </TLDRParagraph>
          <TuneParagraph>
            Your wheels come off. Your pedals and crankset are removed. Your
            bike gets a detailed cleaning, polish and a thorough inspection.
            Every bearing in your bike is addressed, adjusted, set, and
            verified. Your wheels are given a detailed cleaning and inspection.
            They are trued laterally, radially, and centred. Your tires are
            inspected for wear and damage then inflated to the manufacturers
            recommended pressure. Your wheels are then re installed into the
            frame, checked for centre, and wheel nuts or quick release skewers
            are installed to the recommended torque.
          </TuneParagraph>
          <TuneParagraph>
            We then move on to your brakes. (I say “we” but I mean “I” -
            #futureproofing). The brake levers, cables, housing, and calipers
            are all thoroughly inspected. Your brake calipers are cleaned,
            centred and torqued to manufacturers specifications. Your brake pads
            are inspected and adjusted for proper height, rotation and pitch. We
            torque those to manufacturers specifications too. Your levers are
            ergonomically set and mounting bolts torqued. Lever throw is set to
            be equal for both front and rear brake. We are now ready to address
            the drivetrain.
          </TuneParagraph>
          <TuneParagraph>
            Crankset bolts are verified for torque, and your crankset gets wiped
            down. Your pedals are cleaned, lubed and fresh grease is applied to
            the pedal threads. Your crankset is re installed to manufacturers
            specifications and pedals are spun into place and torqued. Your
            chain is inspected and measured for wear. Your cassette/ freewheel
            is checked for proper torque. Front derailleur height and rotation
            are set. Rear derailleur alignment is verified and adjusted if
            needed. Your shifters, cables and housing are all inspected and all
            drivetrain pivot points are lubricated. Your limit screws and
            indexing are set. (we make sure your derailleurs work like they are
            supposed to).
          </TuneParagraph>
          <TuneParagraph>
            Your saddle is then levelled and your bicycle is test ridden. The
            test ride verifies shifting in all gear combinations and your
            braking performance.
          </TuneParagraph>
          <TuneParagraph>
            Back to the shop. Your bike is wiped down. All adjustments verified.
            All bolts torque double checked. Your service report is then marked
            as complete and emailed to you for your reading enjoyment. Don’t
            worry, we review the entire report upon pick up so you have a chance
            to ask any questions you may have and explain any jargon you may
            have come across.
          </TuneParagraph>
        </TuneContent>
      </TuneWrapper>
    </Layout>
  )
}

export default TheTune
