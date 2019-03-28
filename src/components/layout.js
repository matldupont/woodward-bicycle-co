import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components'

import NavMenu from './NavMenu'
import Header from './header'
import { Container } from './Page'
// import './layout.css'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,500,600|Raleway:300,400,500,600');

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Raleway, sans-serif;
    font-size: 1.5rem;
    min-height: 100vh;
    display: flex;
    justify-content: stretch;
    align-items: stretch;

    & > * {
      flex: 1;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat;
  }
  
  * {
    padding: 0;
    margin: 0;
  }
`

// const StyledOverlay = styled.div`
//   display: flex;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   z-index: 30;
//   background-color: rgba(0,0,0, .5);
// `;

class Layout extends React.Component {
  state = {
    navOpen: false,
  }

  toggleMenu = () => {
    this.setState(({ navOpen }) => {
      return {
        ...this.state,
        navOpen: !navOpen,
      }
    })
  }

  render() {
    const { children, dark } = this.props
    const { navOpen } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Woodward Bicycle Co.' },
                { name: 'keywords', content: 'bike, bicycle' },
              ]}
            >
              <html lang="en" />
            </Helmet>

            <Header
              dark={dark}
              isOpen={navOpen}
              onMenuToggle={this.toggleMenu}
              siteTitle={data.site.siteMetadata.title}
            />
            <NavMenu isOpen={navOpen} />
            <GlobalStyle />
            <Container>{children}</Container>
          </>
        )}
      />
    )
  }
}

Layout.defaultProps = {
  dark: false,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  dark: PropTypes.bool,
}

export default Layout
