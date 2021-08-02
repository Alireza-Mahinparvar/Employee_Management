import React from 'react';
import styled from "styled-components";
import LogoImg from "../../EM.jpg";

const brandLogoContainer = styled.div `
display: flex;
align-items: center;
`;

const LogoImage =  styled.div `
display: inline-block;
width: ${({size}) => (size ? size + "em" : "5em")};
height: ${({size}) => (size ? size + "em" : "5em")};
img {
    border-radius: 100px;
    width: 100%;
    height: 100%;
}
`;

const LogoTitle = styled.h2 `
display: inline-block;
white-space: nowrap;
margin: 0;
font-size: ${({size}) => (size ? size + "em" : "8em")};
color: #fff;
font-weight: 500;
margin-left: 10px;
`;

export default function brandLogo(props) {
    const {logoSize, textsize} = props;
return (
    <brandLogoContainer>
        <LogoImage size={logoSize} className="bordered">
            <img src={LogoImg} alt="Human Resources Logo" />
        </LogoImage>
        <LogoTitle size={textsize}> Employee Management</LogoTitle>
    </brandLogoContainer>
);
}