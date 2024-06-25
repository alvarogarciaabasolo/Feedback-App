import { lazy, Suspense } from 'react';
import { ContainerContentBody } from './style/ContentBody.styled';
import { HeaderDivComponent } from './HeaderDivComponent';
import { IContentBodyProp } from '../../../types/ContentBody.type';

const BodyDivComponent = lazy(
  () => import('./BodyDivComponent/BodyDivComponent')
);

export const ContentBody: React.FC<IContentBodyProp> = ({
  addFeedbackTitleDetail,
  valueApi,
  select,
  upVotesValue,
  setUpVotesValue,
  valueFetch,
}) => {
  return (
    <ContainerContentBody>
      <HeaderDivComponent
        valueApi={valueApi}
        upVotesValue={upVotesValue}
        setUpVotesValue={setUpVotesValue}
      />
      <Suspense fallback={<>Loading...</>}>
        <BodyDivComponent
          addFeedbackTitleDetail={addFeedbackTitleDetail}
          valueApi={valueApi}
          select={select}
          upVotesValue={upVotesValue}
          setUpVotesValue={setUpVotesValue}
          valueFetch={valueFetch}
        />
      </Suspense>
    </ContainerContentBody>
  );
};
