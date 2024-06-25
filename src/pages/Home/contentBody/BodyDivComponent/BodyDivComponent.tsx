import React from 'react';
import {
  BodyDiv,
  IconSearch,
  Title,
  Description,
} from './style/BodyDivComponent.styled';
import {
  NO_FEEDBACK,
  DESCRIPTION,
} from './constants/BodyDivComponent.constant';
import Search from '../../../../assets/suggestions/illustration-empty.svg';
import { ButtonPlusAddFeedback } from '../../../../components';
import { NewSuggestion } from '../../../../components/Suggestions/components/NewSuggestion/NewSuggestion';
import { IContentBodyProp } from '../../../../types/ContentBody.type';
import { useFeedbackCheck } from '../../../../hooks/useFeedbackCheck';

const BodyDivComponent: React.FC<IContentBodyProp> = ({
  addFeedbackTitleDetail,
  valueApi,
  select,
  upVotesValue,
  setUpVotesValue,
  valueFetch,
}) => {
  const isFeedBackTrue = useFeedbackCheck(valueFetch);

  return (
    <>
      {isFeedBackTrue ? (
        <BodyDiv>
          <IconSearch src={Search} alt="Icon search" />
          <Title>{NO_FEEDBACK}</Title>
          <Description>{DESCRIPTION}</Description>
          <ButtonPlusAddFeedback />
        </BodyDiv>
      ) : (
        <NewSuggestion
          addFeedbackTitleDetail={addFeedbackTitleDetail}
          valueApi={valueApi}
          select={select}
          upVotesValue={upVotesValue}
          setUpVotesValue={setUpVotesValue}
        />
      )}
    </>
  );
};

export default BodyDivComponent;
