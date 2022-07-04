import styled from "styled-components";
//types
import { TextType } from "../../types";

const CardHeading: React.FC<{ title: string }> = ({ title }) => (
  <TextCardHeading fontSize={1.5} color="white">
    {title}
  </TextCardHeading>
);

export default CardHeading;

//styles
export const TextCardHeading = styled.h1<TextType>`
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || 4}rem;
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  line-height: 2.5rem;
  position: relative;
  display:flex;
  ::after {
    content: "";
    margin-left:1rem;
    height: 1px;
    width:25vw;
    background: gray;
    top:1.5rem;
    position: relative;
  }
`;
