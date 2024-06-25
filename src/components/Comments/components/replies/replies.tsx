import React from 'react';
import {
  EmailText,
  ContanierRes,
  ContentText,
  HR,
  ReplyingTon,
  HRReplies,
  ContainerReplies,
  BodyReplies,
  ContainerPostReply,
} from '../../style/Comments.styled';
import { Icommentes } from '../../types/comments.type';
import { User } from '../User/User';
import { PostReply } from '../postReply/PostReply';

export const Replies: React.FC<Icommentes> = ({
  comments,
  handleClickReplies,
  selectedReplyId,
}) => {
  return (
    <>
      {comments.map((res, index) => 
        res.replies && res?.replies.map((item, replyIndex) => (
          <React.Fragment key={`${res.id}-${replyIndex}`}>
            <ContainerReplies>
              <HRReplies />
              <BodyReplies>
                <ContanierRes>
                  <User item={item} handleClickReplies={handleClickReplies} />
                  <ContentText>
                    <EmailText>@</EmailText>
                    <ReplyingTon>{item.replyingTo}</ReplyingTon>
                    {item.content}
                  </ContentText>
                </ContanierRes>
                <ContainerPostReply>
                  <PostReply
                    isHidden={selectedReplyId !== item.user.username}
                  />
                </ContainerPostReply>
                {index !== comments.length - 1 && <HR />}
              </BodyReplies>
            </ContainerReplies>
          </React.Fragment>
        ))
      )}
    </>
  );
};

