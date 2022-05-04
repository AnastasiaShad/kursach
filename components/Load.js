import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
const AppLoad = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
     <ActivityIndicator size="large" color="#381758"/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center', 
    backgroundColor: 'rgba(0,0,0,0.3)'
  }
});
export default AppLoad;