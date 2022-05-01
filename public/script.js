console.log(allStations)

function printNode(node, depth = 0) {
    console.log('  '.repeat(depth) + node.nodeType + ' ' + node.nodeName)

    Array.from(node.childNodes).forEach(child => printNode(child, depth + 1))
}


const el = document.createElement('h3')
el.innerHTML = 'asdasdsadasd'

document.body.appendChild(el)

const dataList = [
    'asdasdsad',
    'retret',
    'wefjfg',
]

const ul = document.createElement('ul')
document.body.appendChild(ul);

dataList.forEach(data => {
    const li = document.createElement('li')
    ul.appendChild(li)

    const text = document.createTextNode(data)
    li.appendChild(text)
})


/**
 * 
 * @param {Station[]} stations 
 */
function displayStations(stations) {
    const listEl = document.getElementById('station-list')
    const template = document.getElementById('station-list-item')

    Array.from(listEl.getElementsByTagName('li')).forEach(el => el.remove())

    stations.forEach(station => {
        const el = template.content.cloneNode(true)
        const li = el.querySelector('li');
        li.dataset.stationId = station.id

        fillTemplate(el, station);

        listEl.appendChild(el);
    })
}

function displayRoutes(routes) {
    const listEl = document.getElementById('route-list')
    const template = document.getElementById('route-list-item')

    Array.from(listEl.getElementsByTagName('li')).forEach(el => el.remove())

    routes.forEach(route => {
        const el = template.content.cloneNode(true)
        const li = el.querySelector('li');
        li.dataset.routeId = route.id

        fillTemplate(el, route);

        listEl.appendChild(el);
    })
}

function fillTemplate(element, data) {
    const source = element.dataset && element.dataset.source

    if (source) {
        const text = data[source]
        element.innerHTML = text
    }

    Array.from(element.children).forEach(el => fillTemplate(el, data))
}

displayStations(allStations);
displayRoutes(allRoutes);

function findStationById(stations) {
    return (stationId) => {
        return allStations.find(station => station.id === stationId)
    }
}

const routeList = document.getElementById('route-list')
routeList.addEventListener('click', (event) => {
    const li = event.composedPath().find(el => el.dataset && el.dataset.routeId);
    if (!li) {
        return
    }

    const routeId = +li.dataset.routeId

    const route = allRoutes.find(item => item.id === routeId)

    const stations = route.stations.map(findStationById(allStations))

    console.log(stations)

    displayStations(stations)
})

const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const src = form.elements.src.value
    const dst = form.elements.dst.value

    console.log(src, dst)
})