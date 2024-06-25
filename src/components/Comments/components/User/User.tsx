import React from 'react';
import {
  Name,
  Email,
  EmailText,
  TextReply,
  Image,
  ContainerUser,
  ContainerName,
} from './style/User.styled';
import { getImagePath } from '../../utils/getImageName.utils';
import { REPLY } from '../../Constants/Comments.constants';
import { Iuser } from './types/User.type';
import { UserInterface } from '../../../../types/FetchGetValue.type';

export const User: React.FC<Iuser> = ({
  res,
  item,
  handleClickReply,
  handleClickReplies,
  valueFetch,
}) => {
  const currentUser: UserInterface = valueFetch?.currentUser || {
    name: '',
    username: '',
    image: '',
  };

  const user = res?.user || item?.user || currentUser;
console.log(res)
  const handleClick = () => {
    if (res?.id) {
      handleClickReply && handleClickReply(res.id);
    } else if (item?.user.username) {
      handleClickReplies && handleClickReplies(item.user.username);
    } else {
      handleClickReply && handleClickReply(currentUser);
    }
  };

  return (
    <ContainerUser>
      <Image
        src={getImagePath(user.image.split('/').pop())}
        alt="User"
      />
      <ContainerName>
        <Name>{user.name}</Name>
        <Email>
          <EmailText>@</EmailText>
          {user.username}
        </Email>
      </ContainerName>
      <TextReply onClick={handleClick}>
        {REPLY}
      </TextReply>
    </ContainerUser>
  );
};


