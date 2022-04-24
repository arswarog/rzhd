/**
 * @typedef {Object} Station
 * @property {number} id ID
 * @property {string} name Название станции
 */

/**
 * @typedef {Object} Route
 * @property {number} id ID
 * @property {string} name Номер маршрута
 * @property {number[]} stations Индентификаторы станций 
 */

let _stationIds = 1
/**
 * Создание станции
 * @param {string} name Передаем название станции
 * @returns Station
 */
function createStation(name) {
    if (!name)
        throw new Error('Станция не может иметь пустое название')
    return {
        id: _stationIds++,
        name,
    }
}

let _routeIds = 1
/**
 * Создание марштура
 * @param {string} name 
 * @param {number[]} stations 
 * @returns Route
 */
function createRoute(name, stations) {
    // проверка данных маршрута
    return {
        id: _routeIds++,
        name,
        stations: [...stations],
    }
}

/**
 * Поиск маршрута
 * @param {number} from ID станции отправления
 * @param {number} to ID станции прибытия
 * @returns Route
 */
function findRoute(from, to) {


    return allRoutes.filter(route => {

    })
}







function printRoute(route) {

}