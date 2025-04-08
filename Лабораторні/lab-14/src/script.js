
function sum(a, b) {
    return a + b;
}
console.log("Завдання 10, Варіант 1:", sum(3, 5)); // Виведе 8


function arraySum(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
}
console.log("Завдання 11, Варіант 1:", arraySum([1, 2, 3, 4])); // Виведе 10


function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return [...str].filter(char => vowels.includes(char)).length;
}
console.log("Завдання 12, Варіант 1:", countVowels("Hello World")); // Виведе 3
