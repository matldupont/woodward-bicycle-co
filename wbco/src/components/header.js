import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components';

const HeaderContainer = styled.header`

`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div
    >
      <h1>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </HeaderContainer>
)

Header.defaultProps = {
  siteTitle: '',
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
