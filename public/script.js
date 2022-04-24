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



function displayStations(stations) {
    const listEl = document.getElementById('station-list')
    const template = document.getElementById('station-list-item')

    Array.from(listEl.getElementsByTagName('li')).forEach(el => el.remove())

    stations.forEach(station => {
        const el = template.content.cloneNode(true)

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

        fillTemplate(el, route);

        listEl.appendChild(el);
    })
}

function fillTemplate(element, data) {
    const source = element.dataset && element.dataset.source

    if (source) {
        console.log(element, source)
        const text = data[source]
        element.innerHTML = text
    }

    Array.from(element.children).forEach(el => fillTemplate(el, data))
}

displayStations(allStations);
displayRoutes(allRoutes);
