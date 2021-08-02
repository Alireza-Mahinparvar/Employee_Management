import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../components/button";
import  ServiceCard from "../../components/serviceCard";
import confidentiality from "../../images/thumbnails/Confidentiality.jpg"
import PAPERLESS from "../../images/thumbnails/paperless.jpg"
import PIP from "../../images/thumbnails/pip.jpeg"
import Ticketing from "../../images/thumbnails/ticketing.png"


const ServicesContainer = styled.div`
margin-top: 10em;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5em;
`;

const Title = styled.h1`
margin-bottom: 2.5em;
  font-weight: 900;
  text-align: center;
  color: #000;
    font-size: 5em;
  }
`;

const ServicesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const BottomContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;

const ViewMoreButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  font-size: 14px;
  &:hover {
    background-color: #f2f2f2;
    filter: contrast(0.8);
  }
`;

const wait = (num) => new Promise((rs) => setTimeout(rs, num));


const service1 = {"title": "CONFIDENTIALITY", 
"imgsrc": (confidentiality),specialist: "Ensure all data is secured and only approved management is able to view!"};

const service2 = {"id": 2, "title": "EARTH FRIENDLY :)", 
"imgsrc": (PAPERLESS), specialist: "Able to store documents in database to save space and PAPER!"};

const service3 = { "id": 3, "title": "Personal Improvement Plan", 
"imgsrc": (PIP), "specialist": "Help employees move up or be able to increase work ethic with Personal Improvement Plans!"}

const service4 = {"id": 4, "title": "Ticketing System", 
"imgsrc": (Ticketing), "specialist": "Assign assignments to employees and get a notification when its completed."}


export default function Services(props) {

  return (
    <ServicesContainer>
      <Title>WAIT, WHY US?</Title>
      <Title>Because....</Title>
      <ServicesWrapper>
            <ServiceCard {...service1} />
            <ServiceCard {...service2} />
      </ServicesWrapper>
      <ServicesWrapper>
            <ServiceCard {...service3} />
            <ServiceCard {...service4} />
      </ServicesWrapper>
      <Title>What else could an HR Website want? All the NECESSITIES at your fintertips!</Title>
    </ServicesContainer>
  );
}