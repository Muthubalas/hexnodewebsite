import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import "../assets/css/slider.css";
import { Navigation } from 'swiper/modules';
import {Row,Col} from 'react-bootstrap';
import justin from "../assets/images/justin-modrak.webp";
import dalibor from "../assets/images/dalibor-kruljac.webp";
import chris from "../assets/images/chris-robinson.webp";

function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <Row>
            <Col xs={10} md={4} id="padright">
            <img className="slidimg" src={justin} alt="justin" width="100%"/>
            </Col>
            <Col xs={12} md={8} id="colback">
            <div className="content">
            <div className="header">
                <h5>"Hexnode is of great value. Works great with Android and iOS!"</h5>
            </div>
            <div className="line">

            </div>
            <div className="header">
                <h6>Justin Modrak</h6>
                <span>Technology Coordinator<br></br>
                East Troy Community School District</span>
            </div>
            </div>
         
            </Col>
            </Row>
        </SwiperSlide>
        <SwiperSlide>
        <Row>
            <Col xs={10} md={4} id="padright">
            <img className="slidimg" src={dalibor} alt="dalibor" width="100%"/>
            </Col>
            <Col xs={12} md={8} id="colback">
            <div className="content">
            <div className="header">
                <h5>"Most complete MDM solution I found, and I tested many of them,including major names"</h5>
            </div>
            <div className="line">

            </div>
            <div className="header">
                <h6>Dalibor Krulijac</h6>
                <span>KAMELEYA LTD</span>
            </div>
            </div>
         
            </Col>
            </Row>
        </SwiperSlide>
        <SwiperSlide>
        <Row>
            <Col xs={10} md={4} id="padright">
            <img className="slidimg" src={chris} alt="chris" width="100%"/>
            </Col>
            <Col xs={12} md={8} id="colback">
            <div className="content">
            <div className="header">
                <h5>"It seemed to be in-line with everything we were looking at."
               </h5>
            </div>
            <div className="line">

            </div>
            <div className="header">
                <h6>Chris Robinson</h6>
                <span>Executive Account Manager,NCS</span>
            </div>
            </div>
         
            </Col>
            </Row>
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider