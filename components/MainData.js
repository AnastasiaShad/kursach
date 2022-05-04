import * as React from 'react';
import { View, Button, Text, StyleSheet, SafeAreaView, Pressable, TextInput, TouchableWithoutFeedback, ScrollView } from "react-native";
import { useState } from 'react';
import MyTimer from './Timer';
import {Keyboard, Platform} from 'react-native';

const MainData = ({ navigation, route }) => {

  const [postText, setPostText] = React.useState('');
  const [postText2, setPostText2] = React.useState('');
  return (
    <SafeAreaView style={{  marginTop:"5%"}}>
    <MyTimer/>
    <SafeAreaView style ={styles.center}>
    <SafeAreaView>
    <Text style={styles.textall}>1. Вдохните. </Text>
    </SafeAreaView>
       <SafeAreaView>
    <Text style={styles.textall}>2. Плотно прижмите руку ко рту и носу. </Text>
    </SafeAreaView>
      <SafeAreaView>
    <Text style={styles.textall}>3. Задержите дыхание. </Text>
    </SafeAreaView>
      <SafeAreaView>
    <Text style={styles.textall}>4. Замерьте время возможной остановки дыхания. </Text>
    </SafeAreaView>
    <SafeAreaView style = {{flexDirection: 'row',}}>
    <Text style={styles.textall}>5. Задержать дыхание и ввести полученное время в секундах: </Text>
   
   <TextInput
     
        placeholder="время"
        style={{ height: 35, padding: 10, backgroundColor: 'white',  borderRadius: 28, }}
        value={postText}
        onChangeText={setPostText}
        keyboardType='numeric'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        onSubmitEditing={Keyboard.dismiss}
        
      />
   
    </SafeAreaView>
       <SafeAreaView>
    <Text style={styles.textall}>6. Восстановив дыхание, выдохните. </Text>
    </SafeAreaView>
       <SafeAreaView>
    <Text style={styles.textall}>7. Задержать дыхание. </Text>
    </SafeAreaView>
       <SafeAreaView>
    <Text style={styles.textall}>8. Замерьте время возможного вдоха. </Text>
    </SafeAreaView>
    
    <SafeAreaView style = {{flexDirection: 'row',}}>
    <Text style={styles.textall}>9. Задержать дыхание и ввести полученное время в секундах: </Text>
   <TextInput
     
        placeholder="время"
        style={{ height: 35, padding: 10, backgroundColor: 'white', borderRadius: 28, }}
        value={postText2}
        onChangeText={setPostText2}
        keyboardType='number-pad'
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
      />
    
    </SafeAreaView>
      <SafeAreaView>
    <Text style={styles.textall}>10. Заполните данные! </Text>
    </SafeAreaView>
    </SafeAreaView>
    <SafeAreaView style={styles.fbutt}>   
      <Pressable  style={{ alignItems: 'center'}, styles.button}  onPress={() => {
          navigation.navigate({
            name: 'Test',
            params: { post: postText, post2: postText2 },
            merge: true,
          });
        }} >
        <Text style={{color:'#381758', fontSize:18, fontWeight: 'bold'}}>Заполнить данные</Text> 
        </Pressable>
    </SafeAreaView>
  
    
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  center: {

  marginLeft:"6%",
  marginTop:"5%"
  },
  textall : {
    fontSize:18, 
    color:'#381758', 
    paddingRight:'2%',
    paddingBottom:'3%',
  },
  button: {
    borderRadius: 28,
    padding: 6,
    height: 50,
    width: 227,
    backgroundColor:'#E59EE5',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
    
  },
    fbutt: {
    marginTop:'15%',
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingLeft:'5%',
    paddingRight:'5%',
  
   
    },
});
export default MainData;