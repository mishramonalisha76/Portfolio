import styled from "styled-components";

//styles
import { TextP, TextHeading, DivContainer } from '../../coreStyles';




const IntoCard: React.FC = () => (
  <DivContainer>
    <TextP color='purple'>Hi, my name is </TextP>
    <TextHeading fontSize={4} color='white'>Monalisha Mishra.</TextHeading>
    <TextHeading fontSize={3} color='gray'>I build for the web.</TextHeading>
    <TextP>I am a Software Engineer specialising in frontend development.<br/>
        Currently I am working as an SDE II at Factset.
    </TextP>
  </DivContainer>
);

export default IntoCard;

//styles



