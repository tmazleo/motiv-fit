// Screen2.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';
import FormCad from '../../components/FormCad';
import LogoMin from '../../components/Logo/LogoMin';

const Cadastro = ({ navigation }) => {
    return (
        <View>
            <LogoMin />
            <View style={styles.context}>
                <Text style={styles.title}>Cadastrar</Text>
                <FormCad navigation={navigation} />
            </View>

        </View>
    );
};

export default Cadastro;
