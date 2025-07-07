import React from 'react';

import { TeamList } from '../../components/TeamList';

export const TeamsPage: React.FC = () => {
  return (
    <div style={{ padding: 24, minHeight: '100vh' }}>
      <TeamList />
    </div>
  );
};
