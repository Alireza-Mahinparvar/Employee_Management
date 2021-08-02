import React from 'react';
import styled from "styled-components";
import BrandLogo from '../../components/brandLogo';
import Button from '../../components/button';
import Navbar from '../../components/navBar';
import hrimage from "../../homepage.jpeg";
import bestHR from "../../human_resources_inner.jpg";

const TopSectionContainer = styled.div`
width: 100%;
height: 1750px;
background: url(${hrimage});
background-size: cover;
`;

const BackgroundFilter = styled.div`
width: 100%;
height: 100%;
background-color: rgba(35, 70, 83, 0.6);
display: flex;
flex-direction: column;
`;

const TopSectionInnerContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
`;

const StandoutImage = styled.div`
 width: 65em;
 height: 70em;
img{
    width: 100%;
    height: 100%;
    border-radius: 100px;
    margin-top: -12em;
}
`;

const LogoContainer = styled.div `
margin-top: -15em;
display: flex;
flex-direction: column;
align-items: flex start;
`;

const Slogan = styled.h3`
margin: 0;
color:#fff;
font-weight: 250;
font-size: 3em;
text-align: left;
`;


export default function topSection(props) {
const {children} = props;

    return (
    <TopSectionContainer>
        <BackgroundFilter>
            {children}
            <TopSectionInnerContainer>
            </TopSectionInnerContainer>
            <TopSectionInnerContainer>
            <LogoContainer>
                <BrandLogo />
                <Slogan>The best application to help with your HR needs!
                </Slogan>
                <Button>Join Now</Button>
            </LogoContainer>
            <StandoutImage>
               <img src={bestHR} alt="Best in the field" />
            </StandoutImage>
            </TopSectionInnerContainer>
        </BackgroundFilter>
    </TopSectionContainer>
);
}