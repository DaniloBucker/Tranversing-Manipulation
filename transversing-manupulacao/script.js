const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista')
//console.log(h1.innerHTML)
//console.log(h1.outerHTML)

//h1.outerHTML = '<p>Novo Título</p>';

//console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');
console.log(lista.parentElement);
console.log(lista.nextElementSibling);
console.log(lista.previousElementSibling)
console.log(lista.children [--lista.children.length])
//console.log(lista.querySelectorAll('li')) //todas as li's
console.log(lista.querySelector('li:last-child')) //último filho
console.log(lista.childNodes);
console.log(lista.previousSibling)
console.log(lista.firstChild); // primeiro node child
console.log(lista.childNodes); // todos os node child
