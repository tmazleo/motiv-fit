import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    text: {
        color: "#ffffff"
    },
    cadastrar: {
        color: "#ffffff",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff"
    },
    content: {
        display: 'flex',
        alignItems: 'center'
    },
    form: {
        width: "100%",
        height: "auto",
        margin: 30,
        padding: 10,
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        width: 269,
        height: 51,
        backgroundColor: "#d9d9d9",
        borderRadius: 5,
        textAlign: 'center',
        margin: 12,
    },
    textButton: {
        color: "#000000",
        fontSize: 14,
        textAlign: 'center'
    },
    button: {
        width: 93,
        height: 24,
        backgroundColor: "#d9d9d9",
        borderRadius: 5,

    }
});

export default styles;