import {Layout, Typography} from 'antd';
import {Navigate, Route, Routes} from 'react-router';

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
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Layout.Header style={{background: '#462b4c', display: 'flex', alignItems: 'center', padding: '0 24px'}}>
                <Typography.Title level={4} style={{color: '#ffffff', margin: 0, marginRight: '24px'}}>
                    CyberSportsPortal
                </Typography.Title>
                <div style={{flex: 1}}>
                    <AppMenu/>
                </div>
            </Layout.Header>
            <Layout>
                <Layout.Content>
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
