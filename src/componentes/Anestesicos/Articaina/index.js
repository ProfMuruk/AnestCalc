import React from "react";
import { View } from "react-native";
import Texto from "../../Texto";

import styles from '../style'

export default function Articaina({peso}){
    if(!peso || peso <= 0){
        return <Texto>Insira o peso</Texto>
    }
    const dosagem = 7.00
    const dosagemMaxima = peso * dosagem
    const tubete = dosagemMaxima / 72
    
    return(
        <View style={styles.viewAnestesicos}>
            <Texto style={styles.resultadoETubetes}>Dose Máxima: {dosagemMaxima.toFixed(2)} mg</Texto>
            <Texto style={styles.resultadoETubetes}>Tubetes: (≈{tubete.toFixed(1)}) ou {Math.round(tubete.toFixed(1))} tubete(s)</Texto>
            <Texto style={styles.explicado}>Resultado explicado:</Texto>
            <Texto style={styles.explicacao}>A dosagem máxima é de {dosagem.toFixed(2)}mg/kg</Texto>
            <Texto style={styles.explicacao}>Base de calculo: </Texto>
            <Texto style={styles.explicacao}>Dosagem Max = Peso(kg) x {dosagem.toFixed(2)}mg/kg</Texto>
            <Texto style={styles.explicacao}>Ou seja: {peso} * {dosagem.toFixed(2)}</Texto>
            
        </View>
    )
}