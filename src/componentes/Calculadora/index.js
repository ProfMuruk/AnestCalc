import React from "react";
import {View, TextInput, TouchableOpacity} from 'react-native'
import Texto from "../../componentes/Texto";
import { Picker } from '@react-native-picker/picker'
import { useState } from "react";

import Articaina from '../Anestesicos/Articaina'
import Bupivacaina from '../Anestesicos/Bupivacaina'
import Lidocaina from '../Anestesicos/Lidocaina'
import Mepivacaina from '../Anestesicos/Mepivacaina'
import Prilocaina from '../Anestesicos/Prilocaina'

import styles from "./style";

export default function Calculadora(){
    const [anestesicoSelecionado, setAnestesicoSelecionado] = useState('lidocaina');
    const [peso, setPeso] = useState('')
    const [resultado, setResultado] = useState('')
    
    const renderAnestesico = () =>{

        const props = { peso: parseFloat(peso.replace(',', '.')) };

        switch(anestesicoSelecionado) {
            case 'articaina':
              return <Articaina {...props }/>;
            case 'bupivacaina':
              return <Bupivacaina {...props }/>;
            case 'lidocaina':
                return <Lidocaina {...props }/>;
            case 'mepivacaina':
                return <Mepivacaina {...props }/>;
            case 'prilocaina':
                return <Prilocaina {...props }/>;
            default:
                return <Texto>Item incorreto!</Texto>;
        }
    }

    return(

        <View style={styles.conteudoEntradasDados}>
            <Texto style={styles.textosEntradasDados}>Selecione o anestésico</Texto>
            <Picker
            style={styles.estiloPicker}
            selectedValue={anestesicoSelecionado}
            onValueChange={(itemValue, itemIndex) =>
            setAnestesicoSelecionado(itemValue)
            }>
                <Picker.Item label="Lidocaína" value="lidocaina"  />
                <Picker.Item label="Mepivacaína" value="mepivacaina"  />
                <Picker.Item label="Prilocaína" value="prilocaina" />
                <Picker.Item label="Articaína" value="articaina"  />
                <Picker.Item label="Bupivacaína" value="bupivacaina" />
            </Picker>
            <Texto style={styles.textosEntradasDados}>Digite o peso:</Texto>
            <TextInput 
            style={styles.estiloPicker}
            value={peso} 
            onChangeText={(text) =>{
                let novoTexto = text.replace(/[^0-9,]/g, '')
                setPeso(novoTexto)
            }}
            placeholder="Digite o peso aqui"
            keyboardType="numeric"
            />

            {renderAnestesico()}
                

        </View> 
    )
}