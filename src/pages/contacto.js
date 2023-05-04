import React from 'react'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Contact from '../components/contact'

class Contacto extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Seo title="Contacto" />

        <Contact />
      </Layout>
    )
  }
}

export default Contacto
