import {
  ContainerNewFeedback,
  ContainerCreate,
  ImageCircleFeedback,
  Container,
  Title,
  TitleCategory,
  Subtitle,
  InputFeedback,
  DescriptionDetail,
  ContainerButton,
  EmptyText,
} from './style/NewFeedback.styled';
import {
  CREATE_NEW_FEEDBACK,
  FEEDBACK_TITLE,
  DESCRIPTIVE_HEADLINE,
  CATEGORY,
  CHOOSE_CATEGORY,
  FEEDBACK_DETAIL,
  ADDED_COMMENTS,
  EMPTY,
} from './Constants/NewFeedback.constants';
import IconNewFeedback from '../../assets/shared/icon-new-feedback.svg';
import { CancelButton, AddfeedbackButton, Goback } from '../../components';
import { HandleEvent } from '../NewFeedback/utils/HandleEvent';
import React, { Suspense } from 'react';

// Carga perezosa del componente DropDown
const DropDown = React.lazy(() => import('./components/DropDown'));

export const NewFeedback = () => {
  const {
    handleChageTitle,
    handleChageDetail,
    handleClickAddFeedback,
    setSelectDropDown,
    isEmpty,
    selectDropDown,
    value,
    handleCancel,
  } = HandleEvent();

  return (
    <ContainerNewFeedback>
      <Container>
        <Goback />
        <ContainerCreate>
          <ImageCircleFeedback
            src={IconNewFeedback}
            alt="Circle New feedback"
          />
          <Title>{CREATE_NEW_FEEDBACK}</Title>
          <TitleCategory>{FEEDBACK_TITLE}</TitleCategory>
          <Subtitle>{DESCRIPTIVE_HEADLINE}</Subtitle>
          <InputFeedback
            type="text"
            onChange={handleChageTitle}
            value={value.Title}
          />
          <TitleCategory>{CATEGORY}</TitleCategory>
          <Subtitle>{CHOOSE_CATEGORY}</Subtitle>
          <Suspense fallback={<div>Loading...</div>}>
            <DropDown
              selectDropDown={selectDropDown}
              setSelectDropDown={setSelectDropDown}
            />
          </Suspense>
          <TitleCategory>{FEEDBACK_DETAIL}</TitleCategory>
          <Subtitle>{ADDED_COMMENTS}</Subtitle>
          <DescriptionDetail
            typeof="text"
            onChange={handleChageDetail}
            value={value.Detail}
            $isEmpty={isEmpty}
          />
          <EmptyText $isEmpty={isEmpty}>{EMPTY}</EmptyText>
          <ContainerButton>
            <CancelButton onClick={handleCancel} />
            <AddfeedbackButton
              onClick={handleClickAddFeedback}
              $isEmpty={isEmpty}
              disabled={isEmpty}
            />
          </ContainerButton>
        </ContainerCreate>
      </Container>
    </ContainerNewFeedback>
  );
};
