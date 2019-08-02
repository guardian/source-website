import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
const Sidenav = () => {
  const data = useStaticQuery(graphql`
    query SidenavQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              name
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <nav>
      <h1>The Guardian: Source</h1>
      <h2>Components</h2>
      <ul>
        {data.allMdx.edges.map(({ node: component }) => (
          <li key={component.id}>
            <Link to={component.fields.slug}>
              <h2>{component.frontmatter.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Sidenav
