import React from 'react'

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'

var customstyles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '36px',
    height: '36px',
    right: '24px',
    top: '42px',
  },
  bmBurgerBars: {
    background: '#373a47',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'block',
    padding: '0.5rem 0',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        <Menu
          customBurgerIcon={<img src="/images/hamburger.svg" />}
          className="mobile-menu"
          styles={customstyles}
        >
          <Link to="/servicios-personalizados/" activeClassName="active">
            Servicios
          </Link>

          <Link to="/bolsa-de-trabajo/" activeClassName="active">
            Bolsa de Trabajo
          </Link>

          <Link to="/consultoria/" activeClassName="active">
            Consultoría
          </Link>

          <Link to="/acerca/" activeClassName="active">
            Acerca
          </Link>

          <Link to="/contacto/" activeClassName="active">
            Contacto
          </Link>
        </Menu>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
