/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import './LandingCaseStudies.scss'

/** <LandingCaseStudies>
 *
 *
**/
export default ({ brands }) => {
  return (
    <div id="LandingCaseStudies">
      <div id="LandingCaseStudies-title">CASE STUDIES</div>
      <div id="LandingCaseStudies-body">
        {
          brands.map(brand => (
            <div className="LandingCaseStudies-card-brand">
              <img className="LandingCaseStudies-brand" src={brand.logo} alt={brand.company} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
