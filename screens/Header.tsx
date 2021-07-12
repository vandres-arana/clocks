import React, { Component } from 'react'
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native'

type HeaderProps = {
    playClocks: () => void,
    stopClocks: () => void,
}
export default class Header extends Component<HeaderProps> {
    constructor(props: HeaderProps) {
        super(props)
    }
    render() {
        const { playClocks, stopClocks } = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={playClocks} style={styles.button}>
                    <Text>PLAY</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={stopClocks} style={[styles.button, { backgroundColor: '#de1738'}]}>
                    <Text>STOP</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 40,
        backgroundColor: '#006400',
        borderRadius: 10,
        marginHorizontal: 40
    }
})
