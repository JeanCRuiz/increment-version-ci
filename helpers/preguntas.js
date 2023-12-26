
export const preguntas = [
    {
        type: 'confirm',
        name: 'options',
        message: `¿Deseas actualizar la versión actual?`,
        default: true
    },

]

export const segundasPreguntas = [
    {
        type: 'list',
        name: 'secondOptions',
        message: '"¿Qu\u00E9 tipo de actualizaci\u00F3n desea realizar?"',
        choices: [
            {
                value: 0,
                name: "Salir"
            },
            {
                value: 1,
                name: "Version"
            },
            {
                value: 2,
                name: "Carateristicas / Bugs"
            }
        ]
    }
]