import React, {Component} from "react";
import Usuario from "./usuario.js"
class Usuarios extends Component{
    render(){
        return (
            <ul className="Usuarios">
                {this.props.data.Usuarios.map((DatosDeUsuario)=>{
                    return <Usuario key={Usuario.id} data={ DatosDeUsuario }/>
                })
                }
            </ul>
        )
    }
}
export default Usuarios;