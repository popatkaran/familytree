import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <Row>
      <Col>
        <form action="/" method="get" autoComplete="off">
          <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search by the name of the person you know in family!"
            name="s"
            className="search-input"
          />
        </form>
      </Col>
    </Row>
  )
}
