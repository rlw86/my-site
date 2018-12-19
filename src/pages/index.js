import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Russell Wyatt</h1>
    <p>Hello, I'm a designer who focuses on combining human-centered design, creative direction and storytelling to create engaging brands, products, and digital experiences.</p>
    <p>Let's build something together!</p>
    <p>I just want to use git with my project seamlessly</p>
    <blockquote>I am looking forward to experimenting with these new technologies!</blockquote>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
