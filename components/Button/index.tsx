import styled from "styled-components";
//types
import { ButtonProps, ButtonPropsStyle } from '../../types';

const ButtonComponent: React.FC<ButtonProps> = ({
  text,
  link
}) => (
  <a target="_blank" href={link} rel="noreferrer">
    <Button>{text}</Button>
  </a>
);

export default ButtonComponent;

//styles
const Button = styled.button<ButtonPropsStyle>`
  color: purple;
  font-size: ${({ fontSize }) => fontSize || 1}rem;
  width: ${({ width }) => width || 5}rem;
  height: ${({ height }) => height || 2}rem;
  padding: 0.2rem;
  border: 1px solid purple;
  border-radius: 2px;
  background-color: transparent;
`;
