import React from "react";
import Texto from "../../Texto";
import { View } from "react-native";

import styles from '../style'

export default function Bupivacaina({peso}){
    if(!peso || peso <= 0){
        return <Texto>Insira o peso</Texto>
    }
    const dosagem = 2.0
    const dosagemMaxima = 2.00 * peso
    if(dosagemMaxima >= 150){
        dosagemMaxima = 150
    }
    const tubete = dosagemMaxima / 36
    
    return(
        <View style={styles.viewAnestesicos}>
            <Texto style={styles.resultadoETubetes}>Dose Máxima: {dosagemMaxima.toFixed(2)} mg</Texto>
            <Texto style={styles.resultadoETubetes}>Tubetes: (≈{tubete.toFixed(2)}) ou {Math.round(tubete.toFixed(1))} tubete(s)</Texto>
            <Texto style={styles.explicado}>Resultado explicado:</Texto>
            <Texto style={styles.explicacao}>A dosagem máxima é de {dosagem.toFixed(2)}mg/kg</Texto>
            <Texto style={styles.explicacao}>Base de calculo: </Texto>
            <Texto style={styles.explicacao}>Dosagem Max = Peso(kg) x {dosagem.toFixed(2)}mg/kg</Texto>
            <Texto style={styles.explicacao}>Ou seja: {peso} * {dosagem.toFixed(2)}</Texto>
            <Texto style={styles.textoAlerta}>Lembre-se de que a dose total não deve exceder 150 mg em um período de 4 horas</Texto>
            <Texto style={styles.textoAlerta}>Em um período de 24 horas, 
            a administração de até 400 mg é considerada bem tolerada em adultos normais</Texto>
            
        </View>
    )
}