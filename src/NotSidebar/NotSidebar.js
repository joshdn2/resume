import React from 'react'
import './NotSidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import profPic from "../DannemanJoshua_Online.jpg"
import namePic from "../picresume.png"
import resume from "../Josh_Danneman_Resume.pdf"
import {Container, Row, Col, Button} from 'react-bootstrap'

export default function App() {

    let arrSkills = [
        'ReactJS','UX Research','Database Design','Node.js','Systems Analysis','SQL'
    ]


    let widthTest = false
    if(window.innerWidth < 1048) widthTest = true

    return(
        <Container>
            <Row className="headerSpace"></Row>
            <Row>
                <Col md={1}></Col>
                <Col md={6}className="headers">
                    <h3 style={{marginTop:"20px"}}>Hello, I'm </h3>
                    <Row>
                        <img src={namePic} className="namePic"></img>
                        {/* <Col>{ !widthTest && <div className="bracket">[</div>}</Col>
                        <h1 className="nameTitle"><strong>Josh<br/> Danneman</strong></h1>
                        <Col>{ !widthTest && <div className="bracket">]</div>}</Col> */}
                    </Row>
                    <br/>
                    <hr className='lineBreakTop'/>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <h3 style={{textAlign:"center"}}>Full-stack Developer <br/>+<br/>UX Researcher </h3>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                    <hr className='lineBreakBottom'/>
                    {/* <h5>I'm a full-stack developer and UX designer and researcher in the making. </h5>
                    <h5>
                        I will graduate from the Brigham Young University Marriott School of Management in December 2021 with 
                        a Master's degree in Information Systems Management, with an emphasis in Software Development. 
                    </h5> */}
                </Col>
                <Col md={4}>
                    <img className="profilepic" src={profPic}/>
                </Col>
                <Col md={1}></Col>
            </Row>
            <br/>
            <Row>
                <Col md={1}></Col>
                <Col md={3}>
                    <a href={resume} download>
                        <Button className="resumeReadButton">
                            <div style={{verticalAlign:"middle"}}>Download My Resume</div>
                        </Button>
                    </a>
                </Col>
                <Col md={2}></Col>
                <Col md={3}>
                    <Button className="resumeReadButton">Read More</Button>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    )
}