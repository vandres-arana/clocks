import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

type ClockProps = {
    name: string,
    date: Date,
    locale: string | undefined,
    timeZone: string | undefined,
}

export default class ClockDetail extends Component<ClockProps> {

    constructor(props: ClockProps) {
        super(props);
        this.state = {
            isStopped: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.hour}>
                    {this.props.date.toLocaleTimeString(this.props.locale, {
                        timeZone: this.props.timeZone
                    })}
                </Text>
                <Text style={styles.countryName}>
                    {this.props.name}
                </Text>
            </View>
        );
    }
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
