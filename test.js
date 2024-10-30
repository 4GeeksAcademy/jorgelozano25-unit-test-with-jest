const { fromEuroToDollar, fromDollarToYen, fromYenToPound, oneEuroIs } = require('./app.js');

// Prueba para fromEuroToDollar
test("One euro should be 1.07 dollars", function() {
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBeCloseTo(expected, 5);
});

// Prueba para fromDollarToYen
test("One dollar should be 147.16 yenes", function() {
    const yen = fromDollarToYen(1); // Convertimos 1 dólar
    const expected = (1 / oneEuroIs.USD) * oneEuroIs.JPY; // Conversión manual
    expect(yen).toBeCloseTo(expected, 5);
});

// Prueba para fromYenToPound
test("One yen should be 0.0055 libras", function() {
    const pounds = fromYenToPound(1); // Convertimos 1 yen
    const expected = (1 / oneEuroIs.JPY) * oneEuroIs.GBP; // Conversión manual
    expect(pounds).toBeCloseTo(expected, 5);
});
