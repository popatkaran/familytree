import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../assets/css/greenbird-digital.css'

import Header from './header/header'

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <StaticQuery
        query={graphql`
          {
            site {
              siteMetadata {
                title
                description
                keywords
                author
                url
              }
            }
          }
        `}
        render={(data) => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: `${data.site.siteMetadata.description}`,
                },
                {
                  name: 'keywords',
                  content: `${data.site.siteMetadata.keywords}`,
                },
              ]}
            >
              <html />
            </Helmet>
            <div className="page-wrapper d-flex flex-column min-vh-100">
              <Header siteInfo={data.site.siteMetadata} />
              {children}
            </div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
