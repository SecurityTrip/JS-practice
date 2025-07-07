import './NewsDetail.css';

import { Card, Col, Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';

import { LeftSidebar } from '../LeftSidebar';
import { newsData, NewsItem } from '../NewsList/newsData';
import { RightSidebar } from '../RightSidebar';

const { Title, Text, Paragraph } = Typography;

export const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const newsItem = newsData.find((news: NewsItem) => news.id === parseInt(id || '0'));

    if (!newsItem) {
        return (
            <div className="news-detail-container">
                <Title level={2} className="news-not-found-title">Новость не найдена</Title>
            </div>
        );
    }

    return (
        <div className="news-detail-container">
            <Row gutter={24}>
                <Col xs={24} sm={24} md={6} lg={6} xl={5}>
                    <LeftSidebar />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={14}>
                    <Card className="news-detail-card">
                        <div className="news-header">
                            <div className="news-icon-container">
                                <img
                                    src={`${process.env.PUBLIC_URL}/Falcons.png`}
                                    alt="Falcons"
                                    className="news-icon"
                                />
                            </div>
                            <Title level={2} className="news-title">
                                {newsItem.title}
                            </Title>
                        </div>
                        
                        <div className="news-meta">
                            <Text className="news-meta-text">
                                by {newsItem.author}
                            </Text>
                            <Text className="news-meta-text">
                                {newsItem.date}
                            </Text>
                        </div>

                        <div className="news-image-container">
                            <img 
                                src={newsItem.image} 
                                alt={newsItem.title}
                                className="news-image"
                            />
                        </div>

                        <div className="news-content">
                            {newsItem.fullContent.split('\n\n').map((paragraph, index) => (
                                <Paragraph key={index} className="news-paragraph">
                                    {paragraph}
                                </Paragraph>
                            ))}
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={6} lg={6} xl={5}>
                    <RightSidebar />
                </Col>
            </Row>
        </div>
    );
}; 