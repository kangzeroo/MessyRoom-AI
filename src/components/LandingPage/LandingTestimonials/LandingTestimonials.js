/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React, { Component } from 'react'
import './LandingTestimonials.scss'
import { Card, Avatar } from 'antd'
import { withSize } from 'react-sizeme'
import StackGrid from "react-stack-grid";


/** <LandingTestimonials>
 *
 *
**/
class LandingTestimonials extends Component {
  render() {
    const { testimonials } = this.props
    const colWidth = 300
    return (
      <div id="LandingTestimonials">
        <div id="LandingTestimonials-title">⭐ &nbsp; Testimonials &nbsp; ⭐</div>
        <StackGrid
          className="LandingCaseStudies-StackGrid"
          columnWidth={colWidth}
          gutterWidth={50}
          gutterHeight={25}
          monitorImagesLoaded
        >
          {
            testimonials.filter((advocate, index) => {
              if (this.props.size.width > 700) {
                return true
              } else {
                return index < 3
              }
            }).map(advocate => (
              <TestimonialCard advocate={advocate} />
            ))
          }
        </StackGrid>
        <div style={{ width: '100vw', height: '50px' }}></div>
      </div>
    )
  }
}

export default withSize()(LandingTestimonials)

/** <TestimonialCard>
 *
 *
**/
const TestimonialCard = ({ advocate }) => {
  return (
    <Card className="TestimonialCard" bordered>
      <Card.Meta className="TestimonialCard-quote" description={advocate.quote} />
      <Card.Meta
        title={advocate.author}
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        description={advocate.company}
      />
    </Card>
  )
}
