import React from 'react';

import { TournamentInfo } from '../../components/TournamentInfo';

export const TournamentInfoPage: React.FC = () => {
  return (
    <div style={{ padding: 24, background: '#f0f2f5', minHeight: '100vh' }}>
      <TournamentInfo />
    </div>
  );
};
