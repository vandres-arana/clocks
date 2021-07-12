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
            isStopped: false
        };
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.date.toLocaleTimeString(this.props.locale, {
                        timeZone: this.props.timeZone
                    })}
                </Text>
                <Text>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
