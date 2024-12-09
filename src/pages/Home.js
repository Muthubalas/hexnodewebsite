import React,{ useState, useEffect, useRef } from 'react'
import AppNavbar from '../components/AppNavbar'
import Container from 'react-bootstrap/Container';
import {Row,Col,Tab,Tabs,Nav,Accordion   } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/home.css";
import bannerimg from "../assets/images/hexnode-kiosk.webp"; 
import idc from "../assets/images/idc.webp"; 
import forester from "../assets/images/forrester.webp"; 
import gartner from "../assets/images/gartner.webp"; 
import tab1img from "../assets/images/single-app-kios-image.webp"; 
import tab2img from "../assets/images/multi-app-kiosk-image.webp"; 
import tab3img from "../assets/images/web-based-kiosk-image.webp"; 
import tab4img from "../assets/images/digital-signage-kiosk-image.webp"; 
import tab5img from "../assets/images/asam-kiosk-image.webp"; 
import wolt from "../assets/images/wolt.svg"; 
import hilton from "../assets/images/hilton.svg"; 
import lowes from "../assets/images/lowes.svg"; 
import polaris from "../assets/images/polaris.svg"; 
import gorillas from "../assets/images/gorillas.svg"; 
import android from "../assets/images/android.svg"; 
import windows from "../assets/images/windows.svg"; 
import ios from "../assets/images/ios.svg"; 
import androidtv from "../assets/images/android-tv.svg"; 
import apple from "../assets/images/apple-tv.svg"; 
import amazon from "../assets/images/amazon-fire.webp"; 

import marriott from "../assets/images/marriott-intl (1).svg"; 
import effortless from "../assets/images/effortless-kiosk-deployement-image.webp"; 
import customized from "../assets/images/customized-interface-image.webp"; 
import power from "../assets/images/power-up-protection-image.webp"; 
import secure from "../assets/images/secure-app-ecosystem.webp"; 
import easy from "../assets/images/easy-to-use-interface-image.webp"; 
import Slider from '../components/Slider';
import Banner from '../components/Banner';

