const randomNumbers = [20, 4, 85, 9, 6, 55, 84, 15, 74, 8]

for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        console.log(randomNumbers[i])
    }
}

const rainbow = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый']

for (let i = rainbow.length - 1; i >= 0; i--) {
    console.log(rainbow[i])
}