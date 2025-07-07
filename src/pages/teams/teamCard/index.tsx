import React from 'react';

import { TeamCard } from '../../../components/TeamCard';

export const TeamCardPage: React.FC = () => {
  return (
    <div style={{ padding: 24, background: '#f0f2f5', minHeight: '100vh' }}>
      <TeamCard />
    </div>
  );
};
