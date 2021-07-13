import moment from 'moment-timezone';
import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

type ClockProps = {
    name: string,
    date: Date,
    locale: string,
    timeZone: string,
}

export default function ClockDetail(props: ClockProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.hour}>
                {moment.tz(props.timeZone).format('hh:mm:ss a')}
            </Text>
            <Text style={styles.countryName}>
                {props.name}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        paddingVertical: 10,
        alignItems: 'center',
    },
    hour: {
        fontWeight: '600',
        fontSize: 22,
    },
    countryName: {
        fontWeight: '700',
        fontSize: 24,
    }
})
