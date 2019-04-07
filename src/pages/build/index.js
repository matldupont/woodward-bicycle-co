import React from 'react'
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

const BuildMyBike = () => {
  return (
    <Layout>
      <FixWrapper>
        <h1>BUILD MY BIKE:</h1>

        <h2>Got an idea for a bike? I can help.</h2>

        <div>
          <h3>Step 1: Book a free consultation </h3>
          <div>
            {`From hubs, spokes and rims, to the colour of your saddle, I'll help
            you choose and source the right parts for your custom ride.`}
          </div>
        </div>

        <div>
          <h3>Step 2: Pick it up (or watch it come together) </h3>
          <div>
            {`Once your parts are in hand I'll build your custom bike. If you want
            to be part of the build, join me in the shop and enjoy a beer as it
            all comes together.`}
          </div>
        </div>

        <div>
          <h3>Step 3: Custom fits for your custom ride</h3>
          <div>
            {`Before you ride away to show it off to your friends,  I’ll help you customize the fit. Saddle height, position, stem length, handle bar width, and any other little tweaks will be tailored to you.`}
          </div>
        </div>
      </FixWrapper>
    </Layout>
  )
}

export default BuildMyBike
