import styled from "styled-components";
//components
import MenuLinks from "./menu_links";
import LogoComponent from '../logo/index';



export default function Navbar() {
  return (
    <>
      <NavbarContainer>
        <LogoComponent/>
        <MenuLinks />
      </NavbarContainer>
    </>
  );
}

//styles
const NavbarContainer = styled.nav`
 display: flex;
 align-items: center;
 justify-content: space-around;
 flex-direction: row;
 background-color:#131313;
`;