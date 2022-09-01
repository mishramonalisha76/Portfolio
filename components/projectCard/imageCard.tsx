import styled from "styled-components";
//types
import { HWType } from '../../types';



const ImageCard: React.FC = () => (
  <ImageDivContainer>
<Image src={} alt = "" />
  </ImageDivContainer>
);

export default ImageCard;

//styles
const ImageDivContainer = styled.div<HWType>`
width: ${({ width }) => width || 16}rem;
height: ${({ height }) => height || 16}rem;
overflow:hidden;
`;
const Image = styled.img`
width: 100%;
height: 100%;
`;

