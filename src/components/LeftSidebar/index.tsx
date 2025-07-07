import { StarOutlined, TrophyOutlined } from '@ant-design/icons';
import { Button, Card, List, Typography } from 'antd';

const { Title, Text } = Typography;

export const LeftSidebar: React.FC = () => {
    const ratingData = [
        { id: 1, name: 'Vitality', logo: `${process.env.PUBLIC_URL}/Vitality.png`, position: 1 },
        { id: 2, name: 'Spirit', logo: `${process.env.PUBLIC_URL}/team-spirit-seeklogo.png`, position: 2 },
        { id: 3, name: 'FaZe', logo: `${process.env.PUBLIC_URL}/faze-clan-seeklogo.png`, position: 3 },
        { id: 4, name: 'MOUZ', logo: `${process.env.PUBLIC_URL}/Mouz.png`, position: 4 },
        { id: 5, name: 'G2', logo: `${process.env.PUBLIC_URL}/G2.png`, position: 5 },
    ];

    const playerOfWeek = {
        name: 'Donk',
        country: '🇷🇺',
        team: 'Данила Крышанова',
        rating: '1.41',
        image: `${process.env.PUBLIC_URL}/donk.png`
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
                    background: 'linear-gradient(135deg, rgba(74, 85, 104, 0.4), rgba(45, 55, 72, 0.4))', 
                    border: 'none',
                    borderRadius: '8px 8px 0 0'
                }}
                bodyStyle={{ padding: 0 }}
                style={{ 
                    background: 'rgba(45, 55, 72, 0.3)',
                    border: 'none',
                    borderRadius: 8
                }}
            >
                <div style={{ padding: '12px 16px', background: 'rgba(26, 32, 44, 0.7)', borderRadius: '0 0 8px 8px' }}>
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
                                    <div style={{ marginLeft: 8, width: 20, height: 20, flexShrink: 0 }}>
                                        <img 
                                            src={item.logo}
                                            alt={item.name}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'contain'
                                            }}
                                        />
                                    </div>
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
                    background: 'linear-gradient(135deg, rgba(74, 85, 104, 0.4), rgba(45, 55, 72, 0.4))', 
                    border: 'none',
                    borderRadius: '8px 8px 0 0'
                }}
                style={{ 
                    background: 'rgba(45, 55, 72, 0.3)',
                    border: 'none',
                    borderRadius: 8
                }}
                bodyStyle={{ 
                    background: 'rgba(26, 32, 44, 0.3)', 
                    borderRadius: '0 0 8px 8px',
                    textAlign: 'center'
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginBottom: 12,
                        flexShrink: 0
                    }}>
                        <img
                            src={playerOfWeek.image}
                            alt={playerOfWeek.name}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block'
                            }}
                        />
                    </div>
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