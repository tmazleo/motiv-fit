// Screen2.js
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './style';
import LogoMin from '../../components/Logo/LogoMin';
import Icon from 'react-native-vector-icons/FontAwesome';

const Information = () => {

    return (
        <View>
            <LogoMin />
            <View style={styles.sala}>
                <Text style={styles.title}>SALA: Galera do RH</Text>

            </View>
            <View style={styles.context}>
                <View style={styles.contextE}>
                    <View style={styles.contextHead}>
                        <Text>Participante</Text>
                        <Text>Esporte</Text>
                        <Text>Troféus</Text>
                    </View>
                    <View style={styles.peoples}>
                        <Text style={styles.text}>Isabela Santos</Text>
                        <Text style={styles.text}>Boxe</Text>
                        <Text><Icon name="trophy" size={20} color="gold" /><Icon name="trophy" size={20} color="gold" /></Text>
                    </View>
                    <View style={styles.peoples}>
                        <Text style={styles.text}>Pedro Costa</Text>
                        <Text style={styles.text}>CrossFit</Text>
                        <Text style={styles.text}><Icon name="trophy" size={20} color="gold" /></Text>
                    </View>
                    <View style={styles.peoples}>
                        <Text style={styles.text}>Camila Silva</Text>
                        <Text style={styles.text}>Academia</Text>
                        <Text style={styles.text}><Icon name="trophy" size={20} color="gold" /><Icon name="trophy" size={20} color="gold" /><Icon name="trophy" size={20} color="gold" /></Text>
                    </View>
                    <View style={styles.peoples}>
                        <Text style={styles.text}>Ronaldo de Assis</Text>
                        <Text style={styles.text}>Futebol</Text>
                        <Text style={styles.text}><Icon name="trophy" size={20} color="gold" /><Icon name="trophy" size={20} color="gold" /></Text>
                    </View>

                </View>
            </View>
        </View >

    );
};

export default Information;
