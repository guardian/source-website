import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import { headline } from "@guardian/pasteup/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const h1Styles = css`
  ${headline(5)};
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  const { name, purpose } = frontmatter // finally, the data from the markdown file
  return (
    <Layout>
      <SEO title="Source: Pattern Library" />
      <article>
        <h1 css={h1Styles}>{name}</h1>
        <p>{purpose}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        purpose
        path
      }
    }
  }
`
