import { EDIT_FEEDBACK } from './constants/EditFeedback.constants';
import { ContainerButton, ButtonText } from './style/EditFeedback.styled';

export const EditFeedback = () => {
  return (
    <ContainerButton>
      <ButtonText>{EDIT_FEEDBACK}</ButtonText>
    </ContainerButton>
  );
};
