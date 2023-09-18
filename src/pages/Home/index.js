// Screen1.js
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MotHead from '../../components/MotHead';
import styles from './style';
import Form from '../../components/Form';



const Home = ({ navigation }) => {
    return (
        <View style={styles.context}>
            <MotHead />
            <Form navigation={navigation} />
            <TouchableOpacity onPress={() => navigation.navigate('Ajuda')} style={styles.ajuda}><Text style={styles.textA}>AJUDA</Text></TouchableOpacity>
        </View>
    );
};

export default Home;
