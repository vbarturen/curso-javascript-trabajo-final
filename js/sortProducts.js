products.sort((a, b) => a.price - b.price);
console.log('Ordenado por precio:')
console.log(products);

const cheap = products.filter(product => product.price < 700); 
console.log('Filtrado por los que valen menos de 700:')
console.log(cheap);//

const found = products.find(product => product.title === 'Chop');
console.log('Encuentra chop:')
console.log(found);//
