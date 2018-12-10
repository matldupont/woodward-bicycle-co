import styled from 'styled-components';

const NavMenu = styled.nav`
  position: fixed;
  width: 100vw;
  background: #454545;
  z-index:99;
  transition: all .2s;

  height: 0;

  ${({ isOpen }) => {
    return isOpen && `height: 100vh;`;
  }}

`;

export default NavMenu;
