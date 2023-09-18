import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Pressable, Keyboard } from "react-native";
import MessageE from "./ErrorM";
import styles from "./style";


const Form = ({ navigation, route }) => {
    let name = "lucas";
    let pass = "123";
    let user = { name, pass };
    const [usuario, setUsuario] = useState(null);
    const [senha, setSenha] = useState(null);
    const [message, setMessage] = useState(null);



    function validation(navigation) {
        if (usuario !== null && senha !== null) {
            if (usuario === user.name && senha === user.pass) {
                // Navegar para a próxima tela
                navigation.navigate('Room');
                setUsuario(null);
                setSenha(null);
                return;
            } else {
                setUsuario(null);
                setSenha(null);
                setMessage("usuário inválido!");
            }
        } else {
            setUsuario(null);
            setSenha(null);
            setMessage("preencha os campos");
        }
    }


    return (
        <Pressable onPress={Keyboard.dismiss} style={styles.content}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    onChangeText={setUsuario}
                    value={usuario}
                    placeholder="Usuário"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setSenha}
                    value={senha}
                    placeholder="Senha"
                />
                <TouchableOpacity style={styles.button} title="Login" onPress={() => validation(navigation)} ><Text style={styles.textButton}>entrar</Text></TouchableOpacity>
                <MessageE messageError={message} />
            </View>
            <View style={styles.content}>
                <Text style={styles.text}>ou</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.cadastrar}>cadastrar</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
};

export default Form;
