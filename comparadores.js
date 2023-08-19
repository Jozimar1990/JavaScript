let x = 2;
let y = 'string de teste';
console.log(`01: ${x > 2}`);
console.log(`02: ${x < 3}`);
console.log(`03: ${y === 'string de teste'}`);
console.log(`04: ${y === 'texto de teste'}`);
console.log(`05: ${x >= 2}`);
console.log(`06: ${x >= '2'}`);
console.log(`07 x === '2': ${x === '2'}`); //comparação mais rígida - não considera entre tipos diferentes
console.log(`08 x === 2:  ${x === 2}`);
console.log(`09 x == '2': ${x == '2'}`); //comparação mais fraca - considera entre tipos diferentes
console.log(`10 x == 2: ${x == 2}`);