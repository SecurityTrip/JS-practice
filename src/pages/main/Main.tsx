import './Main.css';

import { Col, Row } from 'antd';

import { LeftSidebar } from '../../components/LeftSidebar';
import { NewsList } from '../../components/NewsList';
import { RightSidebar } from '../../components/RightSidebar';

export const MainPage: React.FC = () => {
    return (
        <div style={{ padding: '24px', minHeight: '100vh' }}>
            <Row gutter={24}>
                <Col xs={24} sm={24} md={6} lg={6} xl={5}>
                    <LeftSidebar />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={14}>
                    <NewsList />
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={5}>
                    <RightSidebar />
                </Col>
            </Row>
        </div>
    );
};
