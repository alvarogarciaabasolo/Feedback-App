import {
  HeaderDiv,
  Title,
  SubTitle,
  HeaderText,
} from './style/HeaderDiv.styled';
import { frontedMentor, feedbackBoard } from './constants/HeaderDiv.constants';

const HeaderDivComponent = () => {
  return (
    <HeaderDiv>
      <HeaderText>
        <Title>{frontedMentor}</Title>
        <SubTitle>{feedbackBoard}</SubTitle>
      </HeaderText>
    </HeaderDiv>
  );
};
export default HeaderDivComponent;
