import { useState } from 'react';
import IconArrowUp from '../assets/shared/icon-arrow-up-blue.svg';
import IconArrowDown from '../assets/shared/icon-arrow-up.svg';
import { useNavigate } from 'react-router-dom';
import { ProductRequestInterface } from '../types/FetchGetValue.type';

export const useHoverSuggestionItem = (suggestion: ProductRequestInterface) => {
  const [isHover, setIsHover] = useState<boolean>(true);
  const navigate = useNavigate();
  
  const conditionImg = isHover ? IconArrowUp : IconArrowDown;

  const handleHover = () => {
    setIsHover(!isHover);
  };

  const handleRouter = () => {
    navigate('/FeedbackDetail', { state: { suggestion: suggestion } });
  };

  return { conditionImg, handleHover, handleRouter };
};
