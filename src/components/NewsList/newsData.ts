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
        image: "https://img-cdn.hltv.org/gallery/16758.jpg?ixlib=java-2.1.0&s=b5e5b3c8e4c8a8e8b5e5b3c8e4c8a8e8",
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
        image: "https://img-cdn.hltv.org/gallery/16757.jpg?ixlib=java-2.1.0&s=c7d7e7f7a7b7c7d7e7f7a7b7c7d7e7f7",
        source: "Overdrive",
        author: "Staff",
        date: "05 июня, 2025",
        fullContent: "Полный текст новости о Wildcard и изменениях в составе команды..."
    },
    {
        id: 3,
        title: "Virtus.Pro посадили FLAMUS на скамейку запасных",
        content: "Virtus.Pro посадили FLAMUS на скамейку запасных",
        image: "https://img-cdn.hltv.org/gallery/16756.jpg?ixlib=java-2.1.0&s=a6b6c6d6e6f6a6b6c6d6e6f6a6b6c6d6",
        source: "Overdrive",
        author: "Staff",
        date: "05 июня, 2025",
        fullContent: "Полный текст новости о Virtus.Pro и изменениях в составе команды..."
    },
    {
        id: 4,
        title: "Hades покидает Monte",
        content: "Польский снайпер покидает организацию после возвращения из G2",
        image: "https://img-cdn.hltv.org/gallery/16755.jpg?ixlib=java-2.1.0&s=b5e5b3c8e4c8a8e8b5e5b3c8e4c8a8e8",
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Hades и его уходе из Monte..."
    },
    {
        id: 5,
        title: "Alliance объявляют о возможности бесплатного трансфера",
        content: "19-летний снайпер покинет Riserdo в основном составе",
        image: "https://img-cdn.hltv.org/gallery/16754.jpg?ixlib=java-2.1.0&s=c7d7e7f7a7b7c7d7e7f7a7b7c7d7e7f7",
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Alliance и трансферных возможностях..."
    },
    {
        id: 6,
        title: "Navi анонсировали подписание makazze",
        content: "NAVI взяли перспективного игрока академии в основной состав",
        image: "https://img-cdn.hltv.org/gallery/16753.jpg?ixlib=java-2.1.0&s=a6b6c6d6e6f6a6b6c6d6e6f6a6b6c6d6",
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Navi и подписании makazze..."
    },
    {
        id: 7,
        title: "Hasrt0: Envy уже присматриваются к потенциальным составам CS2",
        content: "Основатель Envy хочет \"захватить наследие\"",
        image: "https://img-cdn.hltv.org/gallery/16752.jpg?ixlib=java-2.1.0&s=b5e5b3c8e4c8a8e8b5e5b3c8e4c8a8e8",
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о планах Envy в CS2..."
    },
    {
        id: 8,
        title: "Heroic подписали TOBIZ на место тренера",
        content: "Бывший тренер MOUZ №1 возглавил один из проектов в рядах HEROIC",
        image: "https://img-cdn.hltv.org/gallery/16751.jpg?ixlib=java-2.1.0&s=c7d7e7f7a7b7c7d7e7f7a7b7c7d7e7f7",
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о Heroic и новом тренере..."
    },
    {
        id: 9,
        title: "maxster вступил в EYEBALLERS",
        content: "Шведо командовать им поскольку после двухнедельного перерыва",
        image: "https://img-cdn.hltv.org/gallery/16750.jpg?ixlib=java-2.1.0&s=a6b6c6d6e6f6a6b6c6d6e6f6a6b6c6d6",
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о maxster и EYEBALLERS..."
    },
    {
        id: 10,
        title: "BAD NEWS EAGLES собираются расстаться",
        content: "Команда объявит о расформировании после ECF",
        image: "https://img-cdn.hltv.org/gallery/16749.jpg?ixlib=java-2.1.0&s=b5e5b3c8e4c8a8e8b5e5b3c8e4c8a8e8",
        source: "HLTV",
        author: "Staff",
        date: "4 часа назад",
        fullContent: "Полный текст новости о расформировании BAD NEWS EAGLES..."
    }
]; 