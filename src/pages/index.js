import React from "react"
import { css } from "@emotion/core"
import { headline } from "@guardian/pasteup/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const h1Style = css`
  ${headline(5)};
  margin-top: 8px;
  margin-bottom: 16px;
`
const h2Style = css`
  ${headline(3)};
  margin-top: 8px;
  margin-bottom: 16px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Source: Pattern Library" />
    <section>
      <h1 css={h1Style}>Pattern library</h1>
      <p>Values that are used within our patterns.</p>
      <h2 css={h2Style}>Tokens</h2>
      <p>
        <a href="https://github.com/guardian/dotcom-rendering/tree/master/packages/pasteup">
          Pasteup
        </a>
      </p>
      <ul>
        <li>Colour</li>
        <li>Spacing</li>
        <li>Typography</li>
        <li>Z-index</li>
        <li>Tabindex</li>
        <li>Icons</li>
        <li>Animation</li>
      </ul>
    </section>
    <section>
      <h2 css={h2Style}>Utilities</h2>
      <p>
        Utility mixins and functions that perform some calculation for use with
        our styles
      </p>
    </section>
    <section>
      <h2 css={h2Style}>
        <a href="patterns/dropdown">Patterns</a>
      </h2>
      <p>Visual units that represent behaviour or enable a user action</p>
    </section>
  </Layout>
)

export default IndexPage
