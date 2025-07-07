import './AppMenu.css';

import {
  FileOutlined,
  HomeOutlined,
  LineChartOutlined,
  TeamOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router';

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
};

export const AppMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs: MenuItem[] = [
    { key: 'main', icon: <HomeOutlined />, label: 'Главная' },
    { key: 'teams', icon: <TeamOutlined />, label: 'Команды' },
    { key: 'tournaments', icon: <TrophyOutlined />, label: 'Турниры' },
    { key: 'players', icon: <FileOutlined />, label: 'Игроки' },
    { key: 'rating', icon: <LineChartOutlined />, label: 'Рейтинг' },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemBg: '#22282F',
            darkItemSelectedBg: 'transparent',
            darkItemHoverBg: 'rgba(45, 55, 72, 0.6)',
            darkSubMenuItemBg: '#22282F',
            itemColor: '#a0aec0',
            itemHoverColor: '#ffffff',
            itemSelectedColor: '#ffffff',
            itemBorderRadius: 25,
            itemMarginInline: 0,
            itemPaddingInline: 10,
            itemHeight: 40,
            itemActiveBg: 'transparent',
          },
        },
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[location.pathname.split('/')[1] || 'main']}
        onClick={({ key }) => navigate(`/${key}`)}
        items={tabs}
        className="app-menu"
      />
    </ConfigProvider>
  );
};
