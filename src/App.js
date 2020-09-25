import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

export default function App() {

  return (
    <Container fluid noGutters style={{paddingLeft:"0px", paddingRight:"0px"}}>
      <Row noGutters >
        <Col noGutters md="3">
          <div className="sidebar">
            <h2>
            Josh Danneman
            </h2>
          </div>
        </Col>
        <Col md="9" noGutters className="middleBody">
          <div>

          </div>
        </Col>
      </Row>
    </Container>
  )
}
