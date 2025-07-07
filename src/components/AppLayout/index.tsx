import {Avatar, Input, Layout, Space, Typography} from 'antd';
import {BellOutlined, DownOutlined, SearchOutlined, SettingOutlined} from '@ant-design/icons';
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
        <Layout style={{
            minHeight: '100vh',
            background: 'linear-gradient(180deg, #1a202c 0%, #2d3748 20%, #4a5568 100%)'
        }}>
            <Layout.Header style={{
                background: '#1a202c', 
                display: 'flex', 
                alignItems: 'center', 
                padding: '0 24px',
                borderBottom: '1px solid #2d3748',
                height: 64
            }}>
                {/* Навигационное меню слева */}
                <div style={{ flex: '0 0 auto' }}>
                    <AppMenu/>
                </div>

                {/* Логотип по центру */}
                <div style={{ 
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    cursor: 'pointer'
                }} onClick={handleLogoClick}>
                    <img 
                        src={`${process.env.PUBLIC_URL}/TNF_LOGO.png`}
                        alt="TNF Logo"
                        style={{ height: 40 }}
                    />
                </div>

                {/* Правая часть с поиском и профилем */}
                <div style={{ 
                    marginLeft: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16
                }}>
                    {/* Поиск */}
                    <Input
                        placeholder="Поиск..."
                        prefix={<SearchOutlined style={{ color: '#a0aec0' }} />}
                        style={{
                            width: 200,
                            backgroundColor: '#2d3748',
                            borderColor: '#4a5568',
                            color: '#ffffff'
                        }}
                        styles={{
                            input: { color: '#ffffff', backgroundColor: 'transparent' }
                        }}
                    />

                    {/* Иконки уведомлений и настроек */}
                    <Space size={12}>
                        <BellOutlined 
                            style={{ 
                                fontSize: 18, 
                                color: '#a0aec0',
                                cursor: 'pointer'
                            }} 
                        />
                        <img 
                            src={`${process.env.PUBLIC_URL}/stngs.png`}
                            alt="Settings"
                            style={{ 
                                width: 18, 
                                height: 18,
                                cursor: 'pointer',
                                filter: 'brightness(0.7)'
                            }}
                        />
                    </Space>

                    {/* Профиль пользователя */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        backgroundColor: '#2d3748',
                        padding: '6px 12px',
                        borderRadius: 6,
                        cursor: 'pointer'
                    }}>
                        <Avatar 
                            size={24}
                            src={`${process.env.PUBLIC_URL}/Avatar.png`}
                        />
                        <Typography.Text style={{ color: '#ffffff', fontSize: 14 }}>
                            IvanZolo2004
                        </Typography.Text>
                        <DownOutlined style={{ fontSize: 10, color: '#a0aec0' }} />
                    </div>
                </div>
            </Layout.Header>
            <Layout style={{background: 'transparent'}}>
                <Layout.Content style={{background: 'transparent'}}>
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
