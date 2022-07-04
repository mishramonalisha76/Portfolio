import styled from "styled-components";
//types
import { TextType,ColorType } from './types';


export const TextP = styled.p<TextType>`
  color: ${({ color }) => color || "gray"};
  font-size: ${({ fontSize }) => fontSize || 1}rem;
  font-weight: ${({ fontWeight }) => fontWeight || 500};
  line-height: 1.8rem;
`;

export const TextHeading = styled.h1<TextType>`
  color: ${({ color }) => color || "white"};
  font-size: ${({ fontSize }) => fontSize || 4}rem;
  font-weight: ${({ fontWeight }) => fontWeight || 700};
  line-height: 2.5rem;
`;

export const DivContainer = styled.div`
  text-align: left;
  padding:0 0 15rem 0;
`;

export const TextList = styled.li<ColorType>`
  color: ${({ color }) => color || "white"};
  font-size: 1rem;
  padding: 0.5rem;
`;
