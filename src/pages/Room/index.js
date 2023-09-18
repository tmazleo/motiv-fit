// Screen2.js
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import styles from './style';
import LogoMin from '../../components/Logo/LogoMin';
import { useState } from 'react';

const Room = ({ navigation }) => {

    const [isPressed, setIsPressed] = useState(false);

    const toggleCheckbox = () => {
        setIsPressed(!isPressed);
    };

    const validation = (navigation) => {
        if (isPressed) {
            navigation.navigate('ChatRoom');
        }

    }
    return (
        <View>
            <LogoMin />
            <View style={styles.context}>
                <Text style={styles.title}>Escolha sua sala</Text>
                <View style={styles.contextE}>
                    <TouchableOpacity onPress={toggleCheckbox}
                        style={[styles.button, isPressed && styles.buttonPressed]}>
                        <Text style={styles.text}>Galera do RH</Text>
                        {isPressed && <Text style={styles.checkedSymbol}>_</Text>}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonEs} onPress={() => validation(navigation)}><Text style={styles.textButton}>Escolher</Text></TouchableOpacity>

                </View>
            </View>
        </View>

    );
};

export default Room;
