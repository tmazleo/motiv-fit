import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    context: {
        width: "100%",
        height: "50%",
        bottom: 0,
        backgroundColor: "#131313",
        alignItems: "center",
    },
    view: {
        height: "70%",
        width: "100%",
        backgroundColor: "#131313",
        display: 'flex',
        alignItems: 'flex-end'
    },
    msgContent: {
        width: 286,
        height: 40,
        backgroundColor: "#4EC668",
        padding: 10,
        borderRadius: 34,
        marginTop: 10
    }
    ,
    input: {
        width: 300,
        height: 49,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        backgroundColor: "#fff",
        padding: 10
    },
    msgInp: {
        display: 'flex',
        flexDirection: 'row'
    },
    button: {
        width: 50,
        backgroundColor: "#fff",
        height: 49,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    },
    textBtn: {
        textAlign: 'center',
        marginTop: 10
    },
    msgViewT: {
        color: "#fff"
    }
});

export default styles;