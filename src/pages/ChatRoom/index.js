// Screen2.js
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './style';
import LogoMin from '../../components/Logo/LogoMin';
import Cha from '../../components/Cha';
import Icon from 'react-native-vector-icons/FontAwesome';


const ChatRoom = ({ navigation }) => {
    return (
        <View style={styles.principal}>
            <LogoMin />
            <View style={styles.sala}>
                <TouchableOpacity style={styles.click} onPress={() => navigation.navigate('Information')}><Text style={styles.title}>SALA: Galera do RH</Text></TouchableOpacity>

            </View>
            <View style={styles.context}>
                <View style={styles.message}>
                    <Text style={styles.text}>Após sua atividade, tire uma foto
                        e mande com a seguinte pose: <Icon name="thumbs-up" size={20} color="yellow" /></Text>
                </View>
                <Cha />
            </View>

        </View>
    );
};

export default ChatRoom;
