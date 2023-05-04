import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404: Página no encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  </Layout>
)

export default NotFoundPage
