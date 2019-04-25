import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'

import { color } from '../utilities/styles'

const PageWrapper = styled(Wrapper)`
  margin-top: 4rem;
  max-width: 70rem;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const BookLink = styled.a`
  font-size: 2.5rem;
  padding: 1rem;
  border-radius: 50%;
  margin: 2rem 0 4rem;
  width: 13rem;
  height: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: ${color.teal.main};
  transition: all 0.2s;

  &,
  &:link,
  &:visited,
  &:active {
    color: #000;
  }

  &:hover {
    transform: scale(1.05);
    background: ${color.teal.dark};
    color: #fff;
  }
`

const EmailLink = styled.a`
  margin-top: 1rem;

  &,
  &:link,
  &:visited,
  &:active {
    color: #000;
    text-decoration: underline;
  }
`

const BookNow = () => {
  return (
    <Layout>
      <PageWrapper>
        <Heading center>Book your appointment</Heading>
        <BookLink
          href="http://calendly.com/woodwardbco"
          target="_blank"
          rel="noopener noreferrer"
        >
          Push this button
        </BookLink>

        <div>Got a question before you book?</div>
        <EmailLink href="mailto:hey@woodwardbicycle.co">
          Email me at hey@woodwardbicycle.co
        </EmailLink>
      </PageWrapper>
    </Layout>
  )
}

export default BookNow
