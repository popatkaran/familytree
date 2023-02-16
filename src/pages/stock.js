import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Table } from 'react-bootstrap'

const StockDashboard = () => {
  const [stockData, setStockData] = useState([])

  useEffect(() => {
    async function fetchStockData() {
      const res = await axios.get(`https://finance.yahoo.com/quote/AAPL?p=AAPL`)
      setStockData(res.data)
    }
    fetchStockData()
  }, [])

  return (
    <Container>
      <Row>
        <Col>
          <h1>Stock Prices</h1>
          <Table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Change</th>
                <th>% Change</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((stock) => (
                <tr key={stock.symbol}>
                  <td>{stock.symbol}</td>
                  <td>{stock.price}</td>
                  <td>{stock.change}</td>
                  <td>{stock.percentChange}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}

export default StockDashboard
