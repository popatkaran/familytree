import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'

import Layout from '../components/layout'
import SearchWidget from './../components/search/search-widget'
import { Helmet } from 'react-helmet'

export const unflattenResults = (results) =>
  results.map((member) => {
    const { name, identifier } = member
    return { name, identifier }
  })

export default ({
  data: {
    localSearchMembers: { index, store },
    allMembersYaml: { nodes },
  },
}) => {
  const { search } =
    typeof window !== `undefined` ? window.location : `undefined`
  const query = new URLSearchParams(search).get('s')
  const [searchQuery, setSearchQuery] = useState(query || '')
  const results = useFlexSearch(searchQuery, index, store)
  const members = searchQuery ? unflattenResults(results) : nodes
  return (
    <Layout>
      <Helmet>
        <title>MyFamily</title>
        <meta name="title" value="My Family" />
        <meta name="MyFamily" />
        <script
          src="https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/dist/masonry.pkgd.min.js"
          integrity="sha384-GNFwBvfVxBkLMJpYMOABq3c+d3KnQxudP/mGPkzpZSTYykLBNsZEnG2D9G/X/+7D"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
      <SearchWidget
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        members={members}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    localSearchMembers {
      index
      store
    }
    allMembersYaml {
      nodes {
        id
        name
        identifier
        profilePicture {
          publicURL
        }
      }
    }
  }
`
