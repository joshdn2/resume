import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import myLogo from "./logopic.png"
export default function App() {

  let arrLinks = [
    {name:'INTRODUCTION',link:'introduction'},
    {name:'ABOUT ME',link:'about-me'},
    {name:'EXPERIENCE',link:'experience'},
    {name:'CONTACT',link:'contact'}
  ]
  return (
    <>
      <div className="sidebar">
        <img src={myLogo} className="logopic"/>
        {arrLinks.map((l) => {
          return (
            <div className="linkSection">
              <h5 className="linkText">{l.name}</h5>
            </div>
          )
        })}
      </div>
      <div className="notSidebar">
        <Container>
          Content goes here
        </Container>
      </div>
    </>
  )
}
