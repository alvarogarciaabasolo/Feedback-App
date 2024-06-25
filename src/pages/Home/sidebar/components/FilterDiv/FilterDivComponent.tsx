import React from 'react';
import {
  FilterDiv,
  ButtonUp,
  TextSpan,
  ButtonMiddleBig,
  ButtonMiddleSmall,
  ButtonBottonSmall,
} from './style/FilterDivComponents.styled';
import {
  all,
  ui,
  ux,
  enhancement,
  bug,
  feature,
} from './constants/FilterDivComponent.constants';
import { IclickFilter } from '../../../../../types/ClickFilter.type';

export const FilterDivComponent = ({ handleClickFilter }: IclickFilter) => {
  return (
    <FilterDiv>
      <ButtonUp onClick={handleClickFilter}>
        <TextSpan>{all}</TextSpan>
      </ButtonUp>
      <ButtonUp onClick={handleClickFilter}>
        <TextSpan>{ui}</TextSpan>
      </ButtonUp>
      <ButtonUp onClick={handleClickFilter}>
        <TextSpan>{ux}</TextSpan>
      </ButtonUp>
      <ButtonMiddleBig onClick={handleClickFilter}>
        <TextSpan>{enhancement}</TextSpan>
      </ButtonMiddleBig>
      <ButtonMiddleSmall onClick={handleClickFilter}>
        <TextSpan>{bug}</TextSpan>
      </ButtonMiddleSmall>
      <ButtonBottonSmall onClick={handleClickFilter}>
        <TextSpan>{feature}</TextSpan>
      </ButtonBottonSmall>
    </FilterDiv>
  );
};
