import * as React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { color } from '../utilities/styles'

const NavMenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  width: 100vw;
  background: ${color.grey.main};
  z-index: 99;
  transition: height 0.4s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  visibility: hidden;
  /* top: -100vh; */

  height: 0;

  ${({ isOpen }) => {
    return (
      isOpen &&
      `
      height: 100vh;
      // top: 0;
      visibility: visible;
    `
    )
  }}
`

const NavDivider = styled.div`
  content: ' ';
  margin: 3rem 0 4rem;
  border-bottom: 2px solid ${color.white};
  height: 1rem;
  width: 5rem;

  &:nth-child(1) {
    transition: all 0.2s ease-in 0.1s;
  }

  &:nth-child(3) {
    transition: all 0.2s ease-in 0.3s;
  }

  &:nth-child(5) {
    transition: all 0.2s ease-in 0.5s;
  }

  ${({ isOpen }) => {
    return (
      isOpen &&
      `
      border-bottom: 2px solid ${color.white};
    `
    )
  }}
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* visibility: hidden; */
  /* opacity: 0; */

  ${({ isOpen }) => {
    return (
      isOpen &&
      `
      // opacity: 1;
      // visibility: visible;
    `
    )
  }}

  & > a {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 3px;
    color: ${color.white};
    text-decoration: none;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid transparent;

    opacity: 0;

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid ${color.white};
    }

    &:nth-child(1) {
      transition: opacity 0.2s ease-in 0.1s;
    }

    &:nth-child(3) {
      transition: opacity 0.2s ease-in 0.3s;
    }

    &:nth-child(5) {
      transition: opacity 0.2s ease-in 0.5s;
    }

    ${({ isOpen }) => {
      return (
        isOpen &&
        `
          opacity: 1;
        `
      )
    }}
  }

  & > a:first-child {
    color: ${color.gold};

    &:hover,
    &:active,
    &:focus {
      border-bottom: 2px solid ${color.gold};
    }
  }
`

const NavMenu = ({ isOpen }) => {
  return (
    <NavMenuWrapper isOpen={isOpen}>
      <NavLinks isOpen={isOpen}>
        <Link to="/book-now">Book Now</Link>
        <NavDivider isOpen={isOpen} />
        <Link to="/services">Services</Link>
        <NavDivider isOpen={isOpen} />
        <Link to="/about">About Me</Link>
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

export default NavMenu
