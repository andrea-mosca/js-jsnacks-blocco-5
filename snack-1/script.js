const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// metodo classico
console.log(names);

// stampa letterale
console.log(names.map(name => `'${name}'`).join(', '));

// stampa uno per volta con ciclo
names.forEach((name)=> {console.log(name)});
