import './AppMenu.css';

import {
  FileOutlined,
  HomeOutlined,
  LineChartOutlined,
  TeamOutlined,
  TrophyOutlined,
} from '@ant-design/icons';
import { ConfigProvider, Menu } from 'antd';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
};

export const AppMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
    height: 24,
  });

  const tabs: MenuItem[] = [
    { key: 'main', icon: <HomeOutlined />, label: 'Главная' },
    { key: 'teams', icon: <TeamOutlined />, label: 'Команды' },
    { key: 'tournaments', icon: <TrophyOutlined />, label: 'Турниры' },
    { key: 'players', icon: <FileOutlined />, label: 'Игроки' },
    { key: 'rating', icon: <LineChartOutlined />, label: 'Рейтинг' },
  ];

  const currentKey = location.pathname.split('/')[1] || 'main';

  useEffect(() => {
    const updateIndicatorPosition = () => {
      if (!menuRef.current) return;

      const menuElement = menuRef.current.querySelector('.ant-menu');
      if (!menuElement) return;

      // Находим активный элемент по классу selected
      const activeItem = menuElement.querySelector('.ant-menu-item-selected');
      
      if (activeItem) {
        const menuRect = menuElement.getBoundingClientRect();
        const activeRect = activeItem.getBoundingClientRect();
        
        setIndicatorStyle({
          left: activeRect.left - menuRect.left + 5,
          width: activeRect.width - 10,
          height: 24,
        });
      } else {
        // Если нет активного элемента, найдем по индексу
        const currentIndex = tabs.findIndex(tab => tab.key === currentKey);
        const menuItems = menuElement.querySelectorAll('.ant-menu-item');
        
        if (menuItems[currentIndex]) {
          const menuRect = menuElement.getBoundingClientRect();
          const activeRect = menuItems[currentIndex].getBoundingClientRect();
          
          setIndicatorStyle({
            left: activeRect.left - menuRect.left + 5,
            width: activeRect.width - 10,
            height: 24,
          });
        }
      }
    };

    // Небольшая задержка для рендеринга меню
    const timer = setTimeout(updateIndicatorPosition, 150);
    
    // Обновляем при изменении размера окна
    window.addEventListener('resize', updateIndicatorPosition);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateIndicatorPosition);
    };
  }, [currentKey, tabs]);

  return (
    <div className="menu-container" ref={menuRef}>
      <div 
        className="animated-indicator"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          height: `${indicatorStyle.height}px`,
        }}
      />
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
          selectedKeys={[currentKey]}
          onClick={({ key }) => navigate(`/${key}`)}
          items={tabs}
          className="app-menu"
        />
      </ConfigProvider>
    </div>
  );
};
