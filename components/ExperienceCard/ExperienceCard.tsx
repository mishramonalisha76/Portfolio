import { useState } from "react";
import styled from "styled-components";
//styles
import { DivContainer } from "../../coreStyles";
//components
import CardHeading from "../CardHeading/CardHeading";
import ButtonComponent from "../Button/index";
//constants

const experienceData = [
  {
    tabName: "Factset",
    tabContent:
      "Write modern, performant, maintainable code for a diverse array of client and internal projects",
  },
  {
    tabName: "EPNS",
    tabContent:
      "performant, maintainable code for a diverse array of client and internal projects",
  },
  {
    tabName: "Chainwhiz",
    tabContent:
      "Write modern, maintainable code for a diverse array of client and internal projects",
  },
];

type ExperienceTabObjectType = {
  tabName: String;
  tabContent: String;
};

const ExperienceCard: React.FC = () => {
  const [clickedTabIndex, setClickTabIndex] = useState<number>(0);
  console.log(clickedTabIndex);
  const onClickTab = (i: number) => {
    setClickTabIndex(i);
  };
  return (
    <DivContainer>
      <CardHeading title="Experience" />
      <FlexContainer>
        <FlexContainer direction='column'>
          {experienceData.map((data,i) => (
            <TabButton key={`${data.tabName}+i`} onClick={() => onClickTab(i)}>
              {" "}
              {data.tabName}
            </TabButton>
          ))}
        </FlexContainer>
        <FlexContainer>
          {experienceData[clickedTabIndex].tabContent}
        </FlexContainer>
      </FlexContainer>
    </DivContainer>
  );
};

export default ExperienceCard;

//styles

const FlexContainer = styled.div<{direction?:string}>`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  color: gray;
`;

const TabButton = styled.div`
  color: gray;
  font-size: 1rem;
  width: 100%;
  padding: 0 1.5rem  1rem 0;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: purple;
  }
`;
