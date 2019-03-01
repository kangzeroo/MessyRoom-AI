/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import { Link } from 'react-router-dom'
import './LandingHeader.scss'


/** <LandingHeader>
 *
 *
**/
export default ({}) => {
  return (
    <div id="LandingHeader">
      <div id="LandingHeader-logo">MESSY ROOM</div>
      <div id="LandingHeader-nav">
        <div className="clickable-hoverable"><Link to="/pricing">Pricing</Link></div>
        <div className="clickable-hoverable">FAQ</div>
        <div className="clickable-hoverable">API</div>
        <div className="clickable-hoverable">Login</div>
      </div>
    </div>
  )
}
