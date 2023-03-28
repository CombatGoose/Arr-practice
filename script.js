/*const arr = [];

let numberOfArr = prompt("Введіть кількість чисел в масиві")

parseFloat(numberOfArr)

for (let j = 0; j < numberOfArr; j++) {
    arr.push(Math.floor(Math.random() * (100 - 1) + 1 ))
}

alert(arr)

let sum = 0

for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

let result = sum / arr.length

alert(result)*/

const arr = []

let numberOfArr = prompt("Введіть кількість чисел в масиві")

parseFloat(numberOfArr)

for (let i = 0; i < numberOfArr; i++) {
    arr.push(Math.floor(Math.random() * (100 - 1) + 1 ))
}

alert(arr)

let maxElement = arr[0]

for(let j = 0; j < arr.length; j++) {
    if(arr[j] > maxElement) {
        maxElement = arr[j]
    }
}

alert(maxElement)