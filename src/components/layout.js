import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { createGlobalStyle } from 'styled-components';

import NavMenu from './NavMenu'
import Header from './header'
// import './layout.css'


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,500,600|Raleway:300,400,500,600');

  html,body{
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Raleway, sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: Montserrat;
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
    navOpen: true,
  };

  toggleMenu = () => {
    this.setState(({ navOpen}) => {
      return {
        ...this.state,
        navOpen: !navOpen,
      }
    })
  }

  render() {
    const { children } = this.props;
    const { navOpen } = this.state;
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
            <NavMenu isOpen={navOpen} />
            <Header
              navIsOpen={navOpen}
              onMenuToggle={this.toggleMenu}
              siteTitle={data.site.siteMetadata.title} 
            />
            <GlobalStyle />
            <div>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
