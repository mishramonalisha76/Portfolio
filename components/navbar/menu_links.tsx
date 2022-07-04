import styled from "styled-components";
//components
import MenuLinkItem from "./menu_link_item";
import ButtonComponent from "../Button/index";
//constants
import { menueLinksTitle } from '../../constants';


const MenuLinks: React.FC = () => (
  <MenueHorizontalStack>
    {menueLinksTitle.map((text,i) => (
      <MenuLinkItem  key={text+i} text={text} color="white" />
    ))}
    <ButtonComponent text="Resume" link="#"/>
  </MenueHorizontalStack>
);

export default MenuLinks;

//styles
const MenueHorizontalStack = styled.ul`
  display: inline-flex;
  list-style-type: none;
`;
