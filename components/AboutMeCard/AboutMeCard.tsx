import styled from "styled-components";
//styles
import { TextP, TextHeading, DivContainer, TextList } from '../../coreStyles';
//components
import CardHeading from "../CardHeading/CardHeading";
//constants
import { skills } from "../../constants";

const AboutMeCard: React.FC = () => (
  <DivContainer>
    <CardHeading title="About Me" />
    <TextP>
      Hello! My name is Brittany and I enjoy creating things that live on the
      <br />
      internet. My interest in web development started back in 2012 when I<br />
      decided to try editing custom Tumblr themes — turns out hacking <br />
      together a custom reblog button taught me a lot about HTML & CSS!
      <br />
      Fast-forward to today, and I’ve had the privilege of working at an <br />
      advertising agency, a start-up, a huge corporation, and a student-led{" "}
      <br />
      design studio.
    </TextP>
    <TextP>Here, are few technologies I have worked with:</TextP>
    <MenueDoubleStack>
      {skills.map((skill, i) => (
        <TextList key={skill + i} color="gray">
          {skill}
        </TextList>
      ))}
    </MenueDoubleStack>
  </DivContainer>
);

export default AboutMeCard;

//styles
const MenueDoubleStack = styled.ul`
  display:grid;
  grid-template-columns:repeat(2, minmax(140px, 200px));
`;
