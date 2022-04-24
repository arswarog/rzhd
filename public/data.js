/**
 * @type Station[]
 */
const allStations = [
    createStation('Краснодар'),
    createStation('Кисловодск'),
    createStation('Майкоп'),
    createStation('Адлер'),
    createStation('Ростов-на-Дону'),
    createStation('Ульяновск'),
    createStation('Владивосток'),
]

/**
 * @type Route[]
 */
const allRoutes = [
    createRoute('111', [1, 3, 5, 7]),
    createRoute('112', [7, 5, 3, 1]),
    createRoute('207', [5, 1, 3]),
    createRoute('208', [3, 1, 5]),
]