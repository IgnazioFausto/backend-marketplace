const Contenedor = require('./Clase-2-Manejo-de-archivos');


const p1 = {
    title: "Escuadra",
    price: 123.45,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  }
  
const p2 = {
    title: "Calculadora",
    price: 234.56,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
}
  
const p3 = {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

async function main() {
    const contenedor = new Contenedor('./productos.txt');

    console.log('Muestro Todo');
    let objs = await contenedor.getAll();
    console.log(objs);

    console.log('Guado Producto 1');
    let idp1 = await contenedor.save(p1)
    console.log('id de p1: ', idp1);

    console.log('Guado Producto 2');
    let idp2 = await contenedor.save(p2)
    console.log('id de p2: ', idp2);

    console.log('Muestro Todo');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Busco por ID');
    const res = await contenedor.getById(2);
    console.log('Resultado: ', res);

}

main()