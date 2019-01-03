import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Crown from '../images/WBco.logo.crown.svg'
import Hamburger from '../images/Hamburger.svg'
import { border, color } from '../utilities/styles'

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${border.color};
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
  background: ${color.white};
  ${({ dark }) => {
    return (
      dark &&
      `
      background: ${color.black.alt};
    `
    )
  }}
  z-index: 999;

  & > *:first-child {
    margin-left: 1rem;
  }

  & > *:last-child {
    margin-right: 1rem;
  }

  ${({ open }) => {
    return (
      open &&
      `
        background: ${color.grey.main};
        position: fixed;
        width: 100vw;
        top: 0;
        z-index: 999;
    `
    )
  }}

  & > * {
    z-index: 100;
  }
`

const HamburgerWrapper = styled.button`
  margin-right: 1rem;
  border: none;
  background: none;

  svg {
    transition: all 0.2s;
    fill: ${({ dark, open }) => {
      if (dark || open) return color.white
      return color.black.main
    }};
  }

  path {
    transition: transform 0.3s;
    transform: rotate(0) translate(0, 0) scaleX(1);
  }

  ${({ open }) => {
    return (
      open &&
      `
      svg {
        fill: ${color.white};
      }

      path:nth-child(1) {
        transform: rotate(45deg) translate(4px,-8px);
      }

      path:nth-child(2) {
        transform: translateX(47%) scaleX(.1);  
      }

      path:nth-child(3) {
        transform: rotate(-45deg) translate(-12px, 2px);
      }
    `
    )
  }}
`

const CrownWrapper = styled.span`
  svg {
    fill: ${({ open, dark }) => {
      if (dark || open) return color.white

      return color.black.main
    }};
  }
`

const CrownIcon = styled(Crown)`
  height: 4.5rem;
  transition: all 0.5s;
  fill: ${({ open, dark }) => {
    if (dark || open) return color.white

    return color.black.main
  }};
`

const TitleContainer = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
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

  a {
    text-decoration: none;

    &:link,
    &:visited,
    &:hover,
    &:active {
      color: ${color.black.main};

      ${({ dark }) => {
        return (
          dark &&
          `
            color: ${color.white};
            font-weight: 300;
          `
        )
      }};
    }
    transition: all 0.2s;

    ${({ open, dark }) => {
      return (
        (open || dark) &&
        `
        color: #fff;
        font-weight: 300;
  

        &:link,
        &:visited,
        &:hover,
        &:active {
          color: ${color.white};
        }
    `
      )
    }}
  }
`

const Header = ({ onMenuToggle, isOpen, dark }) => {
  return (
    <HeaderContainer dark={dark} open={isOpen}>
      <CrownWrapper dark={dark} open={isOpen}>
        <CrownIcon />
      </CrownWrapper>

      <TitleContainer dark={dark} open={isOpen}>
        <Link to="/">
          <div>woodward</div>
          <div>bicycle co.</div>
        </Link>
      </TitleContainer>

      <HamburgerWrapper
        dark={dark}
        open={isOpen}
        onClick={onMenuToggle}
        aria-label="open menu"
      >
        <Hamburger />
      </HamburgerWrapper>
    </HeaderContainer>
  )
}

Header.defaultProps = {
  siteTitle: '',
  onMenuToggle: () => {},
  isOpen: false,
  dark: false,
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  onMenuToggle: PropTypes.func,
  isOpen: PropTypes.bool,
  dark: PropTypes.bool,
}

export default Header
