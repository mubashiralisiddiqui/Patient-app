import React from 'react'
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Content: {
        width: 300,
        height: 100
    },
    addPatient: {
        textAlign: 'center',
        marginTop: 50
    },
    textAreaAddPatient: {
        width: 300,
        height: 100,
        borderWidth: 2,
        borderColor: 'gray',
        marginTop: 20,
        marginBottom: 10
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    button: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        width: 200,
        height: 50,
        textAlign: 'center',
        marginLeft:50
    }

});
export default styles;