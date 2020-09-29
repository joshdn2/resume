import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import myLogo from "./media/logopic.png"
import NotSidebar from "./NotSidebar/NotSidebar"

export default function App() {

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
        <img alt='logo' src={myLogo} className={widthTest? "logopicSmall" : "logopic"} onClick={() => scrollPoint('introduction')}/>
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
