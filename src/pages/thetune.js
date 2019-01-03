import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'

import { color } from '../utilities/styles'

const TuneHeading = styled(Heading)`
  color: ${color.white};
`

const TuneWrapper = styled(Wrapper)`
  background: ${color.black.alt};
`

const TheTune = () => {
  return (
    <Layout dark>
      <TuneWrapper>
        <TuneHeading>The Tune</TuneHeading>
      </TuneWrapper>
    </Layout>
  )
}

export default TheTune
