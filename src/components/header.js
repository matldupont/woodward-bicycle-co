import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components';
import Crown from '../images/WBco.logo.crown.svg';
import Hamburger from '../images/Hamburger.svg';
import { border, color } from '../utilities/styles';

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${border.color};
  margin: 0 .4rem;
  padding: 1.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  a {
    text-decoration: none;
    
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: ${color.black};
    }
    transition: all .2s;

    ${({ navIsOpen }) => {
      return navIsOpen && `
        color: #fff;

        &:link,
        &:visited,
        &:hover,
        &:active {
          color: ${color.white};
        }
    `;
    }}
  }

  svg:first-child {
    transition: all .5s;
    fill: ${({ navIsOpen}) => navIsOpen ? color.white : color.black};
    
  }

  & > * {
    z-index: 100;
  } 
`;

const HamburgerWrapper = styled.button`
  margin-right: 1rem;
  border: none;
  background: none;
  
  svg {
    fill: ${color.black};
  }
  
  path {
    transition: transform .3s;
    transform: rotate(0) translate(0, 0) scaleX(1);
  }

  ${({ navIsOpen }) => {
    return navIsOpen && `
      fill: ${color.white};

      path:nth-child(1) {
        transform: rotate(45deg) translate(4px,-8px);
      }

      path:nth-child(2) {
        transform: translateX(47%) scaleX(.1);  
      }

      path:nth-child(3) {
        transform: rotate(-45deg) translate(-12px, 2px);
      }
    `;
  }}
  
`;

const TitleContainer = styled.div`
  font-size: 1.8rem;
  font-weight: ${({ navIsOpen }) => navIsOpen ? '300' : '600'};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  margin-right: -1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  & > *:last-child {
    font-size: 1.5rem;
  }
`;

const Header = ({ onMenuToggle, navIsOpen }) => {
  return (
    <HeaderContainer navIsOpen={navIsOpen}>
      <Crown style={{ height: '4.5rem' }}/>
      
      <TitleContainer navIsOpen={navIsOpen}>
        <Link
          to="/"
        >
          <div>
            woodward
          </div>
          <div>
            bicycle co.
          </div>
        </Link>
      </TitleContainer>
        
      <HamburgerWrapper
        navIsOpen={navIsOpen}
        onClick={onMenuToggle}
        aria-label="open menu"
      >
        <Hamburger />
      </HamburgerWrapper>

    </HeaderContainer>
  );
};

Header.defaultProps = {
  siteTitle: '',
  onMenuToggle: () => {},
  navIsOpen: false,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  onMenuToggle: PropTypes.func,
  navIsOpen: PropTypes.bool,
}

export default Header
