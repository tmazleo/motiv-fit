import React from "react";
import { View } from "react-native";
import Logo from "../Logo";
import styles from "./style";
import Message from "../Message";

const MotHead = () => {
    return (
        <View style={styles.content}>
            <Logo />
            <Message />
        </View>
    )
};

export default MotHead;