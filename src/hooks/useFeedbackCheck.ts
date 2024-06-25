import { useEffect, useState } from 'react';
import { DataInterface } from '../types/FetchGetValue.type';

type UseFeedbackCheckReturnType = boolean;

export const useFeedbackCheck = (
  valueFetch?: DataInterface
): UseFeedbackCheckReturnType => {
  const [isFeedBackTrue, setIsFeedbackTrue] = useState(false);

  useEffect(() => {
    setIsFeedbackTrue(localStorage.length === 0 && !valueFetch);
  }, [valueFetch]);

  return isFeedBackTrue;
};
