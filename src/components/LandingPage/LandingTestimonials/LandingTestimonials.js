/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

import React from 'react'
import './LandingTestimonials.scss'
import { Card, Avatar } from 'antd'


/** <LandingTestimonials>
 *
 *
**/
export default ({ testimonials }) => {
  return (
    <div id="LandingTestimonials">
      <div id="LandingTestimonials-title">⭐ &nbsp; Testimonials &nbsp; ⭐</div>
      <TestimonialRow testimonials={testimonials.slice(0,3)} />
      <TestimonialRow testimonials={testimonials.slice(3,6)} />
    </div>
  )
}


/** <TestimonialRow>
 *
 *
**/
const TestimonialRow = ({ testimonials }) => {
  return (
    <div id="TestimonialRow">
      <div id="TestimonialRow-carosel">
        {
          testimonials.map(profile => (
            <TestimonialCard profile={profile} />
          ))
        }
      </div>
      <div id="TestimonialRow-carosel-icon"></div>
    </div>
  )
}

/** <TestimonialCard>
 *
 *
**/
const TestimonialCard = ({ profile }) => {
  return (
    <Card key={profile.id} className="TestimonialCard" bordered>
      <Card.Meta className="TestimonialCard-quote" description={profile.quote} />
      <Card.Meta
        title={profile.author}
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        description={profile.company}
      />
    </Card>
  )
}
