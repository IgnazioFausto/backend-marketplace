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

    console.log('Guardo Producto 1');
    let idp1 = await contenedor.save(p1)
    console.log('id de p1: ', idp1);

    console.log('Guardo Producto 2');
    let idp2 = await contenedor.save(p2)
    console.log('id de p2: ', idp2);
    
    console.log('Guardo Producto 3');
    let idp3 = await contenedor.save(p3)
    console.log('id de p3: ', idp3);

    console.log('Muestro Todo');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Busco por ID');
    const res = await contenedor.getById(2);
    console.log('Resultado: ', res);
    /* 
        console.log('Elimino por ID');
        const prodDeleted = await contenedor.deleteById(2)
        console.log(`Eliminado producto del Id: ${prodDeleted}`); */

    console.log('Elimino todo');
    await contenedor.deleteAll();

    console.log('Muestro el archivo vacío');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Guardo de nuevo el Producto 1');
    let idP1 = await contenedor.save(p1)
    console.log('id de p1: ', idP1);

    console.log('Guardo de nuevo el Producto 2');
    let idP2 = await contenedor.save(p2)
    console.log('id de p2: ', idP2);

    console.log('Muestro con los dos Productos agregados');
    objs = await contenedor.getAll();
    console.log(objs);

    console.log('Elimino por Id el producto 2')
    await contenedor.deleteById(2);
    console.log('Producto borrado');

    console.log('Muestro con el producto elegido, borrado');
    objs = await contenedor.getAll();
    console.log(objs);
    
    
}

main()