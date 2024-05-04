import React from 'react-native'
import { Text } from 'react-native'

import styles from './style'

export default function Texto({children, style}){

    let estilo = styles.texto;
    
    if(style?.fontWeight === 'bold'){
        estilo = styles.textoNegrito;
    }

    return(
        <Text style={[style, estilo]}>{ children }</Text>
    )
}