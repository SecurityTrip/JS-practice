export interface NewsItem {
    id: number;
    title: string;
    content: string;
    image: string;
    source: string;
    author: string;
    date: string;
    fullContent: string;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: "Falcons подписали kyousuke",
        content: "Falcons подписали kyousuke",
        image: `${process.env.PUBLIC_URL}/News1.png`,
        source: "Overdrive",
        author: "Yura",
        date: "02.07.2025 17:12",
        fullContent: `Состав Falcons пополнил 17-летний Максим «kyousuke» Лукин из Spirit. Он займет место Эмиля «Magisk» Райфа, которого недавно отправили в запас.

Юный рифлер демонстрировал впечатляющий средний рейтинг 1.29 в составе Spirit Academy на вершине второго эшелона. Он помог молодежному составу подняться до 32-го места в рейтинге HLTV и 25-го в рейтинге VRS, а также добиться ряда значимых побед команда выиграла несколько турниров CCT и LAN-турниров BetBoom LanDiaLan 1 и 2.

Результаты kyousuke принесли ему признание не только в комьюнити, но и среди профессиональных игроков. Шестеро из топ-20 игроков 2024 года по версии HLTV включили его в свой «Bold Prediction» (смелый прогноз), в том числе Matrix «ZywOo» Эрбен и Илья «m0NESY» Осипов.

Когда несколько месяцев назад впервые появились слухи о переходе kyousuke, это вызвало удивление в комьюнити. Казалось очевидным, что восходящая звезда рано или поздно должна была перейти в основной состав Spirit. Однако, участвовая переселение рейсов с Данилом «donk» Крышановым и собственное заявление игрока о желании выйти на первый эшелон «к концу года», он оказался во Falcons.

Основной состав Falcons:

Никола "NiKo" Ковач
Данил "kyousuke" Стойковски
Рене "TeSeS" Максен
Илья "m0NESY" Осипов
Максим "kyousuke" Лукин (Новичок)

Тренерский штаб:
Данил "zonic" Сёренсен (Главный тренер)

В запасе:
Абдул "degster" Гасанов (в запасе)
Эмиль "Magisk" Райф (в запасе)`
    },
    {
        id: 2,
        title: "Официально: Wildcard посадили phzy и stanislaw на скамейку запасных",
        content: "Официально: Wildcard посадили phzy и stanislaw на скамейку запасных",
        image: `${process.env.PUBLIC_URL}/News2.png`,
        source: "Overdrive",
        author: "Staff",
        date: "05 июня, 2025",
        fullContent: "Полный текст новости о Wildcard и изменениях в составе команды..."
    },
    {
        id: 3,
        title: "Virtus.Pro посадили FLAMUS на скамейку запасных",
        content: "Virtus.Pro посадили FLAMUS на скамейку запасных",
        image: `${process.env.PUBLIC_URL}/News3.png`,
        source: "Overdrive",
        author: "Staff",
        date: "05 июня, 2025",
        fullContent: "Полный текст новости о Virtus.Pro и изменениях в составе команды..."
    },
    {
        id: 4,
        title: "Hades покидает Monte",
        content: "Польский снайпер покидает организацию после возвращения из G2",
        image: `${process.env.PUBLIC_URL}/News4.png`,
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Hades и его уходе из Monte..."
    },
    {
        id: 5,
        title: "Alliance объявляют о возможности бесплатного трансфера",
        content: "19-летний снайпер покинет Riserdo в основном составе",
        image: `${process.env.PUBLIC_URL}/News5.png`,
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Alliance и трансферных возможностях..."
    },
    {
        id: 6,
        title: "Navi анонсировали подписание makazze",
        content: "NAVI взяли перспективного игрока академии в основной состав",
        image: `${process.env.PUBLIC_URL}/News6.png`,
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Navi и подписании makazze..."
    },
    {
        id: 7,
        title: "Hasrt0: Envy уже присматриваются к потенциальным составам CS2",
        content: "Основатель Envy хочет \"захватить наследие\"",
        image: `${process.env.PUBLIC_URL}/News7.png`,
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о планах Envy в CS2..."
    },
    {
        id: 8,
        title: "Heroic подписали TOBIZ на место тренера",
        content: "Бывший тренер MOUZ №1 возглавил один из проектов в рядах HEROIC",
        image: `${process.env.PUBLIC_URL}/News8.png`,
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Heroic и новом тренере..."
    },
    {
        id: 9,
        title: "maxster вступил в EYEBALLERS",
        content: "Шведо командовать им поскольку после двухнедельного перерыва",
        image: `${process.env.PUBLIC_URL}/News9.png`,
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о maxster и EYEBALLERS..."
    },
    {
        id: 10,
        title: "BAD NEWS EAGLES собираются расстаться",
        content: "Команда объявит о расформировании после ECF",
        image: `${process.env.PUBLIC_URL}/News10.png`,
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о расформировании BAD NEWS EAGLES..."
    }
]; 