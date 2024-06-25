import { ADD_FEEDBACK } from './constants/AddfeedbackButton.constants';
import {
  AddfeedbackButtonHeader,
  AddfeedbackButtonTextHeader,
} from './style/AddfeedbackButton.styled';
import {IonClick} from './types/AddfeeedbackButton.types'

export const AddfeedbackButton = ({ onClick, $isEmpty, disabled }: IonClick) => {
  return (
    <AddfeedbackButtonHeader data-testid='buttonclick' onClick={onClick} disabled={disabled} $isEmpty={$isEmpty}>
      <AddfeedbackButtonTextHeader>{ADD_FEEDBACK}</AddfeedbackButtonTextHeader>
    </AddfeedbackButtonHeader>
  );
};
