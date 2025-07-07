import { Card, Col, List, Pagination, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import * as NewsDataModule from './newsData';

const { newsData } = NewsDataModule;
type NewsItem = NewsDataModule.NewsItem;

const { Text } = Typography;

export const NewsList: React.FC = () => {
    const navigate = useNavigate();

    const handleNewsClick = (newsId: number) => {
        navigate(`/news/${newsId}`);
    };

    const topNews = newsData.slice(0, 3);
    const restNews = newsData.slice(3);

    return (
        <div>
            {/* Первые 3 новости как блоки */}
            <div style={{ marginBottom: 24 }}>
                {/* Главная новость - большая сверху */}
                <div style={{ marginBottom: 16, paddingLeft: 8, paddingRight: 8 }}>
                    <Card
                        hoverable
                        cover={
                            <div style={{ 
                                position: 'relative',
                                height: 300,
                                overflow: 'hidden'
                            }}>
                                <img
                                    alt="main news"
                                    src={topNews[0].image}
                                    style={{ 
                                        height: 300, 
                                        width: '100%',
                                        objectFit: 'cover',
                                        display: 'block'
                                    }}
                                />
                                <div style={{ 
                                    position: 'absolute', 
                                    bottom: 15, 
                                    left: 15, 
                                    background: 'rgba(0,0,0,0.8)', 
                                    color: 'white', 
                                    padding: '12px 20px', 
                                    borderRadius: 6,
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    maxWidth: 'calc(100% - 30px)'
                                }}>
                                    {topNews[0].title}
                                </div>
                            </div>
                        }
                        onClick={() => handleNewsClick(topNews[0].id)}
                        bodyStyle={{ padding: 0 }}
                    />
                </div>

                {/* Вторая и третья новости рядом */}
                <Row gutter={16}>
                    {topNews.slice(1).map((news: NewsItem, index: number) => (
                        <Col 
                            xs={24} 
                            sm={12} 
                            key={news.id}
                            style={{ 
                                paddingLeft: index === 0 ? 8 : 8,
                                paddingRight: index === 1 ? 8 : 8
                            }}
                        >
                            <Card
                                hoverable
                                cover={
                                    <div style={{ 
                                        position: 'relative',
                                        height: 200,
                                        overflow: 'hidden'
                                    }}>
                                        <img
                                            alt={news.title}
                                            src={news.image}
                                            style={{ 
                                                height: 200, 
                                                width: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                        <div style={{ 
                                            position: 'absolute', 
                                            bottom: 10, 
                                            left: 10, 
                                            background: 'rgba(0,0,0,0.8)', 
                                            color: 'white', 
                                            padding: '8px 14px', 
                                            borderRadius: 4,
                                            fontSize: 14,
                                            fontWeight: 'bold',
                                            maxWidth: 'calc(100% - 20px)'
                                        }}>
                                            {news.title.length > 40 ? `${news.title.substring(0, 40)}...` : news.title}
                                        </div>
                                    </div>
                                }
                                onClick={() => handleNewsClick(news.id)}
                                bodyStyle={{ padding: 0 }}
                            />
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Остальные новости как список */}
            <Card 
                style={{ 
                    background: '#2d3748',
                    border: 'none',
                    borderRadius: 8
                }}
                bodyStyle={{ 
                    background: '#1a202c', 
                    borderRadius: 8,
                    padding: 0
                }}
            >
                <List
                    dataSource={restNews}
                    renderItem={(news: NewsItem) => (
                        <List.Item
                            style={{
                                padding: '16px 20px',
                                borderBottom: '1px solid #2d3748',
                                cursor: 'pointer',
                                transition: 'background-color 0.2s'
                            }}
                            onClick={() => handleNewsClick(news.id)}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#2d3748';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <List.Item.Meta
                                avatar={
                                    <div style={{ 
                                        width: 80, 
                                        height: 60, 
                                        borderRadius: 4, 
                                        overflow: 'hidden',
                                        flexShrink: 0
                                    }}>
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                display: 'block'
                                            }}
                                        />
                                    </div>
                                }
                                title={
                                    <Text strong style={{ color: '#ffffff', fontSize: 14 }}>
                                        {news.title}
                                    </Text>
                                }
                                description={
                                    <div>
                                        <Text style={{ color: '#a0aec0', fontSize: 12 }}>
                                            {news.content}
                                        </Text>
                                        <br />
                                        <Text style={{ color: '#718096', fontSize: 11 }}>
                                            {news.source} • {news.date}
                                        </Text>
                                    </div>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Card>

            <div style={{ textAlign: 'center', marginTop: 24 }}>
                <Pagination
                    current={1}
                    total={50}
                    pageSize={10}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
}; 