function Home() {
  const images = [
    wolt,lowes,hilton,polaris,gorillas,marriott
   
  ].map((image) => ({
    id: crypto.randomUUID(),
    image
  }));
  
  const [activeTab, setActiveTab] = useState("first");
  const handleAccordionClick = (eventKey) => {
    if (eventKey === "0") {
      setActiveTab("first");
    } else if (eventKey === "1") {
      setActiveTab("second");
    } else if (eventKey === "2") {
      setActiveTab("third");
    }
    else if (eventKey === "3") {
      setActiveTab("four");
    }
    else {
      setActiveTab("five");
    }
  
  };

  return (
    
    
    <div>
         
        <AppNavbar/>
        <div className="bannerframe">

        
        <Container>
    
     <Row id="bannercontent">
       <Col xs={12} md={5} className="d-flex align-items-center fullwidth aligncenter">
       <div className="bannercontent">
       <h1 className='heading'>Turn your devices into kiosks in a few minutes with Hexnode UEM</h1>
        <Row className='emailrow'>
        <Col xs={6} md={6}>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control className="inputbox" type="email" placeholder="Your Work Email" />
      </Form.Group>
     
    </Form>
       </Col>
       <Col xs={6} md={6}>
       <Button variant="danger" className='danger'>GET STARTED NOW!</Button>
       </Col> 
        </Row>
       </div>
       
       </Col>
       <Col xs={6} md={1}></Col>
       <Col xs={12} md={6} className="fullwidth">
         <img src={bannerimg} alt="bannerimg" width="100%"/>
       </Col>
     </Row>
     </Container>
     </div>
     {/* ----------IDC-------- */}
     <div className="bgcolr">
     <Container>
     <Row className='heading '>
      <Col xs={12} md={3}>
     <a href="">
     <div className="content">
      <img src={idc} alt="bannerimg" id="img1"/>
      <p>Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.</p>
      </div>
      </a> 
     
      </Col>
      <Col xs={0} md={1} className="d-flex justify-content-center">
  <div className="line"></div>
</Col>
      <Col xs={12} md={3} id='bordercol'>
      <a href="">
      <div className="content">
      <img src={gartner} alt="bannerimg" id="img2"/>
      <p>Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.</p>
      </div>
      </a> 
      </Col>
      <Col xs={0} md={1} className="d-flex justify-content-center">
  <div className="line"></div>
</Col>
      <Col xs={12} md={3} >
      <a href="">
      <div className="content" >
      <img src={forester} alt="bannerimg" id="img3"/>
      <p>Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.</p>
      </div>
      </a> 
      </Col>
     </Row>
     </Container>
     </div>
      {/* ----------tab-------- */}
    <div className="tabframe">
      <div className="header">
        <h1>Specific kiosk modes for unique use cases</h1>
      </div>
      <Container >
       <div className="tabcontainer">

    

      <Tabs
      id="controlled-tab-example"
      defaultActiveKey="singleapp"
      className="mb-3 navtabs"
    >
      
      <Tab eventKey="singleapp" title="Single App Kiosk">
   <Row className='tabrow'>
   <Col xs={12} md={7} className='fullwidth'>
   <h3>Powerful Single-App Kiosk solutions for enhanced control</h3>
   <p className='tabpara'>
      <span style={{ color: "green" }}>&#10004;</span> Provision the devices to run one specialized application, with limited functionalities.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Customize the device settings to cater to a specific use-case each time.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Use Hexnode’s Advanced Kiosk settings for additional restrictions or expanded device functionalities while in kiosk mode.
      </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Empower your administrators with full control over the kiosk devices.
    </p>
   </Col>
   <Col xs={12} md={5} className='fullwidth'>
   <img src={tab1img} className="tabimage" alt="single-app-kios-image" width="90%"/>
   </Col>
   </Row>
      </Tab>
      <Tab eventKey="multiapp" title="Multi-App Kiosk">
      <Row className='tabrow'>
   <Col xs={12} md={7}>
   <h3>Elevate efficiency with Multi-App Kiosk</h3>
   <p className='tabpara'>
      <span style={{ color: "green" }}>&#10004;</span> Limit device access to approved apps, ensuring focus and productivity.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> With default phone and settings app inclusion, reduce distractions by providing users access to essential functions only.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span>With Hexnode's peripheral settings admins can allow necessary device settings while retaining control.
      </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span>Simplify device management while empowering user productivity by deploying Multi-App Kiosk Mode.
      </p>
   </Col>
   <Col xs={12} md={5}>
   <img src={tab2img} className="tabimage" alt="multi-app-kiosk-image" width="90%"/>
   </Col>
   </Row>
      </Tab>
      <Tab eventKey="webkiosk" title="Web-based Kiosk" >
      <Row className='tabrow'>
   <Col xs={12} md={7}>
   <h3>Explore the new way to manage web apps and websites</h3>
   <p className='tabpara'>
      <span style={{ color: "green" }}>&#10004;</span> Let users access essential and approved web apps, website and files only.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Make the best use of website kiosk with Hexnode's advanced settings.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Tailor your experience to match your unique use case.
      </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span>From configuring toolbar options to scheduling page refresh, remote debugging, and limiting incognito tabs, take full control of your website kiosk experience.
    </p>
   </Col>
   <Col xs={12} md={5}>
   <img src={tab3img} className="tabimage" alt="web-based-kiosk-image" width="90%"/>
   </Col>
   </Row>
      </Tab>
      <Tab eventKey="digital" title="Digital Signages" >
      <Row className='tabrow'>
   <Col xs={12} md={7}>
   <h3>Capture attention with Digital Signage Kiosks</h3>
   <p className='tabpara'>
      <span style={{ color: "green" }}>&#10004;</span> Transform your devices into captivating digital signage kiosks that grab attention.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Engage your audience with vibrant images and seamless video streaming.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Customize media files with trimming, muting, and background music.
      </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Advertise and show off your brand aesthetics to attract customers in different ways.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span>Take control with Hexnode to reestablish your brand's presence.
    </p>
   </Col>
   <Col xs={12} md={5}>
   <img src={tab4img} className="tabimage" alt="digital-signage-kiosk-image" width="90%"/>
   </Col>
   </Row>
      </Tab>
      <Tab eventKey="asam" title="ASAM Kiosk" >
      <Row className='tabrow'>
   <Col xs={12} md={7}>
   <h3>Unlock the power of Autonomous Single App Mode (ASAM)</h3>
   <p className='tabpara'>
      <span style={{ color: "green" }}>&#10004;</span> A feature that empowers your iOS app to seamlessly secure itself in the foreground.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Transform tablets or devices into dedicated point-of-sale (POS) systems by preventing interruptions from other applications or notifications.
    </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span>Create focused, efficient and secure digital environments to match your requirements.
      </p>
    <p >
      <span style={{ color: "green" }}>&#10004;</span> Configure ASAM effortlessly and elevate your user experience like never before.
    </p>
   </Col>
   <Col xs={12} md={5}>
   <img src={tab5img} className="tabimage" alt="asam-kiosk-image" width="90%"/>
   </Col>
   </Row>
      </Tab>
    </Tabs>
    </div>
      </Container>
    </div>
       {/* ----------tab-------- */}
       <div className="tabframe" id="tabframe">
       <div className="header1">
        <h1>What additional possibilities does the Kiosk mode offer?</h1>
      </div>
      <Container>
      <div id="tabvertical">
      <Tab.Container id="left-tabs-example" activeKey={activeTab}>
        <Row className='disblock'>
          <Col sm={5} className='fullwidth'>
            <Tab.Content>
              <Tab.Pane eventKey="first">
              <div className="image-container">
    <img
      src={effortless}
      alt="effortless-kiosk-deployment-image"
      className="vertimg"
    />
    <div className="overlay-content" id="overlay-content1">
    <p className='tabpara'>
      <span className='tabspan' style={{ color: "green" }}>&#10004;</span> Zero touch kiosk
    </p>
    </div>
  </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second"> 
              <div className="image-container">
              <img src={customized} alt="customized-interface-image "className='vertimg'/>
    <div className="overlay-content" id="overlay-content2">
    <p className='tabpara'>
      <span className='tabspan' style={{ color: "green" }}>&#10004;</span> Brand visibility
    </p>
    </div>
  </div>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
               
                <div className="image-container">
                <img src={power} alt="power-up-protection-image"className='vertimg'/>
    <div className="overlay-content" id="overlay-content3">
    <p className='tabpara'>
      <span className='tabspan' style={{ color: "green" }}>&#10004;</span> Data security
    </p>
    </div>
  </div>
              </Tab.Pane>
              <Tab.Pane eventKey="four">
               
                <div className="image-container">
                <img src={secure} alt="secure-app-ecosystem"className='vertimg'/>
    <div className="overlay-content" id="overlay-content4">
    <p className='tabpara'>
      <span className='tabspan' style={{ color: "green" }}>&#10004;</span>App management
    </p>
    </div>
  </div>
              </Tab.Pane>
              <Tab.Pane eventKey="five">
               
                <div className="image-container">
                <img src={easy} alt="easy-to-use-interface-image"className='vertimg'/>
    <div className="overlay-content" id="overlay-content5">
    <p className='tabpara'>
      <span className='tabspan' style={{ color: "green" }}>&#10004;</span> Easy to use interface
    </p>
    </div>
  </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col sm={7} className='fullwidth'>
            <Nav variant="pills" className="flex-column custom-nav">
              <Nav.Item>
            
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header
                      onClick={() => handleAccordionClick("0")}
                    >
                     <h4> Effortless kiosk deployment & management</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                   <p> Deploy kiosk-enabled devices straight out of the box. Flash a custom Android Enterprise, Samsung Knox or ROM with Hexnode App on the devices by collaborating with OEM vendors who provide specially configured ROMs.</p>
                  
                   <a href="#" className='tryarrow'>Try for free <span class="arrow">&#8594;</span></a>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header
                      onClick={() => handleAccordionClick("1")}
                    >
                    <h4> Customized interface for brand visibility</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                    <p> Create a locked-down environment with customized interface. Maximize brand visibility and leave a lasting impression by showcasing products, services and key messages directly to users through the customized interface.</p>
                  
                  <a href="#" className='tryarrow'>Try for free <span class="arrow">&#8594;</span></a>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header
                      onClick={() => handleAccordionClick("2")}
                    >
                    <h4> What more can you do with Hexnode kiosk?</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                    <p> Ensure compliance of your devices by remotely deploying the latest OS version while the device is still in kiosk mode. Prevent your data from falling into the wrong hands even in case of device loss/theft with the various remote management features.</p>
                  
                  <a href="#" className='tryarrow'>Try for free <span class="arrow">&#8594;</span></a>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header
                      onClick={() => handleAccordionClick("3")}
                    >
                    <h4> Secure and update your app ecosystem</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                    <p> Streamline the deployment and management on apps on your kiosk devices. Save your time and effort, ensure security and improve your efficiency using Hexnode’s silent app installation and update features.</p>
                  
                  <a href="#" className='tryarrow'>Try for free <span class="arrow">&#8594;</span></a>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header
                      onClick={() => handleAccordionClick("4")}
                    >
                    <h4> Provide an easy-to-use interface for end-users</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                    <p> Give your end-users the power to control their devices without overwhelming them with options. An intuitive interface to let them access only the essential settings they need. Make it easy for them to unlock the full potential of your devices hassle-free.</p>
                  
                  <a href="#" className='tryarrow'>Try for free <span class="arrow">&#8594;</span></a>
                     </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Nav.Item>
            
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
    </div>

    </Container>
       </div>
          {/* ----------tab-------- */}
          <div className="slidersection">
          <div className="header1">
        <h1>Why should you choose Hexnode?</h1>
      </div> 
          <Container>
            <div className="imagesec">
            <Slider/>
            </div>
            <Banner images={images} speed={10000} />
          </Container>
          </div>
       
          {/* ----------Banner-------- */}
          <div className="platform">
          <div className="header1">
          <h1>Platforms supported</h1>
      </div> 
          
          </div>
          <Container>
        <Row id="colcenter" className='disblock'>
        <Col xs={12} md={2} className='fullwidth aligncenter margintopcol'>
        <img src={android} alt="android"/>
        </Col>
        <Col xs={12} md={2} className='fullwidth aligncenter margintopcol'>
        <img src={windows} alt="windows"/>
        </Col>
        <Col xs={12} md={2} className='fullwidth aligncenter margintopcol'>
        <img src={ios} alt="ios"/>
        </Col>
        <Col xs={12} md={2} className='fullwidth aligncenter margintopcol'>
        <img src={androidtv} alt="androidtv"/>
        </Col>
        <Col xs={12} md={2} className='fullwidth aligncenter margintopcol'>
        <img src={apple} alt="apple"/>
        </Col>
        <Col xs={12} md={2} className='fullwidth aligncenter margintopcol'>
        <img src={windows} alt="windows"/>
        </Col>
        </Row>
       
          </Container>
            {/* ----------footer-------- */}
            <div className="footerframe">
            <Container>
 
    <h1 className='heading'>Sign up and try Hexnode free for 14 days!</h1>
    <Row className='footrow' >
    <Col xs={6} md={3}></Col>
       <Col xs={6} md={4}>
       <Form>
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
       <Form.Control className="inputbox" type="email" placeholder="Your Work Email" />
     </Form.Group>
    
   </Form>
      </Col>
    
      <Col xs={6} md={4} id="buttoncol">
      <Button variant="danger" className='danger'>GET STARTED NOW!</Button>
      </Col> 
      <Col xs={6} md={1}></Col>
       </Row>
   
   <p className='footpar '>No credit cards required.
    <a href="" > <span className='red'> Request a demo<span class="arrow1"> &#8594;</span></span></a>
   
    </p>
    </Container>
    </div>
               {/* ----------Copyright-------- */}
<div className="copyright">
<Container>
<Row  >
<Col xs={6} md={6}>
<span>Terms of Use-Privacy-Cookies</span>
</Col>
<Col xs={6} md={6} id="textright">
<span>Copyright © 2024 Mitsogo Inc. All Rights Reserved.</span>
</Col>
</Row>
</Container>
</div>
                {/* ----------tab-------- */}
     </div>
  )
}

export default Home