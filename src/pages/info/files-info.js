import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

export default ({data}) => (
    <Layout>
        <div>
            <h1>My Images</h1>
            <table>
                <thead>
                    <tr>
                        <th>relativePath</th>
                        <th>prettySize</th>
                        <th>birthtime</th>
                        <th>extension</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allFile.edges.map(({node}, index) => (
                        <tr key={index}>
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.birthtime}</td>
                            <td>{node.extension}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Layout>
)

export const query = graphql`
    query {
        allFile {
          edges {
            node {
              relativePath
              prettySize
              birthtime(fromNow: true)
              extension
            }
          }
        }
      }
`
