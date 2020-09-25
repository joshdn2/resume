import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col} from 'react-bootstrap'
import myLogo from "./logopic.png"
import NotSidebar from "./NotSidebar/NotSidebar"

export default function App() {

  let arrLinks = [
    {name:'INTRODUCTION',link:'introduction'},
    {name:'ABOUT ME',link:'about-me'},
    {name:'EXPERIENCE',link:'experience'},
    {name:'CONTACT',link:'contact'}
  ]
let widthTest = false
  if(window.innerWidth < 800) widthTest = true

  return (
    <>
      <div className={widthTest? "sidebarSmall" : "sidebar"}>
        <img src={myLogo} className={widthTest? "logopicSmall" : "logopic"}/>
        {!widthTest && arrLinks.map((l) => {
          return (
            <div className="linkSection">
              <h5 className="linkText">{l.name}</h5>
            </div>
          )
        })}
      </div>
      <div className={widthTest? "notSidebarSmall" : "notSidebar"}>
        <NotSidebar/>
      </div>
    </>
  )
}
