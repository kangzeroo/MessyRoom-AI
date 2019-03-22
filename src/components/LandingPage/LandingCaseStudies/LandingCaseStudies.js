/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
import './LandingCaseStudies.scss'
import StackGrid from "react-stack-grid";
import { withSize } from 'react-sizeme'

/** <LandingCaseStudies>
 *
 *
**/
class LandingCaseStudies extends Component {
  render() {
    const colWidth = 200
    const { brands } = this.props
    return (
      <div id="LandingCaseStudies">
        <div id="LandingCaseStudies-title">50+ Companies use Messy Room AI</div>
        <StackGrid
          className="LandingCaseStudies-StackGrid"
          columnWidth={colWidth}
          gutterWidth={50}
          gutterHeight={25}
          monitorImagesLoaded
        >
          {
            brands.filter((brand, index) => {
              if (this.props.size.width > 700) {
                return true
              } else {
                return index < 3
              }
            }).map(brand => (
              <img className="LandingCaseStudies-brand" src={brand.logo} alt={brand.company} />
            ))
          }
        </StackGrid>
        <div style={{ width: '100vw', height: '50px' }}></div>
      </div>
    )
  }
}

export default withSize()(LandingCaseStudies)
