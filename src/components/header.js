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
const headerTextStyle = css`
  ${headline(9)};
  margin: 0;
`
const Header = ({ siteTitle }) => (
  <header css={headerStyle}>
    <Container>
      <span css={headerTextStyle}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </span>
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
