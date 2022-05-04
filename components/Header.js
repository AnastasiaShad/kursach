import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import * as React from 'react';
import { Dimensions } from 'react-native';
const width =  Dimensions.get('window').width
export default function Header() {
    return (
      <View style={styles.main}>
        <Text style={styles.text}>Уровень развития дыхательной системы</Text>
      </View>
    );
  }
  const styles = StyleSheet.create({
    main: {
    paddingTop:50,
    height:100,
    backgroundColor:'#DECAF1',

    },
    text: {
      
      fontSize:0.05*width,
      color: '#1C0C2C',
      fontFamily:'Arial',
      textAlign:'center'

    }
  });
  