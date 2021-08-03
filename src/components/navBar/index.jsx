import React from 'react';
import styled from 'styled-components';
// import LogoImg from "../../EM.jpg";
import BrandLogo from '../brandLogo';
import Button from "../button"
import { Marginer } from '../marginer';

const NavbarContainer = styled.div`
margin: 5px;
width: 100%;
height: 65px;
display: flex;
align-items center;
padding: 0 20px;
justify-content: space-between; 
`;

// const brandLogoContainer = styled.div `
// display: flex;
// align-items: center;
// `;

// const LogoImage =  styled.div `
// float: left;
// width: 0.06em;
// height: 0.06em;
// img {
//     border-radius: 50px;
//     width: 100%;
//     height: 100%;
// }
// `;

// const LogoTitle = styled.h2 `
// margin-top: -1.25em;
// display: inline;
// white-space: nowrap;
// font-size: ${({size}) => (size ? size + "px" : ".08em")};
// color: #fff;
// font-weight: 500;
// margin-left: 10px;
// `;

const AccessibilityContainer = styled.div `
display: flex;
align-items:center;
justify-content: space-between;
`;

const AnchorLink = styled.a `
font-size: 2em;
color: #fff;
cursor: pointer;
text-decoration: none;
outline: none;
transition: all 200 ms ease-in-out;

&:hover {
    filter:contrast(0.6);
}
`;

// const ButtonWrapper = styled.button`
// width: 80%;
// border: none;
// outline: none;
// color: #fff;
// padding: 35px .3em;
// font-size: .08em;
// font-weight: 250;
// border-radius: 12.5px;
// background-color:#2a2d7f;
// text-align:center;
// cursor: pointer;
// transition: all 200 ms ease-in-out;

// &: hover {
//     background-color:#2a3d8f;
// }

// &:focus {
//     outline: none;

// }
// `;


export default function navbar(props) {

    const {logoSize, textsize} = props;


    return (
        <NavbarContainer>
            <BrandLogo logoSize={1.5} textsize={2.5} />
            <AccessibilityContainer>
                <Button Radius ={1} size={2} widthSize={60} Paddingsize={".2em .3em"}>Register</Button>
                <Marginer direction="horizontal" margin={10} />
                <AnchorLink>Login</AnchorLink>
            </AccessibilityContainer>
        </NavbarContainer>
    );
}