import React from 'react';
import styled from 'styled-components';
import { Footer } from '../../components/footer';
import { Marginer } from '../../components/marginer';
import NavBar from '../../components/navBar';
import { InnerPageContainer, PageContainer } from '../../components/pageContainer';
import SpecialistAdd from '../../components/specialistAdd';
import "./index.css";
import Services from './services';
import TopSection from "./topSection";



const Title = styled.h1`
font-weight: 900;
color: #000;
font-size: 5em;
`;

const Contentcontainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;


export default function homepage(props) {
    return (
        <PageContainer>
        <TopSection>
            <NavBar />
        </TopSection>
        <InnerPageContainer>
            <Contentcontainer>
                <Services />
            </Contentcontainer>
            <Marginer direction="vertical" margin="4em" />
            <SpecialistAdd />
        </InnerPageContainer>
        <Footer />
        </PageContainer>
    );
}
