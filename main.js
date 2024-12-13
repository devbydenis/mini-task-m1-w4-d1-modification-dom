// Nomor - 1
const container = document.querySelector('.container')
const newElement = document.createElement('p')
newElement.innerHTML = 'elemen baru'
container.appendChild(newElement)

// Nomor - 2
newElement.textContent = 'elemen baru versi 2'

// Nomor - 3
newElement.style.backgroundColor = 'lightgreen'

// Nomor - 4
const numberOfList = 5
const ul = document.createElement('ul')
container.appendChild(ul)
const arrayList = []

for (let i = 1; i <= numberOfList; i++) {
    const li = document.createElement('li')
    li.textContent = `elemen ke ${i}`
    arrayList.push(li)
}

ul.append(...arrayList)

// Nomor - 5
const div = document.createElement('div')
const h1 = document.createElement('h1')
const p = document.createElement('p')
container.appendChild(div)
div.appendChild(h1)
div.appendChild(p)

// Nomor - 6
div.removeChild(h1)
div.removeChild(p)

div.insertAdjacentElement('afterbegin', h1)
div.insertAdjacentElement('afterbegin', p)
