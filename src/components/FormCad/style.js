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
        alignItems: 'center',

    },
    input: {
        width: 265,
        height: 35,
        backgroundColor: "#2E2E2E",
        borderRadius: 12,
        margin: 12,
        paddingLeft: 10,
        color: "#fff"
    },
    textButton: {
        color: "#fff",
        fontSize: 14,
        textAlign: 'center'
    },
    button: {
        width: 87,
        height: 27,
        backgroundColor: "#4EC668",
        borderRadius: 12,


    }
});

export default styles;