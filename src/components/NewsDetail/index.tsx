import { Typography, Card, Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { newsData, NewsItem } from '../NewsList/newsData';
import { LeftSidebar } from '../LeftSidebar';
import { RightSidebar } from '../RightSidebar';

const { Title, Text, Paragraph } = Typography;

export const NewsDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const newsItem = newsData.find((news: NewsItem) => news.id === parseInt(id || '0'));

    if (!newsItem) {
        return (
            <div style={{ padding: '24px', background: '#f0f2f5', minHeight: '100vh' }}>
                <Title level={2}>Новость не найдена</Title>
            </div>
        );
    }

    return (
        <div style={{ padding: '24px', background: '#f0f2f5', minHeight: '100vh' }}>
            <Row gutter={24}>
                <Col xs={24} sm={24} md={6} lg={6} xl={5}>
                    <LeftSidebar />
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} xl={14}>
                    <Card style={{ marginBottom: 24 }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #4CAF50, #45a049)',
                                color: 'white',
                                padding: '16px 24px',
                                borderRadius: '50px',
                                marginRight: 16,
                                fontSize: 20,
                                fontWeight: 'bold'
                            }}>
                                S
                            </div>
                            <Title level={2} style={{ margin: 0, flex: 1 }}>
                                {newsItem.title}
                            </Title>
                        </div>
                        
                        <div style={{ marginBottom: 16 }}>
                            <Text type="secondary">
                                by {newsItem.author} • {newsItem.date}
                            </Text>
                        </div>

                        <div style={{ marginBottom: 24 }}>
                            <img 
                                src={newsItem.image} 
                                alt={newsItem.title}
                                style={{ 
                                    width: '100%', 
                                    height: 300, 
                                    objectFit: 'cover', 
                                    borderRadius: 8 
                                }}
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = 'https://via.placeholder.com/800x300/4a5568/ffffff?text=News+Image';
                                }}
                            />
                        </div>

                        <div style={{ fontSize: 16, lineHeight: 1.6 }}>
                            {newsItem.fullContent.split('\n\n').map((paragraph, index) => (
                                <Paragraph key={index} style={{ marginBottom: 16 }}>
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