/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import './LandingFooter.scss'

export default ({}) => {
  return (
    <div id="LandingFooter">
      <div id="LandingFooter-left">
        <div id="LandingFooter-logo">Messy Room</div>
        <div id="LandingFooter-copyright">© 2019 Messier Inc</div>
      </div>
      <div id="LandingFooter-center">
        <div id="LandingFooter-details-item">Terms of Use</div>
        <div id="LandingFooter-details-item">Privacy Policy</div>
        <div id="LandingFooter-details-item">Honest Advertising</div>
      </div>
      <div id="LandingFooter-right">
        <div id="LandingFooter-details-item">About</div>
        <div id="LandingFooter-details-item">Careers</div>
        <div id="LandingFooter-details-item">Contact Us</div>
      </div>
    </div>
  )
}
