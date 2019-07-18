import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Source: Pattern Library" />
    <section>
      <h2>Pattern library</h2>
      <p>Values that are used within our patterns.</p>
      <h3>Tokens</h3>
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
      <h3>Utilities</h3>
      <p>
        Utility mixins and functions that perform some calculation for use with
        our styles
      </p>
    </section>
    <section>
      <h3>
        <a href="/patterns/dropdown">Patterns</a>
      </h3>
      <p>Visual units that represent behaviour or enable a user action</p>
    </section>
  </Layout>
)

export default IndexPage
