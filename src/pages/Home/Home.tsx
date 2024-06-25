import { ConteinerApp } from './style/home.styled';
import { ContentBody, Sidebar } from '.';
import { useFeedback } from '../../hooks/useFeedback';

function Home() {
  const {
    addFeedbackTitleDetail,
    valueApi,
    select,
    upVotesValue,
    setUpVotesValue,
    handleClickFilter,
    valueFetch,
  } = useFeedback();

  return (
    <ConteinerApp>
      <Sidebar handleClickFilter={handleClickFilter} />
      <ContentBody
        addFeedbackTitleDetail={addFeedbackTitleDetail}
        valueApi={valueApi}
        select={select}
        upVotesValue={upVotesValue}
        setUpVotesValue={setUpVotesValue}
        valueFetch={valueFetch}
      />
    </ConteinerApp>
  );
}

export default Home;
