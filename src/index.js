//modulos
const fs = require("fs");
const {colors} = require("./colors/index");

//variables y constantes
const path_archivo = "/var/run/reboot-required";

//funcion
async function comprobar() {

try{
    colors("-Comprobando si debes reiniciar- \n", "comprobar");
    fs.accessSync(path_archivo);
}
catch{

  return colors("No parece que debas reiniciar", "no_reinciar");
};

 colors("Parece que debes reiniciar", "reinciar");
};

comprobar();
