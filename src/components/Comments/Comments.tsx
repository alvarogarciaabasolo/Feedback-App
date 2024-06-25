import React from 'react';
import { ContanierRes, ContentText, HR } from './style/Comments.styled';
import { Replies } from './components/replies/replies';
import { User } from './components/User/User';
import { ICommentsProps } from './types/comments.type';
import { PostReply } from './components/postReply/PostReply';

export const Comments: React.FC<ICommentsProps> = ({
  suggestion,
  handleClickReply,
  selectedReplyId,
  handleClickReplies,
}) => {
  const { comments } = suggestion;

  return (
    <>
      {comments &&
        comments.map((res, index) => {
          const showReply = selectedReplyId !== res.id;
          const showHr = !res.replies && index !== comments.length - 1;

          return (
            <React.Fragment key={res.id}>
              <ContanierRes>
                <User res={res} handleClickReply={handleClickReply} />
                <ContentText>{res.content}</ContentText>
                <PostReply isHidden={showReply} />
              </ContanierRes>
              {showHr && <HR />}
            </React.Fragment>
          );
        })}
      <Replies
        comments={comments}
        selectedReplyId={selectedReplyId}
        handleClickReplies={handleClickReplies}
      />
    </>
  );
};
