import React from 'react'
import logo from './logo.svg'
import styles from './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'

function App() {

  return (
    <Container>
      <Row>
        <Col md='2'>
          <div className={styles.sidebar}>
            <h2>
            Josh Danneman
            </h2>
          </div>
        </Col>
        <Col md='10'>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
