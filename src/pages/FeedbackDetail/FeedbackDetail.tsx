import {
  ContainerDetail,
  ContainerButtons,
  SuggestionItemWrapper,
  ContainerComments,
  NumberComments,
  ContainerRes,
  ContentText,
  HR,
} from './style/FeedbackDetail.styled';
import { COMMENTS } from './constants/FeedbackDetail.constants';
import { Goback, EditFeedback, Comments, AddComment } from '../../components';
import { SuggestionItem } from '../../components/Suggestions/components/SuggestionItem/SuggestionItem';
import { useSuggestionCondition } from '../../hooks/useSuggestionCondition';
import { useSelectedReplyId } from '../../hooks/useSelectedReplyId';
import { useFetchGetValue } from '../../services/useFetchGetValue';
import { User } from '../../components/Comments/components/User/User';
import { useAddCommentChange } from '../../hooks/useAddCommentChange';
import { useLocalStorageCommentValue } from '../../hooks/useLocalStorageCommentValue';
import { useContext, useCallback } from 'react';
import { FilterFeedbackContext } from '../../contexts/filterFeedbackId/filterFeedbackId.context';

export const FeedbackDetail = () => {
  const { filterID, updateFeedbackId } = useContext(FilterFeedbackContext);
  const { suggestion, plusComments } = useSuggestionCondition();
  const { selectedReplyId, handleClickReply, handleClickReplies } =
    useSelectedReplyId();
  const { valueFetch } = useFetchGetValue();
  const { remainingCharacters, text, handleChange } = useAddCommentChange();
  const { storageComment, storageValue } = useLocalStorageCommentValue();

  const handleChangePost = useCallback(() => {
    try {
      localStorage.setItem('Value current user', JSON.stringify(valueFetch));
      localStorage.setItem('Comment Feedback', JSON.stringify(text));
      updateFeedbackId(suggestion.id);
    } catch (error) {
      console.error('Error saving to localStorage', error);
    }
  }, [valueFetch, text, suggestion.id, updateFeedbackId]);

  const filterFeedbackId = filterID === suggestion.id;
  const conditionNumberComments = filterFeedbackId ? plusComments + 1 : plusComments;
  const numberCondition = conditionNumberComments !== 0;

  return (
    <ContainerDetail>
      <ContainerButtons>
        <Goback />
        <EditFeedback />
      </ContainerButtons>
      <SuggestionItemWrapper>
        <SuggestionItem suggestion={suggestion} />
      </SuggestionItemWrapper>
      {numberCondition && (
        <ContainerComments>
          <NumberComments>
            {conditionNumberComments} {COMMENTS}
          </NumberComments>
          <Comments
            suggestion={suggestion}
            handleClickReply={handleClickReply}
            selectedReplyId={selectedReplyId}
            handleClickReplies={handleClickReplies}
          />
          {storageValue && filterFeedbackId && (
            <ContainerRes>
              <HR />
              <User valueFetch={storageValue} />
              <ContentText>{storageComment}</ContentText>
            </ContainerRes>
          )}
        </ContainerComments>
      )}
      <AddComment
        handleChangePost={handleChangePost}
        remainingCharacters={remainingCharacters}
        text={text}
        handleChange={handleChange}
      />
    </ContainerDetail>
  );
};
