import moment from 'moment-timezone';
import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

type ClockProps = {
    name: string,
    date: Date,
    timeZone: string,
}

const ClockDetail: React.FC<ClockProps> = ({
    name,
    timeZone
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.hour}>
                {moment.tz(timeZone).format('hh:mm:ss a')}
            </Text>
            <Text style={styles.countryName}>
                {name}
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

export default ClockDetail;