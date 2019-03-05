import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'

const AboutPagePreview = ({ entry, getAsset }) => {
  // const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  // const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  // const entryTestimonials = entry.getIn(['data', 'testimonials'])
  // const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  // const entryPricingPlans = entry.getIn(['data', 'pricing', 'plans'])
  // const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <AboutPageTemplate
      heading={entry.getIn(['data', 'heading'])}
      paragraph1={entry.getIn(['data', 'paragraph1'])}
      paragraph2={entry.getIn(['data', 'paragraph2'])}
      paragraph3={entry.getIn(['data', 'paragraph3'])}
      paragraph4={entry.getIn(['data', 'paragraph4'])}
      roundImage={getAsset(entry.getIn(['data', 'roundImage']))}
      bannerImage={getAsset(entry.getIn(['data', 'bannerImage']))}
      fullImage={getAsset(entry.getIn(['data', 'fullImage']))}
    />
  )
}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AboutPagePreview
