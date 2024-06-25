import {
  ADD_COMMENT,
  PLACEHOLDER,
  CHARACTERS,
  POST_COMMENT,
} from './constants/AddComment.constants';
import {
  ContaierAddComment,
  TextAddcomment,
  TextareaAddcomment,
  ContainerCharactersButton,
  Character,
  ContainerButton,
  ButtonText,
} from './style/AddComment.styled';
import { IAddcommetn } from './types/AddComment.type';

export const AddComment = ({
  handleChangePost,
  remainingCharacters,
  text,
  handleChange,
}: IAddcommetn) => {
  return (
    <ContaierAddComment>
      <TextAddcomment>{ADD_COMMENT}</TextAddcomment>

      <TextareaAddcomment
        placeholder={PLACEHOLDER}
        maxLength={250}
        value={text}
        onChange={handleChange}
      />
      <ContainerCharactersButton>
        <Character>
          {remainingCharacters} {CHARACTERS}
        </Character>
        <ContainerButton data-testid= 'buttonclick' onClick={handleChangePost}>
          <ButtonText>{POST_COMMENT}</ButtonText>
        </ContainerButton>
      </ContainerCharactersButton>
    </ContaierAddComment>
  );
};
