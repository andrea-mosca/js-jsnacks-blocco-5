const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// * UN ARRAY PER VOLTA
// array di zucchine più lunghe di 15 cm
// const longZucchine = zucchine.filter(zucchina => zucchina.length > 15);
// console.log(zucchine);
// console.log(longZucchine);

// array di zucchine minori o uguali a 15 cm
// const shortZucchine = zucchine.filter(zucchina => zucchina.length > 15);
// console.log(zucchine);
// console.log(shortZucchine);

// * CONTROLLO IN CONTEMPORANEA
const longZucchine = [];
const shortZucchine = [];
zucchine.forEach((zucchina)=>{zucchina.length > 15? longZucchine.push(zucchina): shortZucchine.push(zucchina)});
console.log(zucchine);
console.log(longZucchine);
console.log(shortZucchine);