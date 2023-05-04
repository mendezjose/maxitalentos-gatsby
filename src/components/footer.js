import React from 'react'
import { Link } from 'gatsby'
import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      <Link to="/politica-de-privacidad">Política de Privacidad</Link> &middot;{' '}
      <Link to="/politica-de-cookies">Política de Cookies</Link> &middot;{' '}
      <Link to="/aviso-legal">Aviso Legal</Link>
    </div>
  </Container>
)

export default Footer
