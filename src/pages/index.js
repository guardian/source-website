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
    <SEO title="The Guardian: Source" />
    <section>
      <h1 css={h1Style}>The Guardian: Source</h1>
    </section>
    <section>
      <h2 css={h2Style}>
        <a href="components/button">Components</a>
      </h2>
    </section>
  </Layout>
)

export default IndexPage
