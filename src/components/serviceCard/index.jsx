import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";

const CardContainer = styled.div`
display:flex;
  flex-direction: column; 
  overflow: hidden;
  width: 900px;
  min-height: 600px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  margin: 0.5em;
  margin-bottom: 1.3em;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

const TopContainer = styled.div`
align-items: center;
  width: 100%;
  height: 550px;
`;

const ServiceThumbnail = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const ContentContainer = styled.div`
text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  // padding: 15px 14px;
  height: 200px;
`;


const Title = styled.h2`
padding: 0.25em;
  font-size: 3.3em;
  margin: 0;
  font-weight: 500;
  color: #000;
  text-align: center;

`;

const SpecialistName = styled.h4`
  margin: 0;
  color: #000;
  font-size: 2em;
  font-weight: 400;
`;

export default function ServiceCard(props) {
  const { imgsrc, title, specialist} = props;

  return (
    <CardContainer>
      <TopContainer>
        <ServiceThumbnail>
          <img src={imgsrc} alt={title} />
        </ServiceThumbnail>
      </TopContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <Marginer direction="vertical" margin={10} />
        <SpecialistName>{specialist}</SpecialistName>
      </ContentContainer>
    </CardContainer>
  );
}