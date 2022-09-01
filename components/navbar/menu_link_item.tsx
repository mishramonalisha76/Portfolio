import styled from "styled-components";
//styles
import { TextList } from '../../coreStyles';
//types
import { ColorType } from '../../types';


const MenuLinkItem: React.FC<{ text: string } & ColorType> = ({
  text,
  color
}) => <TextList color={color} >{text}</TextList>;

export default MenuLinkItem;

//styles
