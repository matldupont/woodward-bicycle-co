import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Crown from '../images/WBco.logo.crown.svg';
import Hamburger from '../images/Hamburger.svg';
import { border } from '../utilities/styles';

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${border.color};
  margin: 0 .4rem;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: #000000;
    }

  }
`;

const TitleContainer = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    font-size: 1.5rem;
  }
`;



const Header = () => (
  <HeaderContainer>
    <Crown style={{ height: '4.5rem' }}/>
    <Link
      to="/"
    >
      <TitleContainer>
        <span>
          woodward
        </span>
        <span>
          bicycle co.
        </span>
      </TitleContainer>
      
    </Link>
    <Hamburger />

  </HeaderContainer>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
