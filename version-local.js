import inquirer from "inquirer";
import ManejadorVersiones from "./models/version-handler.js";
import { preguntas, segundasPreguntas } from "./helpers/preguntas.js";

const inquirerMenu = async () => {

    const { secondOptions } = await inquirer.prompt(segundasPreguntas)

    return secondOptions
}

const listado = async () => {
    let preguntas;
    const version = new ManejadorVersiones()

    do {
        preguntas = await inquirerMenu()
        switch (preguntas) {
            case 1:
                version.incrementarVersionPrincipal()
                preguntas = 0

                break

            case 2:
                version.incrementarVersionMenor()
                preguntas = 0
                break
        }
    } while (preguntas !== 0)
}

const main = () => {
    console.log('==============================')
    console.log('Actualización de versiones')
    console.log('==============================\n')

    inquirer.prompt(preguntas).then(respuestas => {
        if (respuestas.options) {
            listado()
        }
    })

}

main()