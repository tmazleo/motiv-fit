import React from "react";
import { View, Text } from "react-native"
import styles from "./style";


export default function MessageE(props) {
    return (
        <View>
            <Text style={styles.error}>{props.messageError}</Text>
        </View>
    )
}