import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"

const navListStyle = css`
  display: flex;
  li {
    flex: 1 1 auto;
    list-style-type: none;
  }
`
const navLinkStyle = css`
  color: white;
  text-decoration: none;
`
const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <ul css={navListStyle}>
          <li>
            <Link to="/" css={navLinkStyle}>
              Pattern library
            </Link>
          </li>
          <li>
            <Link to="/principles/" css={navLinkStyle}>
              Principles
            </Link>
          </li>
          <li>
            <Link to="/contributing/" css={navLinkStyle}>
              Contributing
            </Link>
          </li>
          <li>
            <Link to="/glossary/" css={navLinkStyle}>
              Glossary
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
