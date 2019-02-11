import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import keys from 'lodash/keys'
import map from 'lodash/map'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'

import { color } from '../utilities/styles'

const PageWrapper = styled(Wrapper)`
  max-width: 70rem;
`

const ServiceSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2.5rem;
`

const TheTuneHeading = styled.h2`
  text-transform: uppercase;
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: 2px;
  margin: 1.6rem 0;
`

const TheTunePrice = styled.span`
  font-style: italic;
  font-weight: 300;
  font-size: 1.8rem;
  letter-spacing: 3px;
`

const TheTuneDescription = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
`

const TheTuneLink = styled(Link)`
  align-self: flex-end;
  color: ${color.black.main};
  font-size: 1.8rem;
  font-style: italic;
`

const ServiceHeading = styled.h2`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-left: 1px solid #454545;
  border-right: 1px solid #454545;
  padding: 0.6rem;
  margin: 2rem 0px;
`

const Service = styled.div`
  align-self: stretch;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
`

const ServiceTitle = styled.div`
  display: flex;
  align-items: center;
`

const ServicePriceWrapper = styled.div`
  flex: 0 0 12rem;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${color.grey.extraLight};
  border-right: 1px solid ${color.grey.extraLight};

  ${({ isLast }) => {
    return (
      isLast &&
      `
    border-bottom: 1px solid ${color.grey.extraLight};
    `
    )
  }}
`

const ServicePrice = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  text-align: center;
`

const RulerContainer = styled.div`
  flex: 0 0 2.5rem;
  display: flex;
  flex-direction: column;
`

const RulerMeasure = styled.div`
  flex: 0 0 1.5rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${color.grey.extraLight};
  }
`
const serviceList = {
  'the top-ups': [
    {
      title: 'Brake cables and housing',
      price: '$25',
    },
    {
      title: 'Gear cables and housing',
      price: '$25',
    },
    {
      title: 'Drivetrain cleaning',
      price: '$50',
    },
    {
      title: 'Brake service',
      price: '$25 per',
    },
  ],
  refills: [
    {
      title: 'Wheel build',
      price: '$25 per',
    },
    {
      title: 'Brake cables and housing',
      price: '$35 per',
    },
    {
      title: 'Brake cables and housing',
      price: '$35-$45 per',
    },
  ],
}

const ServicesPage = () => {
  return (
    <Layout>
      <PageWrapper>
        <Heading>services</Heading>
        <ServiceSection>
          <TheTuneHeading>
            the tune<TheTunePrice> - $145</TheTunePrice>
          </TheTuneHeading>
          <TheTuneDescription>
            Start here. Your bike is cleaned, inspected, and I tune the hell out
            of it.
          </TheTuneDescription>
          <TheTuneLink to="/thetune">details</TheTuneLink>
        </ServiceSection>
        {keys(serviceList).map(serviceType => {
          return (
            <ServiceSection key={serviceType}>
              <ServiceHeading>{serviceType}</ServiceHeading>
              {map(serviceList[serviceType], (service, index) => (
                <Service key={`${serviceType}-${index}`}>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServicePriceWrapper
                    isLast={index === serviceList[serviceType].length - 1}
                  >
                    <ServicePrice>{service.price}</ServicePrice>
                    <RulerContainer>
                      <RulerMeasure />
                      <RulerMeasure />
                      <RulerMeasure />
                      <RulerMeasure />
                    </RulerContainer>
                  </ServicePriceWrapper>
                </Service>
              ))}
            </ServiceSection>
          )
        })}
      </PageWrapper>
    </Layout>
  )
}

export default ServicesPage
