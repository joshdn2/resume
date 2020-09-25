import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

function App() {

  return (
    <Container fluid noGutters className="high">
      <Row style={{height:"100%"}}>
        <Col md="3">
          <div className="sidebar">
            <h2>
            Josh Danneman
            </h2>
          </div>
        </Col>
        <Col md="9"></Col>
      </Row>
    </Container>
    
  )
}

export default App
