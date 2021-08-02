import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
// margin-top: +50px;
width: ${({widthsize}) => (widthsize ? widthsize + "%" : "20%")};
border: none;
outline: none;
color: #fff;
padding: ${({paddingsize}) => (paddingsize ? paddingsize : "25px .3em")};
font-size: ${({size}) => (size ? size + "em" : "2em")};
font-weight: 250;
border-radius: ${({radius}) => (radius ? radius + "px" : "12.5px")};
background-color:#2a2d7f;
text-align:center;
background-size: relative;
cursor: pointer;
transition: all 200 ms ease-in-out;

&: hover {
    background-color:#2a3d8f;
}

&:focus {
    outline: none;

}
`;

export default function Button(props) {
    const {size, widthSize, Paddingsize, Radius} = props;
    return (
        <ButtonWrapper radius={Radius} size={size} widthsize={widthSize} paddingsize={Paddingsize}>{props.children}</ButtonWrapper>

    );
}