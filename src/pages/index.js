import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
  <div className="hero">
    <div className="HeroGroup">
      <h1> Russell Wyatt </h1>
        <p> Hello, I 'm a designer who focuses on combining human-centered design, creative direction and storytelling to create engaging brands, products, and digital experiences.</p>
        <Link to="/page-2/"> Go to page 2 </Link>
    </div>
  </div>
  </Layout>
)

export default IndexPage
