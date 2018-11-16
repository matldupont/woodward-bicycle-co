import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

import Layout from '../components/layout'
import MainImage from '../components/image'

import { color } from '../utilities/styles'

const Banner = styled.main`
  padding-top: 1rem;
  height: 40rem;
  position: relative;
`;

const ImageContainer = styled.div`
  height: 100%;
  overflow: hidden;

  div {
    height: 145%;
    margin-top: -25%;
  }
`;

const TextContainer = styled.h1`
  position: absolute;
  top: 4rem;
  width: calc(100vw - 4rem);
  background: ${color.greyTransparent};
  color: ${color.white};
  padding: 2rem;
  font-size: 2.6rem;
  font-weight: 300;
`;

const Quote = styled.span`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Author = styled.div`
  font-size: 1.6rem;
  text-align: right;
  font-weight: 600;
  letter-spacing: 1px;
`;

const IndexPage = () => (
  <Layout>

    <Banner>
      <ImageContainer>
        <MainImage />
      </ImageContainer>
      <TextContainer>
        <Quote>
          <div>You love your bike.</div>
          <div>So do I.</div>
        </Quote>
        <Author>~ Lukasz Dybinski</Author>  
      </TextContainer>
    </Banner>
    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
