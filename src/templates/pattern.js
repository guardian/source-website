import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { headline } from "@guardian/pasteup/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const h1Styles = css`
  ${headline(5)};
  margin-top: 8px;
  margin-bottom: 16px;
`
const h2Styles = css`
  ${headline(3)};
  margin-top: 8px;
  margin-bottom: 16px;
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds our post data
  const { frontmatter, body } = mdx
  const { name, purpose } = frontmatter // finally, the data from the markdown file
  return (
    <Layout>
      <SEO title="Source: Pattern Library" />
      <article>
        <h1 css={h1Styles}>{name}</h1>
        <p>{purpose}</p>
        <h2 css={h2Styles}>Example</h2>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        name
        purpose
        path
      }
      body
    }
  }
`
