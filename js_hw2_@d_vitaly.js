// 1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
//
// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
console.log('------------------1-------------------------')
const exponent = (exp) => {
    if (exp < 1) {
        console.log('Значение меньше 1 вводить нельзя!')
    } else {
        for (let i = 1; i <= exp; i++) {
            console.log(`${i} - ${2 ** i}`)
        }                                           //строки 5-7 - это задание 1 без *
    }
}
exponent(10)
exponent(0)
exponent(-2)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
//     :)
// :):)
// :):):)
// :):):):)
// :):):):):)
console.log('------------------2-------------------------')
const smile = (count) => {
    if (count < 1) {
        console.log('Значение меньше 1 вводить нельзя!')
    } else {
        for (let i = 0; i <= count; i++) {
            let sm = ':)'
            console.log(sm.repeat(i))
        }
    }
}
smile(3)
smile(0)
smile(-2)
// 2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода
// e.g. function printSmile(stroka, numberOfRows)
console.log('------------------2*-------------------------')
const repeater = (string, countOfRows) => {
    if (countOfRows < 0) {
        console.log('Количество строк меньше 0 быть не может!')
    } else {
        for (let i = 0; i <= countOfRows; i++) {
            console.log(string.toString().repeat(i))
        }
    }
}
repeater('X', 4)
repeater('2', 4)
repeater(0, 5)
repeater('X', -2)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//     e.g. function getWordStructure(word)
// В консоли:
//     Слово (word) состоит из  (число) гласных и (число) согласных букв
//
// Проверки: 'case', 'Case', 'Check-list'
console.log('------------------3**-------------------------')
const getWordStructure = (word) => {
    const letters = ['a', 'e', 'i', 'o', 'u', 'y']
    let vowelLetters = 0;
    for (let i = 0; i <= letters.length; i++) {
        let findLetter = word.toLowerCase().indexOf(letters[i], 0)
        if (findLetter != -1) {
            vowelLetters++
            let j = ++findLetter
            while (j <= word.length) {
                let newInd = word.toLowerCase().indexOf(letters[i], j)
                if (newInd != -1) {
                    vowelLetters++
                    j = newInd + 1
                } else break
            }
        }
    }
    let consonantLetters = word.replace(/[^a-zа-яё]/gi, '').length - vowelLetters
    return {word, vowelLetters, consonantLetters}
}
console.log(getWordStructure('case'))
console.log(getWordStructure('Case'))
console.log(getWordStructure('Check-list'))
console.log(getWordStructure('Caaaaat'))
console.log(getWordStructure('aeyae'))
console.log('------------------3**v2-------------------------')
const getWordStructure2 = (word) => {
    let vowels = 0
    for (let i = 0; i < word.toLowerCase().length; i++) {
        'aeiouy'.includes(word.toLowerCase()[i]) ? vowels += 1 : vowels
    }
    let notVowels = word.replace(/[^a-zа-яё]/gi, '').length - vowels
    console.log('Слово ' + word + ' состоит из ' + vowels + ' гласных и ' + notVowels + ' согласных букв')
}
getWordStructure2('case')
getWordStructure2('Case')
getWordStructure2('Check-list')
getWordStructure2('Caaaaat')
getWordStructure2('aeyae')

console.log('------------------3**v3-------------------------')
function getWordStructure3(word) {
    const countVow = word.match(/[aeiouyаеиоуыэюяё]/gi) ? word.match(/[aeiouyаеиоуыэюяё]/gi).length : 0;
    const countCons = word.match(/[bcdfghjklmnpqrstvwxzбвгджзйклмнпрстфхцчшщ]/gi) ? word.match(/[bcdfghjklmnpqrstvwxzбвгджзйклмнпрстфхцчшщ]/gi).length : 0;
    console.log(`Слово ${word} состоит из ${countVow} гласных и ${countCons} согласных букв`)
}
getWordStructure3('')
getWordStructure3('Case')
getWordStructure3('Check-list')
getWordStructure3('Caaaaat')
getWordStructure3('aeyae')

// 4**. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)
//
console.log('------------------4**-------------------------')
const isPalindrom = (word) => {
    let reversString = word.split('').reverse().join('')
    if (reversString.toLowerCase() == word.toLowerCase()) {
        return (true, `${word} - is polindrom!`)
    } else return (false, `${word} - isn't polindrom!`)
}

console.log(isPalindrom('qwerty'))
console.log(isPalindrom('abba'))
console.log(isPalindrom('Abba'))
// Проверки: 'abba', 'Abba'