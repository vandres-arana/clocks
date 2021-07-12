import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Button, SafeAreaView, StyleSheet, VirtualizedList } from 'react-native';
import Constants from 'expo-constants';

import ClockDetail from './screens/ClockDetail';
import { allClocks } from './App.api';
import Clock from './models/Clock';
type AppProps = {
}

type AppState = {
  clocks: Clock[],
  date: Date,
  isStopped: boolean,
}
export default class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);

    this.state = {
      clocks: allClocks,
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
    this.setState({
      isStopped: false
    })
  }
  stopClocks = () => {
    this.setState({
      isStopped: true
    })
  }

  render() {
    const { clocks, date } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <Button title="PLAY" onPress={this.playClocks} />
        <Button title="STOP" onPress={this.stopClocks} />
        <VirtualizedList
          data={clocks}
          initialNumToRender={1}
          renderItem={({ item }) => (
            <ClockDetail
              {...item}
              date={date}
            />
          )}
          keyExtractor={(item: Clock) => item.id.toString()}
          getItemCount={() => clocks.length}
          getItem={(data, index) => clocks[index]}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: Constants.statusBarHeight
  },
});
