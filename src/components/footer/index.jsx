import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import BrandLogo from "../brandLogo";

import { deviceSize } from "../responsive";
import { useMediaQuery } from "react-responsive";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em;
  padding-bottom: 0;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 2em 12px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  &:not(:last-of-type) {
    margin-right: 3%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-top: 0.6px solid rgb(0, 0, 0, 0.3);
  padding: 0 10px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    padding: 0;
  }
`;
const LeftBottomContainer = styled.div`
  display: flex;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 13px;
  color: #000;
  font-weight: 600;
  font-size: 4em;
`;

const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 3em;
  cursor: pointer;
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const PrivacyText = styled.h6`
  color: #a3a3a3;
  font-size: 11px;
  margin: 0;
  margin-left: 10px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 8px;
  }
`;

export function Footer(props) {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Access</Title>
          <FLink>Login</FLink>
          <FLink>Join Us</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <BrandLogo hideLogo color="#8A8A8A" textSize={isMobile ? 1 : 3} />
          <PrivacyText> &#169; All Rights Reserved. 2021</PrivacyText>
        </LeftBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}