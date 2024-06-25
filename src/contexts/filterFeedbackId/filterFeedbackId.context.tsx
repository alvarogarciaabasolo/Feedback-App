import { createContext, useState } from 'react';
import {
  FilterFeedbackContextType,
  FilterFeedbackIdProviderProps,
} from './types/filterFeedback.type';

const initialContextState: FilterFeedbackContextType = {
  filterID: null,
  updateFeedbackId: () => {},
};

export const FilterFeedbackContext =
  createContext<FilterFeedbackContextType>(initialContextState);

export const FilterFeedbackIdContext = ({
  children,
}: FilterFeedbackIdProviderProps) => {
  const [filterID, setFilterID] = useState<number | null>(null);

  const updateFeedbackId = (id: number) => {
    setFilterID(id);
  };

  return (
    <FilterFeedbackContext.Provider value={{ filterID, updateFeedbackId }}>
      {children}
    </FilterFeedbackContext.Provider>
  );
};
