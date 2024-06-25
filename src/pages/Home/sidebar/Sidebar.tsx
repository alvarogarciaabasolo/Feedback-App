import { lazy, Suspense } from 'react';
import { ContainerSidebar } from './style/sidebar.styled';
import { FilterDivComponent } from './components/FilterDiv';
import { RoadmapDivComponent } from './components/RoadmapDiv';
import { IclickFilter } from '../../../types/ClickFilter.type';

const HeaderDivComponent = lazy(
  () => import('./components/HeaderDiv/HeaderDiv')
);

export const Sidebar = ({ handleClickFilter }: IclickFilter) => {
  return (
    <ContainerSidebar>
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderDivComponent />
      </Suspense>
      <FilterDivComponent handleClickFilter={handleClickFilter} />
      <RoadmapDivComponent />
    </ContainerSidebar>
  );
};
