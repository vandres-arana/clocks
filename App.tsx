import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, VirtualizedList } from 'react-native';
import Constants from 'expo-constants';

import ClockDetail from './screens/ClockDetail';
import { allClocks } from './App.api';
import Clock from './models/Clock';
import Header from './screens/Header';

const App: React.FC = () => {
  const clocks: Clock[] = allClocks;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isStopped, setIsStopped] = useState(false);
  
  const updateDate = () => {
    if (!isStopped) {
      setCurrentDate(new Date());
    }
  }

  const playClocks = () => {
    setIsStopped(false);
  }

  const stopClocks = () => {
    setIsStopped(true);
  }

  setInterval(updateDate, 1000);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header
        playClocks={playClocks}
        stopClocks={stopClocks}
      />
      <VirtualizedList
        data={clocks}
        initialNumToRender={1}
        renderItem={({ item }) => (
          <ClockDetail
            {...item}
            date={currentDate}
          />
        )}
        keyExtractor={(item: Clock) => item.id.toString()}
        getItemCount={() => clocks.length}
        getItem={(data, index) => clocks[index]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: Constants.statusBarHeight,
  },
});

export default App;