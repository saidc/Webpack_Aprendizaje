//console.log("hola mundo Said Cortes Calderon");
import '../css/estilos.css'
import data from "../json/usuarios.json";

var Saludo = "Hola " + data.usuarios[3].name;
console.log(data);
console.log(Saludo);

document.write(Saludo);
