import { Card, Typography, Calendar, Badge, Select } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import type { CalendarProps } from 'antd';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';

const { Title, Text } = Typography;
const { Option } = Select;

dayjs.locale('ru');

export const RightSidebar: React.FC = () => {
    const getListData = (value: Dayjs) => {
        let listData: { type: string; content: string }[] = [];
        
        // Добавляем некоторые события для примера
        const day = value.date();
        if (day === 2) {
            listData = [
                { type: 'warning', content: 'Falcons подписали kyousuke' },
            ];
        } else if (day === 5) {
            listData = [
                { type: 'success', content: 'Wildcard изменения' },
                { type: 'error', content: 'Virtus.Pro новости' },
            ];
        }
        
        return listData;
    };

    const getMonthData = (value: Dayjs) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events" style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                {listData.map((item, index) => (
                    <li key={index}>
                        <Badge 
                            status={item.type as any} 
                            text={
                                <Text style={{ fontSize: 10, color: '#666' }}>
                                    {item.content.length > 15 ? `${item.content.substring(0, 15)}...` : item.content}
                                </Text>
                            } 
                        />
                    </li>
                ))}
            </ul>
        );
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
        if (info.type === 'date') return dateCellRender(current);
        if (info.type === 'month') return monthCellRender(current);
        return info.originNode;
    };

    return (
        <div>
            <Card
                title={
                    <div style={{ color: '#ffffff' }}>
                        <CalendarOutlined style={{ marginRight: 8 }} />
                        Новости по дате
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
                    padding: 16
                }}
            >
                <div style={{ marginBottom: 16 }}>
                    <Select 
                        defaultValue="2025" 
                        style={{ width: 80, marginRight: 8 }}
                        size="small"
                    >
                        <Option value="2025">2025</Option>
                        <Option value="2024">2024</Option>
                    </Select>
                    <Select 
                        defaultValue="Июль" 
                        style={{ width: 100 }}
                        size="small"
                    >
                        <Option value="Январь">Январь</Option>
                        <Option value="Февраль">Февраль</Option>
                        <Option value="Март">Март</Option>
                        <Option value="Апрель">Апрель</Option>
                        <Option value="Май">Май</Option>
                        <Option value="Июнь">Июнь</Option>
                        <Option value="Июль">Июль</Option>
                        <Option value="Август">Август</Option>
                        <Option value="Сентябрь">Сентябрь</Option>
                        <Option value="Октябрь">Октябрь</Option>
                        <Option value="Ноябрь">Ноябрь</Option>
                        <Option value="Декабрь">Декабрь</Option>
                    </Select>
                    <button 
                        style={{ 
                            marginLeft: 8, 
                            background: '#4a5568', 
                            color: '#ffffff', 
                            border: 'none', 
                            padding: '2px 8px', 
                            borderRadius: 4,
                            fontSize: 12
                        }}
                    >
                        Год
                    </button>
                </div>

                {/* Календарная сетка */}
                <div style={{ background: '#2d3748', borderRadius: 4, padding: 8 }}>
                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(7, 1fr)', 
                        gap: 4,
                        textAlign: 'center'
                    }}>
                        {/* Заголовки дней недели */}
                        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map(day => (
                            <div key={day} style={{ 
                                color: '#a0aec0', 
                                fontSize: 12, 
                                fontWeight: 'bold',
                                padding: 4
                            }}>
                                {day}
                            </div>
                        ))}
                        
                        {/* Пустые ячейки для начала месяца */}
                        {Array.from({ length: 4 }, (_, i) => (
                            <div key={`empty-${i}`} />
                        ))}
                        
                        {/* Дни месяца */}
                        {Array.from({ length: 31 }, (_, i) => {
                            const day = i + 1;
                            const isToday = day === 2; // Выделяем 2 число как сегодня
                            const hasNews = [2, 5, 7, 10, 15].includes(day);
                            
                            return (
                                <div 
                                    key={day} 
                                    style={{ 
                                        color: isToday ? '#ffffff' : '#a0aec0',
                                        background: isToday ? '#4a5568' : hasNews ? '#2a4365' : 'transparent',
                                        padding: '4px 2px',
                                        borderRadius: 2,
                                        fontSize: 12,
                                        cursor: hasNews ? 'pointer' : 'default',
                                        border: isToday ? '1px solid #63b3ed' : 'none'
                                    }}
                                >
                                    {day}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Card>
        </div>
    );
}; 