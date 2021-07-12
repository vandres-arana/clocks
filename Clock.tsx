import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

type ClockProps = {
    name: string,
    date: Date,
    country: string,
    timeZone: string,
}

type ClockState = {
    isStopped: boolean,
}

export default class Clock extends Component<ClockProps, ClockState> {

    constructor(props: ClockProps) {
        super(props);

        this.state = {
            isStopped: false
        };
    }

    stopClock = () => {
        const { isStopped } = this.state;
        this.setState({
            isStopped: !isStopped
        })
    }

    render() {
        return (
            <View>
                <Text>
                    {this.props.date.toLocaleTimeString(this.props.country, {
                        timeZone: this.props.timeZone
                    })}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
