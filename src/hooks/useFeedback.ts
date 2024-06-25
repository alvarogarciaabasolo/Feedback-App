import { useState, useCallback, useMemo } from 'react';
import { getItemLocalStorage } from '../services/getItemLocalStorage';
import { useFetchGetValue } from '../services/useFetchGetValue';

// Custom hook to handle feedback logic
export const useFeedback = () => {
  const { addFeedbackTitleDetail, addFeedbackSelect } = getItemLocalStorage();
  const { valueFetch } = useFetchGetValue();
  const [clickValue, setClickValue] = useState<string>('All');
  const [upVotesValue, setUpVotesValue] = useState<string>('Most Upvotes');

  // Handle filter button clicks
  const handleClickFilter = useCallback(
    (evt: React.MouseEvent<HTMLButtonElement>) => {
      setClickValue(evt.currentTarget.innerText);
    },
    []
  );

  // Memoize API values based on selected filter
  const valueApi = useMemo(() => {
    if (valueFetch?.productRequests) {
      if (clickValue === 'All') {
        return valueFetch.productRequests;
      } else {
        return valueFetch.productRequests.filter(
          (item: { category: string }) => item.category === clickValue
        );
      }
    }
    return [];
  }, [clickValue, valueFetch]);

  // Memoize the selected feedback value localStorage
  const select = useMemo(() => {
    if (clickValue === 'All') {
      return addFeedbackSelect;
    }
    return addFeedbackSelect === clickValue ? addFeedbackSelect : null;
  }, [clickValue, addFeedbackSelect]);

  return {
    addFeedbackTitleDetail,
    valueApi,
    select,
    upVotesValue,
    setUpVotesValue,
    handleClickFilter,
    valueFetch,
  };
};
