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
    },
    info: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20
    },
    contextN: {
        marginTop: 40
    },
    texts: {
        color: "#fff",
        fontSize: 18
    },
    texts2: {
        color: "#909090",
        fontSize: 18,
        marginTop: 6
    },
    buttonEs: {
        width: 87,
        height: 27,
        backgroundColor: "#4EC668",
        borderRadius: 12,
        position: "absolute",
        bottom: 200

    },
    text: {
        color: "#fff",
        fontSize: 20,
        textAlign: 'center'
    }
});

export default styles;