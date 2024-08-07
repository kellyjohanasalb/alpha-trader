const names = ["María", "Josefa", "Ana", "Carmen", "Rosa", "Laura", "Marta", "Flor", "Andrea", "Adriana", "Olga", "Karla", "Elizabeth", "Karen", "Silvia", "Sandra", "Sonia", "Katherine", "Luz", "Adriana", "José", "Luis", "Carlos", "Juan", "David", "Daniel", "Mario", "Francisco", "Jorge", "Manuel", "Miguel", "Eduardo", "Alejandro", "Fernando", "Rafael", "Antonio", "Sergio", "Ricardo", "Roberto", "Victor", "Manuel", "Miguel", "Eduardo", "Alejandro"];
const cities = ["San José", "Alajuela", "Cartago", "Heredia", "Guanacaste", "Puntarenas", "Limón", "San Carlos", "Puntarenas", "Guanacaste", "Limón", "San Carlos", "Puntarenas", "Guanacaste", "Limón"];
const baseAmount = 135000;

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomAmount(base) {
    return Math.random() * (base * 10 - base) + base;
}

function updateTable() {
    for (let i = 1; i <= 10; i++) {
        const nameElement = document.querySelector(`#namedata-${i}`);
        const winElement = document.querySelector(`#windata-${i}`);
        const cityElement = document.querySelector(`#citydata-${i}`);

        nameElement.innerHTML = getRandomElement(names);
        cityElement.innerHTML = getRandomElement(cities);
        winElement.innerHTML = getRandomAmount(baseAmount).toLocaleString('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 });
    }
}

setInterval(updateTable, 5000);
