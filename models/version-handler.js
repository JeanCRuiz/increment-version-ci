import { readFile, writeFile } from "node:fs";
import { db } from "../firebase/firebase-admin.js";

class ManejadorVersiones {
    path = '../increment-version-ci/json/version.json';
    collection = 'version';
    doc = '2-test';

    async incrementarVersionPrincipal() {

        const path = this.path

        function callback(err, data) {


            if (err) throw err;

            const jsonData = JSON.parse(data)
            jsonData.version = Number.isInteger(parseInt(jsonData.version)) ? `${parseInt(jsonData.version) + 1}.0` : `${Math.ceil(parseInt(jsonData.version))}`
            const updatedJSON = JSON.stringify(jsonData)

            writeFile(path, updatedJSON, 'utf-8', (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }

                const versionActualizada = JSON.parse(updatedJSON)

                console.log(`Archivo JSON actualizado correctamente: ${versionActualizada.version}`);
            })
        }

        readFile(this.path, callback)

    }

    async incrementarVersionMenor() {

        const path = this.path

        function callback(err, data) {
            if (err) throw err;


            const jsonData = JSON.parse(data);
            jsonData.version = `${(Number(jsonData.version) + 0.1).toFixed(1)}`

            const updatedJSON = JSON.stringify(jsonData)


            writeFile(path, updatedJSON, 'utf-8', (err) => {
                if (err) {
                    console.error('Error al escribir en el archivo JSON:', err);
                    return;
                }

                const versionActualizada = JSON.parse(updatedJSON)

                console.log(`Version actualizada correctamente: ${versionActualizada.version}`);
            })
        }

        readFile(this.path, callback)

    }

    actualizarFirebase() {
        readFile(this.path, async (err, data) => {
            if (err) throw err;


            const jsonData = JSON.parse(data)
            const version = jsonData.version
            await db.collection(this.collection).doc(this.doc).update({ code: version })
            console.log(`La version fue actualizada: "${version}"`);

        })
    }

}

export default ManejadorVersiones