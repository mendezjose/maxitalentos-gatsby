import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Navigation = () => (
  <nav role="navigation" className={styles.container} aria-label="Main">
    <Link to="/" className={styles.logoLink}>
      <div style={{ maxWidth: '220px' }}>
        <StaticImage src="../assets/images/max-1.png" />
      </div>
    </Link>
    <ul className={styles.navigation}>
      <li className={styles.navigationItem}>
        <Link to="/servicios-personalizados/" activeClassName="active">
          Servicios
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/bolsa-de-trabajo/" activeClassName="active">
          Bolsa de Trabajo
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/consultoria/" activeClassName="active">
          Consultoría
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/acerca/" activeClassName="active">
          Acerca
        </Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contacto/" activeClassName="active">
          Contacto
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
