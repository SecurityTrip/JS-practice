import './NewsList.css';

import { Card, Col, List, Pagination, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import { newsData, NewsItem } from './newsData';

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
            <div className="news-list-container">
                {/* Главная новость - большая сверху */}
                <Row gutter={16}>
                    <Col span={24} className="main-news-container">
                        <Card
                            hoverable
                            cover={
                                <div className="main-news-image-container">
                                    <img
                                        alt="main news"
                                        src={topNews[0].image}
                                        className="main-news-image"
                                        style={{ borderRadius: '20px' }}
                                    />
                                    <div className="main-news-overlay">
                                        {topNews[0].title}
                                    </div>
                                </div>
                            }
                            onClick={() => handleNewsClick(topNews[0].id)}
                            bodyStyle={{ padding: 0, backgroundColor: 'transparent' }}
                            className="main-news-card"
                        />
                    </Col>
                </Row>

                {/* Вторая и третья новости рядом */}
                <Row gutter={16}>
                    {topNews.slice(1).map((news: NewsItem) => (
                        <Col 
                            xs={24} 
                            sm={12} 
                            key={news.id}
                            className="side-news-container"
                        >
                            <Card
                                hoverable
                                cover={
                                    <div className="side-news-image-container">
                                        <img
                                            alt={news.title}
                                            src={news.image}
                                            className="side-news-image"
                                        />
                                    </div>
                                }
                                onClick={() => handleNewsClick(news.id)}
                                bodyStyle={{ 
                                    padding: '16px', 
                                    backgroundColor: 'rgba(26, 32, 44, 0.4)' 
                                }}
                                className="side-news-card"
                            >
                                <div className="side-news-body">
                                    <Text className="side-news-title">
                                        {news.title}
                                    </Text>
                                    <Text className="side-news-content">
                                        {news.content}
                                    </Text>
                                    <Text className="side-news-meta">
                                        {news.author} • {news.date}
                                    </Text>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Остальные новости как список */}
            <Card
                className="news-list-card"
                bodyStyle={{ 
                    background: 'rgba(26, 32, 44, 0.4)', 
                    borderRadius: 8,
                    padding: 0
                }}
            >
                <List
                    dataSource={restNews}
                    renderItem={(news: NewsItem) => (
                        <List.Item
                            className="news-list-item"
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
                                    <div className="news-list-avatar">
                                        <img
                                            src={news.image}
                                            alt={news.title}
                                            className="news-list-avatar-image"
                                        />
                                    </div>
                                }
                                title={
                                    <Text className="news-list-title">
                                        {news.title}
                                    </Text>
                                }
                                description={
                                    <div>
                                        <Text className="news-list-description">
                                            {news.content}
                                        </Text>
                                        <br />
                                        <Text className="news-list-source">
                                            {news.source} • {news.date}
                                        </Text>
                                    </div>
                                }
                            />
                        </List.Item>
                    )}
                />
            </Card>

            <div className="pagination-container">
                <div className="news-pagination">
                    <Pagination
                        current={1}
                        total={50}
                        pageSize={10}
                        showSizeChanger={false}
                    />
                </div>
            </div>
        </div>
    );
}; 