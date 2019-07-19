import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import { palette } from "@guardian/pasteup/palette"
import { headline } from "@guardian/pasteup/typography"
import { Container } from "./container"

const headerStyle = css`
  background: ${palette.brand.main};
  margin-bottom: 1.45rem;
`
const navListStyle = css`
  display: flex;
  li {
    flex: 1 1 auto;
    list-style-type: none;
  }
`
const navLinkStyle = css`
  ${headline(3)};
  color: white;
  text-decoration: none;
`
const h1Style = css`
  ${headline(9)};
  margin: 0;
`
const Header = ({ siteTitle }) => (
  <header css={headerStyle}>
    <Container>
      <h1 css={h1Style}>
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
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
