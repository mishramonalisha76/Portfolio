import styled from "styled-components";
//styles
import { TextList } from '../../coreStyles';

const MenuLinkItem: React.FC<{ text: string } & ColorType> = ({
  text,
  extraStyles,
}) => <TextList {...extraStyles}>{text}</TextList>;

export default MenuLinkItem;

//styles
