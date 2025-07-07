import { CalendarOutlined } from '@ant-design/icons';
import { Card, Select } from 'antd';
import { useEffect, useState } from 'react';

const { Option } = Select;

export const RightSidebar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [today, setToday] = useState({ day: 0, month: 0, year: 0 });

    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    useEffect(() => {
        // Получаем текущую дату при загрузке компонента
        const now = new Date();
        setCurrentDate(now);
        
        // Устанавливаем сегодняшнюю дату
        setToday({
            day: now.getDate(),
            month: now.getMonth(),
            year: now.getFullYear()
        });

        // Устанавливаем текущий месяц и год в селекторы
        setSelectedYear(now.getFullYear().toString());
        setSelectedMonth(months[now.getMonth()]);
    }, []);

    // Функция для получения количества дней в месяце
    const getDaysInMonth = (year: number, month: number) => {
        return new Date(year, month + 1, 0).getDate();
    };

    // Функция для получения дня недели первого числа месяца (0 = воскресенье, 1 = понедельник, ...)
    const getFirstDayOfMonth = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1).getDay();
        return firstDay === 0 ? 6 : firstDay - 1; // Преобразуем чтобы понедельник был 0
    };

    const currentYear = parseInt(selectedYear) || today.year;
    const currentMonthIndex = months.indexOf(selectedMonth);
    const daysInMonth = getDaysInMonth(currentYear, currentMonthIndex);
    const firstDayOfWeek = getFirstDayOfMonth(currentYear, currentMonthIndex);

    const handleGoToToday = () => {
        const now = new Date();
        setSelectedYear(now.getFullYear().toString());
        setSelectedMonth(months[now.getMonth()]);
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
                    padding: 16
                }}
            >
                <div style={{ marginBottom: 16 }}>
                    <Select 
                        value={selectedYear}
                        onChange={setSelectedYear}
                        style={{ width: 80, marginRight: 8 }}
                        size="small"
                    >
                        {Array.from({ length: 10 }, (_, i) => today.year - 5 + i).map(year => (
                            <Option key={year} value={year.toString()}>{year}</Option>
                        ))}
                    </Select>
                    <Select 
                        value={selectedMonth}
                        onChange={setSelectedMonth}
                        style={{ width: 100 }}
                        size="small"
                    >
                        {months.map(month => (
                            <Option key={month} value={month}>{month}</Option>
                        ))}
                    </Select>
                    <button 
                        onClick={handleGoToToday}
                        style={{ 
                            marginLeft: 8, 
                            background: '#4a5568', 
                            color: '#ffffff', 
                            border: 'none', 
                            padding: '2px 8px', 
                            borderRadius: 4,
                            fontSize: 12,
                            cursor: 'pointer'
                        }}
                    >
                        Сегодня
                    </button>
                </div>

                {/* Текущая дата */}
                <div style={{ 
                    marginBottom: 12, 
                    padding: '8px 12px', 
                    background: 'rgba(74, 85, 104, 0.6)', 
                    borderRadius: 4,
                    textAlign: 'center'
                }}>
                    <div style={{ color: '#ffffff', fontSize: 14, fontWeight: 'bold' }}>
                        {today.day} {months[today.month]} {today.year}
                    </div>
                    <div style={{ color: '#a0aec0', fontSize: 12 }}>
                        {['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'][currentDate.getDay()]}
                    </div>
                </div>

                {/* Календарная сетка */}
                <div style={{ background: 'rgba(45, 55, 72, 0.7)', borderRadius: 4, padding: 8 }}>
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
                        {Array.from({ length: firstDayOfWeek }, (_, i) => (
                            <div key={`empty-${i}`} />
                        ))}
                        
                        {/* Дни месяца */}
                        {Array.from({ length: daysInMonth }, (_, i) => {
                            const day = i + 1;
                            const isToday = day === today.day && 
                                           currentMonthIndex === today.month && 
                                           currentYear === today.year;
                            const hasNews = [2, 5, 7, 10, 15].includes(day);
                            
                            return (
                                <div 
                                    key={day} 
                                    style={{ 
                                        color: isToday ? '#ffffff' : '#a0aec0',
                                        background: isToday ? '#4a5568' : (hasNews ? '#2a4365' : 'transparent'),
                                        padding: '4px 2px',
                                        borderRadius: 2,
                                        fontSize: 12,
                                        cursor: hasNews ? 'pointer' : 'default',
                                        border: isToday ? '2px solid #63b3ed' : 'none',
                                        fontWeight: isToday ? 'bold' : 'normal'
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