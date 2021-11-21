//Declaramos una class Usuario

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName() {
        return (`Nombre completo: ${this.nombre} ${this.apellido}`)
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }
    countMascotas() {
        return(`Tiene ${this.mascotas.length} mascotas.`)
    }
    addBook(autor, obra) {
        this.libros.push({ obra: obra, autor: autor })
    }
    getBookNames() {
        return ( //mapeamos el array libros y mostramos los nombres de las obras
            `Sus libros son: ${this.libros.map(el => el.obra).join(', ')}.`
        )
    }
}

// Creamos a Usuario1, con valores arbitrarios e invocamos todos sus métodos.

const Usuario1 = new Usuario("Juan", "Flores")

Usuario1.addMascota("Amir")
Usuario1.addBook("Borges", "El Aleph")
Usuario1.addMascota("Toby")
Usuario1.addBook("Sábato", "El Túnel")

console.log(Usuario1)

console.log(Usuario1.getFullName())
console.log(Usuario1.getBookNames())
console.log(Usuario1.countMascotas())


