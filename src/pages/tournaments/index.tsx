import { Typography } from 'antd';
import React from 'react';

import { TournamentsTable } from '../../components/TournamentsTable';

export const TournamentsPage: React.FC = () => (
  <div style={{ padding: 24, background: '#f0f2f5', minHeight: '100vh' }}>
    <Typography.Title level={2}>Tурниры</Typography.Title>
    <TournamentsTable />
  </div>
);
