import React from 'react'
import styled from 'styled-components';
import Layout from '../components/Layout'

import { Link } from 'gatsby';

const NotFoundContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const NotFoundHeading = styled.h1`
  font-size: 2rem;
`;

const NotFoundText = styled.p`
  font-size: 1.4rem;
`;

const NotFoundPage = () => (
  <Layout>
    <NotFoundContainer>
      <NotFoundHeading>NOT FOUND</NotFoundHeading>
      <NotFoundText>You just hit a route that doesn&#39;t exist... <Link to="/">Go back</Link></NotFoundText>
    </NotFoundContainer>
    
  </Layout>
)

export default NotFoundPage
