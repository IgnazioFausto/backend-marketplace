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

    //rehacer
    /* async deleteById(arr, value) {
        const objs2 = await fs.readFile(this.ruta, 'utf-8');
        let objs = JSON.parse(objs2)

        var index = objs.indexOf(value);
        
        if (index > -1) {
            objs.splice(index, 1);
        }
        return arr;

        
    } */

       
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