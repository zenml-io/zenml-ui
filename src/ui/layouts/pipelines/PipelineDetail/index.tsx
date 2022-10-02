import React, { useState } from 'react';

import { Box, Paragraph, icons } from '../../../components';
import { iconColors, iconSizes } from '../../../../constants';
import { formatDateToDisplay } from '../../../../utils';
import { routePaths } from '../../../../routes/routePaths';
import { translate } from './translate';
import { Configuration } from './Configuration';
import { Runs } from './Runs';
import { BasePage } from '../BasePage';
import { useService } from './useService';
import FilterComponent, {
  getInitialFilterStateForRuns,
} from '../../../components/Filters';
import { useLocationPath } from '../../../hooks';

interface Props {
  pipelineId: TId;
}
const FilterWrapperForRun = () => {
  const locationPath = useLocationPath();
  // debugger;

  // TODO: Dev please note: getInitialFilterState is for stack inital filter value for any other component you need to modify it
  const [filters, setFilter] = useState([getInitialFilterStateForRuns()]);
  function getFilter(values: any) {
    const filterValuesMap = values.map((v: any) => {
      return {
        column: v.column.selectedValue,
        type: v.contains.selectedValue,
        value: v.filterValue,
      };
    });
    return filterValuesMap;
  }
  return (
    <FilterComponent
      getInitials={getInitialFilterStateForRuns}
      filters={filters}
      setFilter={setFilter}
    >
      <Runs
        filter={getFilter(filters)}
        pipelineId={locationPath.split('/')[2]}
      />
    </FilterComponent>
  );
};
const getTabPages = (pipelineId: TId): TabPage[] => {
  return [
    {
      text: translate('tabs.configuration.text'),
      Component: () => <Configuration pipelineId={pipelineId} />,
      path: routePaths.pipeline.configuration(pipelineId),
    },
    {
      text: translate('tabs.runs.text'),
      Component: FilterWrapperForRun,

      path: routePaths.pipeline.runs(pipelineId),
    },
  ];
};

const getBreadcrumbs = (pipelineId: TId): TBreadcrumb[] => {
  return [
    {
      name: translate('header.breadcrumbs.pipelines.text'),
      clickable: true,
      to: routePaths.pipelines.list,
    },
    {
      name: pipelineId,
      clickable: true,
      to: routePaths.pipeline.configuration(pipelineId),
    },
  ];
};

export interface PipelineDetailRouteParams {
  id: TId;
}

export const PipelineDetail: React.FC = () => {
  const { pipeline } = useService();

  const tabPages = getTabPages(pipeline.id);
  const breadcrumbs = getBreadcrumbs(pipeline.id);

  const boxStyle = {
    backgroundColor: '#E9EAEC',
    padding: '30px 0',
    borderRadius: '8px',
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-around',
  };
  const headStyle = { color: '#828282' };

  return (
    <BasePage
      headerWithButtons
      tabPages={tabPages}
      tabBasePath={routePaths.pipeline.base(pipeline.id)}
      breadcrumbs={breadcrumbs}
    >
      <Box style={boxStyle}>
        <Box>
          <Paragraph style={headStyle}>ID</Paragraph>
          <Paragraph
            style={{ color: '#515151', marginTop: '10px', fontWeight: 'bold' }}
          >
            {pipeline.id}
          </Paragraph>
        </Box>
        <Box>
          <Paragraph style={headStyle}>NAME</Paragraph>
          <Paragraph
            style={{ color: '#515151', marginTop: '10px', fontWeight: 'bold' }}
          >
            {pipeline.name}
          </Paragraph>
        </Box>
        <Box>
          <Paragraph style={headStyle}>SHARED</Paragraph>
          <Paragraph
            style={{
              marginTop: '10px',
              justifyContent: 'center',
              borderRadius: '50%',
              height: '25px',
              width: '25px',
              paddingTop: '3px',
              textAlign: 'center',
            }}
          >
            {pipeline.isShared ? (
              <icons.multiUser color={iconColors.white} size={iconSizes.sm} />
            ) : (
              <icons.singleUser color={iconColors.white} size={iconSizes.sm} />
            )}
          </Paragraph>
        </Box>
        <Box>
          <Paragraph style={headStyle}>OWNER</Paragraph>
          <Paragraph
            style={{ color: '#515151', marginTop: '10px', fontWeight: 'bold' }}
          >
            {pipeline.user.name}
          </Paragraph>
        </Box>
        <Box>
          <Paragraph style={headStyle}>CREATED AT</Paragraph>
          <Paragraph
            style={{ color: '#515151', marginTop: '10px', fontWeight: 'bold' }}
          >
            {formatDateToDisplay(pipeline.created)}
          </Paragraph>
        </Box>
      </Box>
    </BasePage>
  );
};

export default PipelineDetail;
