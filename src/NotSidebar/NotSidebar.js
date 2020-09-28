import React from 'react'
import './NotSidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import profPic from "../media/DannemanJoshua_Online.jpg"
import namePic from "../media/picresume.png"
import timelinePoint from "../media/timelinePoint.png"
import resume from "../media/Josh_Danneman_Resume.pdf"
import blackWhite from '../media/suitNoBackground.png'
import email from '../media/email.png'
import mozenda from '../media/mozenda.png'
import experienceText from '../media/experienceText.png'
import experienceTextLeft from '../media/experienceTextleft.png'
import phone from '../media/phone.png'
import linkedin from '../media/linkedin.png'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

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
                    <Button className="resumeReadButton" onClick={() => scrollPoint('about')}>Read More (mobile version coming soon)</Button>
                </Col>
                <Col md={2}></Col>
            </Row>
            <br/><br/><br/><br/><br/>
            <Row><hr className="lineBreak"/></Row>
            <br id="about"/><br/><br/>
            <Row>
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
                        My motto: Do good recklessly.
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
            <br/>
            <Row>
                <Col>
                    {/* this section is for the Experience timeline */}
                    <h1 id='experience' className="nameTitle" style={{textAlign:'center', marginBottom:'30px'}}>
                        <br/>
                        <strong>Experience</strong>
                    </h1>
                </Col>
            </Row>
            <Row>
            {/* https://www.npmjs.com/package/react-vertical-timeline-component */}
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#10449E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #10449E' }}
                        date="April 2018 - August 2020"
                        dateClassName="timelineDate"
                        iconStyle={{ background: '#10449E', color: '#fff' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title bubbleTitle">Mozenda</h3>
                        <h5 className="vertical-timeline-element-subtitle bubbleTitle">Pleasant Grove, UT</h5>
                        <p className="bubbleTitle">
                            Special Projects Manager (Jan-Aug 2020)
                            <br/>
                            - Designed and built new projects including web crawlers, dashboard automations, and script-heavy scraping agents
                            <br/>
                            <br/>
                            Services Project Lead (Mar-Dec 2019)
                            <br/>
                            - Scraped, wrangled, and delivered data, servicing contracts worth over $200k in total
                            <br/>
                            <br/>
                            Customer Service Team (Apr 2018-Feb 2019)
                            <br/>
                            - Led the team in average cases solved per week
                            <br/>
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#10449E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #10449E' }}
                        date="August 2019 - April 2020"
                        dateClassName="timelineDate"
                        iconStyle={{ background: '#10449E', color: '#fff' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title bubbleTitle">Information Systems Core</h3>
                        <h5 className="vertical-timeline-element-subtitle bubbleTitle">Brigham Young University</h5>
                        <p className="bubbleTitle">
                            Material included:
                            <br/>
                            - Programming (React, Node, C# MVC, Python DRF) 
                            <br/>
                            - Databases (design, normalization, SQL)
                            <br/>
                            - Management (project, product)
                            <br/>
                            - Systems (analysis and design, security, networks, AWS)
                            <br/>
                            - Analytics (Python, Azure MLS)
                            <br/>
                            <br/>
                            Integrative final projects consisted of:
                            <br/>
                            - Business systems redesign, MSSQL database normalization, and C# MVC website prototype
                            <br/>
                            - Predictive data pipeline creation, website with React frontend, Python DRF backend, PostgreSQL db, hosted on AWS
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#10449E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #10449E' }}
                        date="April 2020 - Present"
                        dateClassName="timelineDate"
                        iconStyle={{ background: '#10449E', color: '#fff' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title bubbleTitle">Physics and Astronomy Department</h3>
                        <h5 className="vertical-timeline-element-subtitle bubbleTitle">Brigham Young University</h5>
                        <p className="bubbleTitle">
                        Full-Stack Developer & UX Designer
                        <br/>
                        <br/>
                        Technology used:
                        <br/>
                        - React, Node, PostgreSQL, Docker, Python Microservices
                        <br/>
                        <br/>
                        Leadership on the Dev Team:
                        <br/>
                        - Driving Agile sprints
                        <br/>
                        - Managing task management processes
                        <br/>
                        - Leading UX design process
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#10449E', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #10449E' }}
                        date="August 2020 - Present"
                        dateClassName="timelineDate"
                        iconStyle={{ background: '#10449E', color: '#fff' }}
                        icon=""
                    >
                        <h3 className="vertical-timeline-element-title bubbleTitle">Master's of Information Systems Management</h3>
                        <h5 className="vertical-timeline-element-subtitle bubbleTitle">Brigham Young University</h5>
                        <p className="bubbleTitle">
                            Current Material Includes:
                            <br/>
                            - UX Design (user-centered design, leadership principles)
                            <br/>
                            - Cybersecurity (penetration testing, data protection, attack prevention, threat modeling)
                            <br/>
                            - Advanced Predictive Analytics (machine learning algorithms, clustering)
                            <br/>
                            - Enterprise Infrastructure (virtualization, containerization, devOps, storage)
                            <br/>
                            <br/>
                            Capstone Project: 
                            <br/>
                            - Productivity Management for software developers
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </Row>
            <br/><br/><br/><br/>
            <Row><hr className="lineBreak"/></Row>
            <br/><br/>
            <Row>
                <Col>
                    {/* this section is for the Contact Me section */}
                    <h1 id='contact' className="nameTitle" style={{textAlign:'center', marginBottom:'30px'}}>
                        <strong>Contact Me</strong>
                    </h1>
                </Col>
            </Row>
            <br/><br/>
            <Row className='colorRow'>
                {/* This is the section with a few highlighted skills */}
                <Col>
                    <br/><br/><br/>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={2} className='centerTitle'>
                            <img src={email} className='contactIcon'/>
                            <div className='contactText'><strong>joshdn2@gmail.com</strong></div>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={2} className='centerTitle'>
                            <img src={phone} className='contactIcon'/>
                            <div className='contactText'><strong>770-943-8344</strong></div>
                        </Col>
                        <Col md={1}></Col>
                        <Col md={2} className='centerTitle'><a href='https://www.linkedin.com/in/josh-danneman/' target="_blank"><img src={linkedin} className='contactIcon'/></a></Col>
                        <Col md={2}></Col>
                    </Row>
                    <br/><br/><br/>
                </Col>
            </Row>
            <br/>
            <Row>
                <Col>
                    <h3 className="nameTitleMotto" style={{textAlign:'center', marginBottom:'30px'}}>
                        <strong>Do Good Recklessly!</strong>
                    </h3>
                </Col>
            </Row>
        </Container>
    )
}