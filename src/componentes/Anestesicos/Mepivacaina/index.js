import React from "react";
import Texto from "../../Texto";
import { View } from "react-native";

import styles from '../style'

export default function Mepivacaina({peso}){
    if(!peso || peso <= 0){
        return <Texto>Insira o peso</Texto>
    }
    const dosagem = 6.60
    let dosagemMaxima = dosagem * peso
    
    let tubete = dosagemMaxima / 36

    if(dosagemMaxima >= 400 && peso >= 70){
        dosagemMaxima = 400
        tubete = 11.00
    }
    
    
    
    return(
        <View style={styles.viewAnestesicos}>
            <Texto style={styles.resultadoETubetes}>Dose Máxima: {dosagemMaxima.toFixed(2)} mg</Texto>
            <Texto style={styles.resultadoETubetes}>Tubetes: (≈{tubete.toFixed(2)}) ou {Math.round(tubete.toFixed(1))} tubete(s)</Texto>
            <Texto style={styles.explicado}>Resultado explicado:</Texto>
            <Texto style={styles.explicacao}>A dosagem máxima é de {dosagem.toFixed(2)}mg/kg</Texto>
            <Texto style={styles.explicacao}>Base de calculo: </Texto>
            <Texto style={styles.explicacao}>Dosagem Max = Peso(kg) x {dosagem.toFixed(2)}mg/kg</Texto>
            <Texto style={styles.explicacao}>Ou seja: {peso} * {dosagem.toFixed(2)}</Texto>
            <Texto style={styles.textoAlerta}>A dosagem máxima recomendada de mepivacaína para adultos é de {dosagem} mg/kg de peso corporal, sem exceder 400 mg por procedimento</Texto>
        </View>
    )
}