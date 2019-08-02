import React from "react"
import { css } from "@emotion/core"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { headline } from "@guardian/pasteup/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const styles = css`
  h1,
  h2,
  h3 {
    margin: 16px 0;
  }
  h1 {
    ${headline(7)};
  }
  h2 {
    ${headline(5)};
  }
  h3 {
    ${headline(3)};
  }
`

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds our post data
  const { frontmatter, body } = mdx
  const { name } = frontmatter // finally, the data from the markdown file
  return (
    <Layout>
      <SEO title="The Guardian: Source" />
      <article css={styles}>
        <h1>{name}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ComponentQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        name
      }
    }
  }
`
