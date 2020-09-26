import React from 'react'
import './NotSidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import profPic from "../media/DannemanJoshua_Online.jpg"
import namePic from "../media/picresume.png"
import resume from "../media/Josh_Danneman_Resume.pdf"
import blackWhite from '../media/suitNoBackground.png'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { NavHashLink as NavLink } from 'react-router-hash-link'

export default function NotSidebar({scrollPoint}) {

    let arrSkills = [
        'ReactJS','UX Research','Database Design','Node.js','Systems Analysis','SQL'
    ]


    let widthTest = false
    if(window.innerWidth < 1048) widthTest = true

    return(
        <Container className='fullContainer'>
            <Row className="headerSpace" id='introduction'></Row>
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
                    <Button className="resumeReadButton" onClick={() => scrollPoint('about')}>Read More</Button>
                </Col>
                <Col md={2}></Col>
            </Row>
            <br/><br/><br/><br/><br/>
            <Row><hr className="lineBreak"/>
                {/* set anchor here for about me section */}
            </Row>
            <br/><br/><br/>
            <Row id="about">
                {/* this one has another picture and the about me section */}
                <Col md={1}></Col>
                <Col md={4} className='suitPicWrapper'>
                    <img src={blackWhite} className='suitPic'/>
                </Col>
                {/* <Col md={1}></Col> */}
                <Col md={6}>
                    <h1 className="nameTitle"><strong>About Me</strong></h1>
                    <br/>
                    <p className='aboutMeStyle'>
                        I'm a full-stack developer and UX designer and researcher in the making. 
                        <br/><br/>
                        I am currently studying information systems at the Brigham Young University Marriott School of Management. 
                        <br/><br/>
                        I'll graduate in December 2021 with a Master's degree in Information Systems Management, 
                        with an emphasis in Software Development. 
                        <br/><br/>
                        I am currently working as a full-stack software developer and UX researcher in the BYU Physics and Astronomy department. 
                        <br/><br/>

                    </p>
                </Col>
                <Col md={1}></Col>
            </Row>
            
            <Row className='colorRow'>
                {/* This is the section with a few highlighted skills */}
                <Col><br/>
                    <Row className="justify-content-md-center">
                        <Col md={3} className='centerTitle'><h2 className="nameSubTitle"><strong>Top Skills</strong></h2></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={2} className='centerTitle'><div className='skillBox'>ReactJS</div></Col>
                        <Col md={1}></Col>
                        <Col md={2} className='centerTitle'><div className='skillBox'>Database Design</div></Col>
                        <Col md={1}></Col>
                        <Col md={2} className='centerTitle'><div className='skillBox'>UX Research</div></Col>
                        <Col md={2}></Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={2} className='centerTitle'><div className='skillBox'>SQL</div></Col>
                        <Col md={1}></Col>
                        <Col md={2} className='centerTitle'><div className='skillBox'>Agile</div></Col>
                        <Col md={1}></Col>
                        <Col md={2} className='centerTitle'><div className='skillBox'>Node.js</div></Col>
                        <Col md={2}></Col>
                    </Row>
                    <br/>
                    <br/>
                </Col>
            </Row>
            <Row>
                {/* this section is for the Experience timeline */}
            </Row>
        </Container>
    )
}