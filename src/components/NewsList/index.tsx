import { Card, Typography, Row, Col, Pagination } from 'antd';
import { useNavigate } from 'react-router-dom';
import { newsData, NewsItem } from './newsData';

const { Title, Text } = Typography;

export const NewsList: React.FC = () => {
    const navigate = useNavigate();

    const handleNewsClick = (newsId: number) => {
        navigate(`/news/${newsId}`);
    };

    return (
        <div>
            <Row gutter={[16, 16]}>
                {/* Главная новость */}
                <Col span={24}>
                    <Card
                        hoverable
                        cover={
                            <img
                                alt="main news"
                                src={newsData[0].image}
                                style={{ height: 200, objectFit: 'cover' }}
                            />
                        }
                        onClick={() => handleNewsClick(newsData[0].id)}
                        style={{ marginBottom: 16 }}
                    >
                        <div style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 8px', borderRadius: 4 }}>
                            {newsData[0].title}
                        </div>
                    </Card>
                </Col>

                {/* Остальные новости */}
                {newsData.slice(1).map((news: NewsItem) => (
                    <Col xs={24} sm={12} key={news.id}>
                        <Card
                            hoverable
                            cover={
                                <img
                                    alt={news.title}
                                    src={news.image}
                                    style={{ height: 150, objectFit: 'cover' }}
                                />
                            }
                            onClick={() => handleNewsClick(news.id)}
                        >
                            <Card.Meta
                                title={
                                    <Text strong style={{ fontSize: 14 }}>
                                        {news.title}
                                    </Text>
                                }
                                description={
                                    <div>
                                        <Text type="secondary">{news.source}</Text>
                                        <br />
                                        <Text type="secondary">{news.date}</Text>
                                    </div>
                                }
                            />
                        </Card>
                    </Col>
                ))}
            </Row>

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