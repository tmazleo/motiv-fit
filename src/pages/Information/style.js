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
        fontSize: 20,
        backgroundColor: "#131313",
        marginLeft: 20
    },
    contextE: {
        width: 344,
        height: 432,
        backgroundColor: "#878787",
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        marginTop: 60,
        overflow: 'hidden'
    },
    contextHead: {
        backgroundColor: "#D9D9D9",
        width: "100%",
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
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
        fontSize: 14,
        textAlign: "center"
    },
    sala: {
        backgroundColor: "#131313"
    },
    peoples: {
        width: "100%",
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
    },


});

export default styles;