import {
  SUGGESTIONS,
  ORDER_LIST,
} from './constants/HeaderDivComponent.constants';
import {
  HeaderDiv,
  IconLightBulb,
  ValueTextSuggestion,
  OrderList,
  OrderListValue,
  ArrowUp,
  ContainerSuggestionsList,
  OrderListArrow,
} from './style/HeaderDivComponent.styled';
import ImageSuggestion from '../../../../assets/suggestions/icon-suggestions.svg';
import IconArrowUp from '../../../../assets/shared/icon-arrow-down.svg';
import IconArrowDown from '../../../../assets/shared/icon-arrow-up.svg';
import { ButtonPlusAddFeedback } from '../../../../components/ButtonPlusAddFeedback/ButtonPlusAddFeedback';
import { IContentBodyProp } from '../../../../types/ContentBody.type';
import { ListUpVotes } from './components/ListUpVotes/ListUpVotes';
import { useState } from 'react';

export const HeaderDivComponent = ({
  valueApi,
  upVotesValue,
  setUpVotesValue,
}: IContentBodyProp) => {
  const [isListUpVotes, setIsListUpVotes] = useState<boolean>(true);
  const srcCondition = isListUpVotes ? IconArrowUp : IconArrowDown;
  
// Toggle the upvotes list visibility
  const handleClikListUpVotes = () => {
    setIsListUpVotes(!isListUpVotes);
  };

  return (
    <HeaderDiv>
      <IconLightBulb src={ImageSuggestion} alt="Icon suggestions" />
      <ContainerSuggestionsList>
        <ValueTextSuggestion>{valueApi.length}</ValueTextSuggestion>
        <ValueTextSuggestion>{SUGGESTIONS}</ValueTextSuggestion>
        <OrderListArrow onClick={handleClikListUpVotes}>
          <OrderList>{ORDER_LIST}</OrderList>
          <OrderListValue>{upVotesValue}</OrderListValue>
          <ArrowUp src={srcCondition} alt="Icon suggestions" />
          <ListUpVotes
            isListUpVotes={isListUpVotes}
            setUpVotesValue={setUpVotesValue}
          />
        </OrderListArrow>
      </ContainerSuggestionsList>
      <ButtonPlusAddFeedback />
    </HeaderDiv>
  );
};
