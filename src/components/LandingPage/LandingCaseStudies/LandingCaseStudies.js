/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import './LandingCaseStudies.scss'
import StackGrid from "react-stack-grid";

/** <LandingCaseStudies>
 *
 *
**/
export default ({ brands }) => {
  const colWidth = 200
  return (
    <div id="LandingCaseStudies">
      <div id="LandingCaseStudies-title">CASE STUDIES</div>
      <StackGrid
        className="LandingCaseStudies-body"
        columnWidth={colWidth}
        gutterWidth={15}
        gutterHeight={15}
        monitorImagesLoaded
      >
        {
          brands.map(brand => (
            <div key={brand.company} className="LandingCaseStudies-card-brand">
              <img className="LandingCaseStudies-brand" src={brand.logo} alt={brand.company} />
            </div>
          ))
        }
      </StackGrid>
    </div>
  )
}
