import { SuggestionItem } from '../SuggestionItem/SuggestionItem';
import { IContentBodyProp } from '../../../../types/ContentBody.type';
import { ProductRequestInterface } from '../../../../types/FetchGetValue.type';
import { NewSuggestionUtils } from './utils/NewSuggestionUtils.utils';

export const NewSuggestion: React.FC<IContentBodyProp> = ({
  addFeedbackTitleDetail,
  valueApi,
  select,
  upVotesValue,
  setUpVotesValue,
}) => {
  const { suggestionsWithAdditional } = NewSuggestionUtils(
    addFeedbackTitleDetail,
    select,
    valueApi
  );

  const orderUpdates = () => {
    const sortedSuggestions = [...suggestionsWithAdditional];

    switch (upVotesValue) {
      case 'Least Upvotes':
        sortedSuggestions.sort((a, b) => a.upvotes - b.upvotes);
        break;
      case 'Most Upvotes':
        sortedSuggestions.sort((a, b) => b.upvotes - a.upvotes);
        break;
      case 'Most Comments':
        sortedSuggestions.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
        break;
      case 'Least Comments':
        sortedSuggestions.sort((a, b) => (a.comments?.length || 0) - (b.comments?.length || 0));
        break;
      default:
        break;
    }

    return sortedSuggestions.map((res: ProductRequestInterface) => (
      <SuggestionItem key={res.id} suggestion={res} />
    ));
  };

  return <>{orderUpdates()}</>;
};
