import React from 'react';
import styled from 'styled-components';
import BrandLogo from '../brandLogo';


const SpecialistContainer = styled.div`
width: 100%;
height: 500px;
display: flex;
background-color: #264653;
align-items:center;
justify-items: center;
`;

const ContentContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;

const SloganContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Slogan = styled.div`
    margin: 0;
    font-size: 2em;
    color: #fff;
    font-weight: 500;
`;

const StandoutImage = styled.div`
width: 35em;
height: 35em;
img {
    width: 100%;
    height: 100%;
}
`;

export default function SpecialistAdd(props) {
    return (
        <SpecialistContainer>
            <ContentContainer>
                <SloganContainer>
                    <BrandLogo />
                    <Marginer direction="vertical" margin="1em"/>
                    <SloganContainer>
                        <Slogan></Slogan>
                        <Slogan></Slogan>
                        <Slogan></Slogan>
                    </SloganContainer>
                </SloganContainer>
            </ContentContainer>

        </SpecialistContainer>

    );
};