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
      <h3>Patterns</h3>
      <p>Visual units that represent behaviour or enable a user action</p>
      <ul>
        <li>
          <h3>Dropdown</h3>
          <h4>Purpose</h4>
          <p>
            Dropdowns expand to reveal a menu of options. They close themselves
            when the user clicks out of them.
          </p>
          <h4>Example</h4>
          <h4>Variants</h4>
        </li>
      </ul>
    </section>
  </Layout>
)

export default IndexPage
