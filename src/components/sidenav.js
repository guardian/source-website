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
      <h1>
        <a href="/">The Guardian: Source</a>
      </h1>
      <ul>
        <li>
          <button type="button">Getting started</button>
        </li>
        <li>
          <button type="button">Principles</button>
        </li>
        <li>
          <button type="button">Foundations</button>
        </li>
        <li>
          <button type="button">Components</button>
          <ul>
            {data.allMdx.edges.map(({ node: component }) => (
              <li key={component.id}>
                <Link to={component.fields.slug}>
                  <h2>{component.frontmatter.name}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Sidenav
