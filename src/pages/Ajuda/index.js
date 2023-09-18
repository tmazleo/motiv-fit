// Screen1.js
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './style';

import LogoMin from '../../components/Logo/LogoMin';



const Ajuda = ({ navigation }) => {
    return (
        <View>
            <LogoMin />
            <View style={styles.context}>
                <Text style={styles.title}>Ajuda</Text>
                <View style={styles.contextN}>
                    <View style={styles.info}>
                        <Text style={styles.texts}>Envie um e-mail para:</Text>
                        <Text style={styles.texts2}>helpdesk@motivafit.com.br</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.texts}>Ligue para:</Text>
                        <Text style={styles.texts2}>(11) 2104-0088</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonEs}><Text style={styles.text}>Home</Text></TouchableOpacity>

            </View>
        </View>

    );
};

export default Ajuda;
