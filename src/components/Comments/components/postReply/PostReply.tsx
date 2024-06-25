import {
  ContainerPost,
  Textarea,
  ButtonContainer,
  TextButton,
} from './style/PostReply.styled';
import { POST_REPLY } from './contants/PostReply.contants';
import { IProps } from './types/PostReply.type';

export const PostReply: React.FC<IProps> = ({ isHidden })  => {
  if (isHidden) {
    return null;
  }
  return (
    <ContainerPost>
      <Textarea placeholder="Type your comment here" />
      <ButtonContainer>
        <TextButton>{POST_REPLY}</TextButton>
      </ButtonContainer>
    </ContainerPost>
  );
};
