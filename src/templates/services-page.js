import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import map from 'lodash/map'
import Layout from '../components/layout'
import { Wrapper, Heading } from '../components/Page'

import { color } from '../utilities/styles'

const PageWrapper = styled(Wrapper)`
  max-width: 70rem;
  align-self: center;
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

const ServicesPageTemplate = ({ heading, mainPackage, serviceCategories }) => {
  const renderMainPackage = () => {
    const { title, price, description, pageUrl } = mainPackage
    return (
      <ServiceSection>
        <TheTuneHeading>
          {title}
          <TheTunePrice>{` - ${price}`}</TheTunePrice>
        </TheTuneHeading>
        <TheTuneDescription>{description}</TheTuneDescription>
        <TheTuneLink state={{ srcUrl: '/services' }} to={pageUrl}>
          details
        </TheTuneLink>
      </ServiceSection>
    )
  }

  const renderServiceCategories = () => {
    return serviceCategories.map(({ title, services }) => (
      <ServiceSection key={title}>
        <ServiceHeading>{title}</ServiceHeading>
        {map(services, ({ service, price }, index) => (
          <Service key={`${service}`}>
            <ServiceTitle>{service}</ServiceTitle>
            <ServicePriceWrapper isLast={index === services.length - 1}>
              <ServicePrice>{price}</ServicePrice>
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
    ))
  }

  return (
    <PageWrapper>
      <Heading>{heading}</Heading>
      {renderMainPackage()}
      {renderServiceCategories()}
    </PageWrapper>
  )
}

ServicesPageTemplate.propTypes = {
  heading: PropTypes.string,
  mainPackage: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.string,
    description: PropTypes.string,
    pageUrl: PropTypes.string,
  }),
  serviceCategories: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      services: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          price: PropTypes.string,
        })
      ),
    })
  ),
}

const ServicesPage = ({ data }) => {
  const {
    frontmatter: { heading, mainPackage, serviceCategories },
  } = data.markdownRemark

  return (
    <Layout>
      <ServicesPageTemplate
        heading={heading}
        mainPackage={mainPackage}
        serviceCategories={serviceCategories}
      />
    </Layout>
  )
}

ServicesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        templateKey
        path
        heading
        mainPackage {
          title
          price
          description
          pageUrl
        }
        serviceCategories {
          title
          services {
            service
            price
          }
        }
      }
    }
  }
`
