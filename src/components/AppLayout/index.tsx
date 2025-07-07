import './AppLayout.css';

import {BellOutlined, DownOutlined, SearchOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import {Avatar, Input, Layout, Space, Typography} from 'antd';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';

import {MainPage} from '../../pages/main/Main';
import {NewsPage} from '../../pages/news';
import {PlayersPage} from '../../pages/players';
import {RatingPage} from '../../pages/rating';
import {TeamsPage} from '../../pages/teams';
import {TeamCardPage} from '../../pages/teams/teamCard';
import {TournamentInfoPage} from '../../pages/tournamentInfo';
import {TournamentsPage} from '../../pages/tournaments';
import {AppMenu} from '../AppMenu';

export const AppLayout = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/main');
    };

    return (
        <Layout className="app-layout">
            <Layout.Header className="app-header">
                {/* Навигационное меню слева */}
                <div className="menu-container">
                    <AppMenu/>
                </div>

                {/* Логотип по центру */}
                <div className="logo-container" onClick={handleLogoClick}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/TNF_LOGO.png`}
                        alt="TNF Logo"
                        className="logo"
                    />
                </div>

                {/* Правая часть с поиском и профилем */}
                <div className="header-right">
                    {/* Поиск */}
                    <Input
                        placeholder="Поиск..."
                        prefix={<SearchOutlined className="header-icon" />}
                        className="search-input"
                        styles={{
                            input: { color: '#ffffff', backgroundColor: 'transparent' }
                        }}
                    />

                    {/* Иконки уведомлений и настроек */}
                    <Space className="icon-container">
                        <BellOutlined className="header-icon" />
                        <SettingOutlined className="header-icon" />
                    </Space>

                    {/* Профиль пользователя */}
                    <div className="profile-container">
                        <Avatar 
                            size={25}
                            icon={<UserOutlined />}
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.25)' }}
                        />
                        <Typography.Text className="profile-text">
                            IvanZolo2004
                        </Typography.Text>
                        <DownOutlined className="profile-arrow" />
                    </div>
                </div>
            </Layout.Header>
            <Layout className="app-content">
                <Layout.Content className="app-content">
                    <Routes>
                        <Route index element={<MainPage/>}/>
                        <Route path="/main" element={<MainPage/>}/>
                        <Route path="/news/:id" element={<NewsPage/>}/>
                        <Route path="/teams" element={<TeamsPage/>}/>
                        <Route path="/teams/:id" element={<TeamCardPage/>}/>
                        <Route path="/tournaments" element={<TournamentsPage/>}/>
                        <Route path="/tournaments/:id" element={<TournamentInfoPage/>}/>
                        <Route path="/players" element={<PlayersPage/>}/>
                        <Route path="/rating" element={<RatingPage/>}/>
                        <Route path="/" element={<Navigate to="/main"/>}/>
                    </Routes>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};
