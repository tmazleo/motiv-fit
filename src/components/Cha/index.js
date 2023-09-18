// Screen2.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Pressable, Keyboard } from 'react-native';
import styles from './style';



const Cha = () => {
    const [mensagem, setMensagem] = useState(''); // Estado para armazenar a mensagem
    const [mensagensEnviadas, setMensagensEnviadas] = useState([]);
    const enviarMensagem = () => {
        if (mensagem) {
            // Adicionar a mensagem ao array de mensagens enviadas
            setMensagensEnviadas([...mensagensEnviadas, mensagem]);
            // Limpar o campo de mensagem
            setMensagem('');
        }
    };

    return (

        <Pressable onPress={Keyboard.dismiss} style={styles.context}>

            <View style={styles.view}>
                {mensagensEnviadas.map((mensagem, index) => (
                    <View style={styles.msgContent} key={index}>
                        <Text style={styles.msgViewT}>{mensagem}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.msgInp}>
                <TextInput placeholder='Escreva uma mensagem' style={styles.input} value={mensagem}
                    onChangeText={setMensagem}></TextInput>
                <TouchableOpacity style={styles.button} onPress={enviarMensagem}><Text style={styles.textBtn}>enviar</Text></TouchableOpacity>
            </View>

        </Pressable>
    );
};

export default Cha;
