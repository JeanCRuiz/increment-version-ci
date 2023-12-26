import ManejadorVersiones from "./models/version-handler.js";

const main = () => {

    const mainHandler = new ManejadorVersiones;

    mainHandler.actualizarFirebase()

}

main()