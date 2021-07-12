import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import Clock from './Clock';

type AppProps = {
}

type AppState = {
  date: Date,
  isStopped: boolean,
}
export default class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      date: new Date(),
      isStopped: false
    };
    setInterval(this.updateDate, 1000)
  }

  updateDate = () => {
    if (!this.state.isStopped) {
      this.setState({
        date: new Date()
      });
    }
  }

  playClocks = () => {
    console.log("start clock")
    this.setState({
      isStopped: false
    })
  }
  stopClocks = () => {
    console.log("stop clock")
    this.setState({
      isStopped: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="PLAY" onPress={this.playClocks} />
        <Button title="STOP" onPress={this.stopClocks} />
        <Clock
          name="United Kingdom"
          date={this.state.date}
          country={"en-GB"}
          timeZone={"Europe/London"}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
