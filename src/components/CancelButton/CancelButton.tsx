import { CANCEL } from './constants/CancelButton.constants';
import { CancelHeader, CancelTextHeader } from './style/CancelButton.styled';
import {IonClickCancel} from './types/CancelButton.types'

export const CancelButton = ({ onClick }: IonClickCancel) => {
  return (
    <CancelHeader onClick={onClick}>
      <CancelTextHeader>{CANCEL}</CancelTextHeader>
    </CancelHeader>
  );
};
