import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="The Guardian: Source" />
      <section>
        <h2>Source: the Design System for the Guardian</h2>
      </section>
    </Layout>
  )
}

export default IndexPage
