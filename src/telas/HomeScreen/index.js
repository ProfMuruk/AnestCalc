import React from "react";
import {View, Image} from "react-native"

import styles from "./style";
import Calculadora from "../../componentes/Calculadora";

export default function HomeScreen(){
    
    return(
        <View style={styles.conteudoPrincipal}>
            <Image style={styles.imagem} source={require('../../../assets/logo_fundo_transparente.png')} />
            
            <Calculadora />
        </View>
    )
}