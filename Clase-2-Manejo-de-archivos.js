const { promises: fs } = require('fs');

class Contenedor {
    constructor(ruta) {
        this.ruta = ruta;
    }
    async save(obj) {

        const objs = await this.getAll();

        let newId;

        if (objs.length == 0) {
            newId = 1
        } else {
            newId = objs[objs.length - 1].id + 1
        }

        const newObj = { ...obj, id: newId }
        objs.push(newObj);

        try {

            await fs.writeFile(this.ruta, JSON.stringify(objs, null, 3));
            return newId;

        } catch (error) {
            throw new Error(`Error al guardar: ${error}`);
        }
    }

    async getById(id) {

        const objs = await this.getAll();
        const obj = objs.find(x => x.id == id);
        return obj;
    }

    async getAll() {
        try {

            const objs = await fs.readFile(this.ruta, 'utf-8');
            return JSON.parse(objs);

        } catch (error) {
            return []
        }
    }
    async deleteById(id) {
        /*  const objs = await this.getAll();
         const obj = objs.map(x => x.id != id);
       
        console.log(obj); */

        await fs.readFile('./productos.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            var prod = data.toString();
            prod = JSON.parse(prod);
            // Leer los datos para eliminar
            for (var i = 0; i < prod.data.length; i++) {
                if (id == prod.data[i].id) {
                    prod.data.splice(i, 1);
                }
            }
            prod.total = prod.data.length;
            var str = JSON.stringify(prod);
            // Luego escribe los datos en
            fs.writeFile('./productos.txt', str, function (err) {
                if (err) {
                    console.error(err);
                }
                console.log("---------- eliminado correctamente ------------");
            })
        })

    }
    async deleteAll() {
        const deletedAll = fs.writeFile('./productos.txt', '', err => {
            if (err) console.log(err);
            else {
                console.log("\nDatos borrados,", deletedAll);
            }
        });


    }
}

module.exports = Contenedor