/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./LandingPage.scss"
import LandingHeader from './LandingHeader/LandingHeader'
import LandingDemo from './LandingDemo/LandingDemo'
import LandingCaseStudies from './LandingCaseStudies/LandingCaseStudies'
import LandingGallery from './LandingGallery/LandingGallery'
import LandingTestimonials from './LandingTestimonials/LandingTestimonials'
import LandingFooter from './LandingFooter/LandingFooter'
import LandingSideMenu from './LandingSideMenu/LandingSideMenu'
import brands from '../../assets/brands.json'
import gallery from '../../assets/gallery.json'
import testimonials from '../../assets/testimonials.json'
import { toggleSideMenu } from '../../actions/system/system_actions'

/** <LandingPage>
 *
 *
**/
class LandingPage extends Component {

  componentDidMount() {
    const self = this
    document.addEventListener("scroll", function() {
      if (self.props.sideMenuToggle) {
        self.props.toggleSideMenu()
      }
    });
  }

  render() {
    return (
      <div id="LandingPage">
        {
          this.props.sideMenuToggle
          ?
          <LandingSideMenu />
          :
          null
        }
        <div id="LandingPageGradient">
          <LandingHeader />
          <LandingDemo />
        </div>
        <LandingGallery gallery={gallery} />
        <div style={{ height: "50px", width: "100%" }}></div>
        <LandingCaseStudies brands={brands} />
        <LandingTestimonials testimonials={testimonials} />
        <LandingFooter />
      </div>
    )
  }
}

const mapStateToProps = (redux) => {
  return {
    sideMenuToggle: redux.system.sideMenuToggle,
  }
}
const mapActionsToComponent = {
  toggleSideMenu,
}

export default connect(mapStateToProps, mapActionsToComponent)(LandingPage)
