import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/layout'

const FixWrapper = styled.div`
  margin: 8rem 2rem;
  max-width: 70rem;
  align-self: center;

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    margin-bottom: 4rem;
  }

  h2 {
    font-size: 2rem;
  }

  div {
    margin: 2rem 2rem;
  }
`

const TuneLink = styled(Link)`
  text-decoration: underline;
`

const FixMyBike = () => {
  return (
    <Layout>
      <FixWrapper>
        <h1>FIX MY BIKE</h1>

        <h2>
          It all starts with{' '}
          <TuneLink to="/thetune" state={{ srcUrl: '/fix' }}>
            the tune
          </TuneLink>
          , starting at $149.
        </h2>

        <div>
          <h3>Step 1: Get in touch</h3>
          <div>
            {`Let's talk! We'll book a convenient time for you to drop off your bike
          so we can look it over together and I can get to know what kind of
          riding you do and what you expect out of your ride! We will come up
          with a service plan tailored to your bike and your budget and you will
          leave with an accurate estimate of the cost of your tune.`}
          </div>
        </div>

        <div>
          <h3>Step 2: I tune the hell out of your bike</h3>
          <div>
            I start by taking it all apart. Wheels come off, fork comes out,
            pedals, cranks, bottom bracket, cassette all removed. The frame is
            cleaned and inspected. The headset bearings are serviced. Your fork
            gets re-installed, and bearing preload is set. The wheels are
            cleaned, trued and hubs are adjusted. Tires are inspected and
            inflated. Your entire braking system from levers to pads is cleaned,
            inspected and adjusted. All drivetrain parts are serviced and
            re-installed and tuned for optimal performance. Then I test ride
            your bike to ensure it functions the way it was intended out on the
            mean streets. Finally, all fixing bolts are checked for proper
            torque as part of a detailed service report that gets emailed to
            you.
          </div>
        </div>

        <div>
          <h3>Step 3: You are re-united with your ride!</h3>
          <div>
            {`Come collect your bike at a time that works for you. Then we'll go
          over the bike together, review the service report so you can ask any
          questions you may have, and we'll talk about how awesome cycling is!
          Pick-up time is also when I like to show you a few things that every
          bike owner should know about their ride or teach you how to do
          something that you've wanted to learn.`}
          </div>
        </div>

        <div>
          <h3>Step 4: Happiness!</h3>
          <div>
            {`Go and enjoy bicycling and impress your friends with all your new knowledge!!`}
          </div>
        </div>
      </FixWrapper>
    </Layout>
  )
}

export default FixMyBike
