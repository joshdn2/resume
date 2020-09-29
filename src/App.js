import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import myLogo from "./media/logopic.png"
import NotSidebar from "./NotSidebar/NotSidebar"
import { HelpBlock } from 'react-bootstrap'
import { directive } from '@babel/types'
import { HashLink as Link } from 'react-router-hash-link'

export default function App() {
  const [anchorTarget, setAnchorTarget] = useState(null)

  let arrLinks = [
    {name:'INTRODUCTION', link:'introduction'},
    {name:'ABOUT ME', link:'about'},
    {name:'EXPERIENCE', link:'experience'},
    {name:'CONTACT', link:'contact'}
  ]
let widthTest = false
  if(window.innerWidth < 800) widthTest = true

  const scrollPoint = (link) => {
    console.log(link)
    let el = document.getElementById(link)
    console.log(el)
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className='backgroundColor'>
      <div className={widthTest? "sidebarSmall" : "sidebar"}>
        <img src={myLogo} className={widthTest? "logopicSmall" : "logopic"} onClick={() => scrollPoint('introduction')}/>
        {!widthTest && arrLinks.map((l) => {
          return (
            <div className="linkSection" onClick={() => scrollPoint(l.link)}>
              <h5 className="linkText">{l.name}</h5>
            </div>
          )
        })}
      </div>
      <div className={widthTest? "notSidebarSmall" : "notSidebar"}>
        <NotSidebar scrollPoint={scrollPoint}/>
      </div>
    </div>
  )
}
