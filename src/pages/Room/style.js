import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    context: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#131313",
        alignItems: "center",
    },
    title: {
        color: '#4EC668',
        fontSize: 32,
        marginBottom: 50
    },
    contextE: {
        width: 265,
        height: 262,
        backgroundColor: "#2E2E2E",
        borderRadius: 8,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        width: "100%",
        height: 55,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#131313',
    },
    buttonPressed: {
        width: "100%",
        height: 55,
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: "#D9D9D9",
        justifyContent: 'center'
    },
    text: {
        color: "#fff",
        fontSize: 20
    },
    textPressed: {
        color: "#000"
    },
    textButton: {
        color: "#fff",
        fontSize: 14,
        textAlign: 'center'
    },
    buttonEs: {
        width: 87,
        height: 27,
        backgroundColor: "#4EC668",
        borderRadius: 12,


    }

});

export default styles;