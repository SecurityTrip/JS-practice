import { Typography } from 'antd';

import { Players } from '../../components/Players';

export const PlayersPage = () => (
  <div style={{ padding: 24, minHeight: '100vh' }}>
    <Typography.Title level={3}>Игроки</Typography.Title>
    <Players />
  </div>
);
