import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'

type HeaderProps = {
    playClocks: () => void,
    stopClocks: () => void,
}

export default function Header(props: HeaderProps) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.playClocks} style={styles.button}>
                <Text>PLAY</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.stopClocks} style={[styles.button, { backgroundColor: '#de1738'}]}>
                <Text>STOP</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 40,
        backgroundColor: '#006400',
        borderRadius: 10,
        marginHorizontal: 40,
    }
})
