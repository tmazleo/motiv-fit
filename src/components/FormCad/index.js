import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Pressable, Keyboard } from "react-native";

import styles from "./style";



const FormCad = ({ navigation }) => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        acessKey: "",
        ativ: "",
    });
    const { name, email, acessKey, ativ } = user;

    const handleChange = (field, value) => {
        setUser({ ...user, [field]: value });
    };

    const validation = (navigation) => {
        console.log(user); // Exibe os dados do usuário no console
        if (navigation) {
            navigation.navigate('Home'); // Navegar para outra tela
        } else {
            console.error('Navigation prop is not available.');
        }
    };




    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.content}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleChange("name", text)}
                    value={name}
                    placeholder="Nome Completo"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleChange("email", text)}
                    value={email}
                    placeholder="E-mail"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleChange("acessKey", text)}
                    value={acessKey}
                    placeholder="Chave de Acesso"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleChange("ativ", text)}
                    value={ativ}
                    placeholder="Qual Atividade Física"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => validation(navigation)}
                >
                    <Text style={styles.textButton}>enviar</Text>
                </TouchableOpacity>

            </View>

        </Pressable>
    );
};

export default FormCad;