<div align="center">

<img alt="Imagen logo LugoTech" src="logo-lugotech.png" width="300" />

</div>

# Actualizador de versiones

## Carpetas y/o archivos:

- [Package.json](#packagejson)
- [Version.json](#versionjson)
- [Firebase](#firebase)
  - [firebase-admin.js](#firebase-adminjs)
- [Helpers](#models)
  - [Preguntas.js](#preguntasjs)
- [Models](#models)
  - [version-handler.js](#version-handlerjs)
- [Firebase-key.json](#firebase-keyjson)
- [Version-firebase.js](#version-firebasejs)
- [Version-local.js](#version-localjs)

## Package.json

Para empezar a usar los scripts es necesario hacer los siguientes cambios en el archivo package.json:

- Cambiar o agregar "type": "module" para el uso de sintaxis por importaciones.
- Instalar las dependencias:

  - [npm install inquirer](https://www.npmjs.com/package/inquirer)
  - [npm install firebase-admin --save](https://firebase.google.com/docs/admin/setup?hl=es-419#add-sdk)

- Crear el siguiente script: "version": "node scripts/version-local.js && nuxt build && nuxt generate && firebase deploy && node scripts/version-firebase.js".

## Version.json

Crea un archivo tipo json "version.json" dentro de la carpeta "static". El mismo tendrá la variable "version" la cual hará referencia tanto del lado del cliente como en Firebase y será utilizada para ser leída y actualizado por consola.

## Firebase

### firebase-admin.js

Este archivo JS se utiliza para inicializar la aplicación de Firebase utilizando las credenciales proporcionadas del archivo [firebase-key.json](#firebase-keyjson) y exporta una instancia de la base de datos Firestore, la misma será utilizada para realizar las operaciones necesarias dentro de Firestore.

- Nota: Será necesario editar la ruta del jsonKey de acuerdo a la ubicación del archivo dentro del computador: "import jsonKey from 'file:///C:/ruta-del-archivo/POS-Cliente/scripts/firebase-key.json' assert {type: "json"}"

## Helpers

### preguntas.js

Este archivo JS contiene todas las preguntas que serán utilizadas en la consola al momento de ejecutar el script.

## Models

### version-handler.js

Este archivo define una clase de JS llamada "ManejadorVersiones" el cual cuenta con 3 metodos: "incrementarVersionPrincipal", "incrementarVersionMenor", "actualizarFirebase".

El código utiliza las funciones 'readFile' y 'writeFile' del módulo fs de Node.js para leer y escribir en archivos locales. Además, utiliza un objeto 'db' para interactuar con una base de datos en Firebase, específicamente para actualizar un documento en una colección. La clase 'ManejadorVersiones' se exporta para que pueda ser utilizada en otros archivos JavaScript.

Dentro de la clase hay 3 variables que deberas definir:

- path: tendrá la ruta del archivo JSON ([version.json](#versionjson)) que será leído y modificado por los métodos de la clase.
- collection: contiene el nombre de la colección en la base de datos de Firebase que será utilizada para actualizar el documento.
- doc: almacena un valor específico utilizado como identificador de documento en una base de datos de Firebase.

## Firebase-key.json

En este archivo serán proporcionadas las credenciales de administrador de la aplicación para acceder a los servicios de Firebase.

Para obtener estas credenciales, dirígete a tu proyecto de Firebase > Configuración del proyecto > Cuentas de servicio > Generar nueva clave privada.

## Version-firebase.js

Este es el script encargado de actualizar Firebase tomando el valor de "[version.json](#versionjson)".

## Version-local.js

Este es el script encargado de leer y actualizar el archivo JSON "[version.json](#versionjson)" de manera local.
