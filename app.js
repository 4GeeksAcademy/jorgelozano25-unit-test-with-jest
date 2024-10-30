// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87,  // libra esterlina
};
// Función para convertir de euros a dólares
const fromEuroToDollar = (amountInEuros) => {
    return amountInEuros * oneEuroIs.USD;
};

// Función para convertir de dólares a yenes
const fromDollarToYen = (amountInDollars) => {
    const amountInEuros = amountInDollars / oneEuroIs.USD;
    const amountInYen = amountInEuros * oneEuroIs.JPY;
    return amountInYen;
};

// Función para convertir de yenes a libras
const fromYenToPound = (amountInYen) => {
    const amountInEuros = amountInYen / oneEuroIs.JPY;
    const amountInPounds = amountInEuros * oneEuroIs.GBP;
    return amountInPounds;
};

// Exportar funciones
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs, };