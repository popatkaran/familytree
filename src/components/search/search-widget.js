import React from 'react'
import { Container } from 'react-bootstrap'

import SearchBar from './searchbar'
import SearchResults from './search-results'

export const unflattenResults = (results) =>
  results.map((member) => {
    const { name, identifier } = member
    return { name, identifier }
  })

export default ({ searchQuery, setSearchQuery, members }) => {
  return (
    <Container className="search-widget">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SearchResults members={members} />
    </Container>
  )
}
