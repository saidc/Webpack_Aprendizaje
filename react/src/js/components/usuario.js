import React from 'react'

function Usuario (){
    return (
        <li className="usuario">
            {props.name}
            <a href={'http://www.${props.website}'}></a>
        </li>
    )
}
export default Usuario;