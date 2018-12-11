import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { color } from '../utilities/styles';

const NavMenuWrapper = styled.nav`
  position: fixed;
  width: 100vw;
  background: #454545;
  z-index:99;
  transition: all .2s;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 0;

  ${({ isOpen }) => {
    return isOpen && `height: 100vh;`;
  }}
`;

const NavDivider = styled.div`
  content: " ";
  margin: 3rem 0 4rem;
  border-bottom: 2px solid #fff;
  height: 1rem;
  width: 5rem;
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > a {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: ${color.white};
    text-decoration: none;
    padding-bottom: .5rem;
    border-bottom: 2px solid transparent;
    transition: all .3s;

    &:hover,
    &:active,
    &:focus { 
      border-bottom: 2px solid ${color.white};
    }
  }

  & > a:first-child {
    color: ${color.gold};

    &:hover,
    &:active,
    &:focus { 
      border-bottom: 2px solid ${color.gold};
    }
  }
`;

const NavMenu = ({ isOpen }) => {
  return (
    <NavMenuWrapper isOpen={isOpen}>
      <NavLinks>
      <Link>Book Now</Link>
      <NavDivider />
      <Link>Services</Link>
      <NavDivider />
      <Link>About Me</Link>
      </NavLinks>
      
    </NavMenuWrapper>
  )
}

NavMenu.defaultProps = {
  isOpen: false,
}

NavMenu.propTypes = {
  isOpen: PropTypes.bool,
}

export default NavMenu;
