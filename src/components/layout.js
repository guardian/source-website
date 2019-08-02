/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Sidenav from "./sidenav"
import { Container } from "./container"
import "./reset.css"

const Layout = ({ children }) => {
  return (
    <>
      <Sidenav />
      <main>
        <Container>{children}</Container>
      </main>
      <footer>
        <Container>© {new Date().getFullYear()} The Guardian</Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
