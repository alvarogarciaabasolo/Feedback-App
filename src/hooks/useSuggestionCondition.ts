import { useLocation } from 'react-router-dom';
import { ILocationState } from '../pages/FeedbackDetail/types/FeddbackDetail.type';

export const useSuggestionCondition = () => {
  const location = useLocation();
  const state = location.state as ILocationState;
  const suggestion = state?.suggestion;
  const numberComments = suggestion.comments.length;

  const numberCommentsReplies = suggestion.comments.map((item) =>
    item.replies ? item.replies.length : 0
  );

  const valueReplies = numberCommentsReplies.reduce(
    (value, actualValue) => value + actualValue,
    0
  );
  
  const plusComments = numberComments + valueReplies;

  return { suggestion, plusComments };
};
