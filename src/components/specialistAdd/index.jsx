import React from "react";
import styled from "styled-components";
import BrandLogo from "../brandLogo";
import { Marginer } from "../marginer";

import sjsu from "../../images/thumbnails/SJSU.jpg";
import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 1300px;
  display: flex;
  background-color: #264653;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    flex-direction: column-reverse;
  }
`;

const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 5em;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
    margin: 0;
  }
`;

const Slogan = styled.h2`
  margin: 0;
  font-size: 3em;
  color: #fff;
  font-weight: 400;
  line-height: 1.3;
  text-align: start;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 20px;
  }
`;

const StandoutImage = styled.div`
  width: 65em;
  height: 55em;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 18em;
    height: 14em;
  }
`;

export default function SpecialistAd(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <BrandLogo
            logoSize={isMobile ? 3 : 5}
            textSize={isMobile ? 18 : 28}
          /> 
          <Marginer direction="vertical" margin="2em" />
          <SloganContainer>
            <Slogan>An EMPLOYEE MANAGEMENT WEBSITE developed </Slogan>
            <Slogan>by four passionate students pursuing a Bachelor's of</Slogan>
            <Slogan>Science in Computer Engineering from San Jose State</Slogan>
            <Slogan>University.</Slogan>
            <Slogan>The four students include:</Slogan>
            <Slogan>Aman Kaur</Slogan>
            <Slogan>Alireza Mahin Parvar</Slogan>
            <Slogan>Elizabeth Na</Slogan>
            <Slogan>Prince Jassal</Slogan>
          </SloganContainer>
        </SloganContainer>
        <StandoutImage>
          <img src={sjsu} alt="university" />
        </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}