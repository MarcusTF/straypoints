import React, { useEffect, useState } from 'react'
import { API_URL } from '../utils/urls'

const About = ({ content }) => (
  <div>
    {content.map(data => (
      <div>{data.title}</div>
    ))}
  </div>
)

export async function getStaticProps() {
  const content_res = await fetch(`${API_URL}/posts/`)
  const content = await content_res.json()

  return {
    props: {
      content,
    },
  }
}
export default About
