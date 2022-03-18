import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Task  from './component/Task';


export default function App() {
  return (
    <View style={styles.container}>
      
      {/*Today's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          <Task text={'Read CSC 411'} />
          <Task text={'Go to chapel'}/>
          <Task text={'Go to Library'}/>

        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
sectionTitle: {
  fontSize: 24,
  fontWeight: 'bold'
},
items: {
  marginTop: 30,
},
});
