import { Card, Typography, List, Avatar, Button, Progress } from 'antd';
import { TrophyOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

export const LeftSidebar: React.FC = () => {
    const ratingData = [
        { id: 1, name: 'Vitality', logo: '🏆', position: 1 },
        { id: 2, name: 'Spirit', logo: '⚡', position: 2 },
        { id: 3, name: 'FaZe', logo: '🔥', position: 3 },
        { id: 4, name: 'MOUZ', logo: '❤️', position: 4 },
        { id: 5, name: 'G2', logo: '⭐', position: 5 },
    ];

    const playerOfWeek = {
        name: 'Donk',
        country: '🇷🇺',
        team: 'Данила Крышанова',
        rating: '1.41',
        image: 'https://img-cdn.hltv.org/playerbodyshot/17081.png?ixlib=java-2.1.0&w=200&s=e8c8e8c8e8c8e8c8e8c8e8c8e8c8e8c8'
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Мировой рейтинг */}
            <Card
                title={
                    <div style={{ color: '#ffffff' }}>
                        <TrophyOutlined style={{ marginRight: 8 }} />
                        Мировой рейтинг
                    </div>
                }
                headStyle={{ 
                    background: 'linear-gradient(135deg, #4a5568, #2d3748)', 
                    border: 'none',
                    borderRadius: '8px 8px 0 0'
                }}
                bodyStyle={{ padding: 0 }}
                style={{ 
                    background: '#2d3748',
                    border: 'none',
                    borderRadius: 8
                }}
            >
                <div style={{ padding: '12px 16px', background: '#1a202c', borderRadius: '0 0 8px 8px' }}>
                    <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
                        <Button 
                            type="primary" 
                            size="small"
                            style={{ background: '#4a5568', border: 'none' }}
                        >
                            HLTV
                        </Button>
                        <Button 
                            size="small"
                            style={{ background: 'transparent', color: '#a0aec0', border: '1px solid #4a5568' }}
                        >
                            Valve
                        </Button>
                    </div>
                    
                    <List
                        dataSource={ratingData}
                        renderItem={(item) => (
                            <List.Item style={{ 
                                padding: '8px 0', 
                                border: 'none',
                                color: '#ffffff'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Text style={{ color: '#a0aec0', width: 20 }}>{item.position}</Text>
                                    <Text style={{ marginLeft: 8, color: '#ffffff' }}>{item.logo}</Text>
                                    <Text style={{ marginLeft: 8, color: '#ffffff' }}>{item.name}</Text>
                                </div>
                            </List.Item>
                        )}
                    />
                </div>
            </Card>

            {/* Игрок недели */}
            <Card
                title={
                    <div style={{ color: '#ffffff' }}>
                        <StarOutlined style={{ marginRight: 8 }} />
                        Игрок недели
                    </div>
                }
                headStyle={{ 
                    background: 'linear-gradient(135deg, #4a5568, #2d3748)', 
                    border: 'none',
                    borderRadius: '8px 8px 0 0'
                }}
                style={{ 
                    background: '#2d3748',
                    border: 'none',
                    borderRadius: 8
                }}
                bodyStyle={{ 
                    background: '#1a202c', 
                    borderRadius: '0 0 8px 8px',
                    textAlign: 'center'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Avatar 
                        size={80} 
                        src={playerOfWeek.image}
                        style={{ marginBottom: 12 }}
                    />
                    <Title level={4} style={{ color: '#ffffff', margin: 0 }}>
                        {playerOfWeek.name}
                    </Title>
                    <Text style={{ color: '#a0aec0', display: 'block', marginBottom: 4 }}>
                        {playerOfWeek.country} {playerOfWeek.team}
                    </Text>
                    <div style={{ 
                        background: '#4a5568', 
                        padding: '4px 12px', 
                        borderRadius: 12,
                        marginTop: 8
                    }}>
                        <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>
                            {playerOfWeek.rating}
                        </Text>
                    </div>
                    <Text style={{ color: '#a0aec0', fontSize: 12, marginTop: 4 }}>
                        rating 2.1
                    </Text>
                </div>
            </Card>
        </div>
    );
}; 