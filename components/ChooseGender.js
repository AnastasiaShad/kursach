
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Pressable, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons'; 


const GenderCh = ({onClick}) => {

  const [col, setCol] = useState('black')
  const [colm, setColm] = useState('black')
  const [gender, setGender] = useState('')

  const getImageForGender = (gender) =>{
    if (gender == 'женщина') {
      setCol('#c39ee5')
      setColm('#381758')
      setGender(gender)
      onClick('2')
    } else {
      setCol('#381758')
      setColm('#c39ee5')
      setGender(gender)
      onClick('1')
    }
  
}
  return (
  
      <SafeAreaView style = {{ marginTop:'5%' }}>
      <SafeAreaView style = {{ flexDirection: 'row' }}> 
      <Text style={{fontSize:18, color:'#381758', paddingRight:'3%'}}>Ваш пол: </Text>
      <Text style={{fontSize:18, color:'#381758', fontWeight: 'bold'}}>{gender}</Text>
       </SafeAreaView>
      
      <SafeAreaView style = {{flexDirection: 'row', marginTop:'5%' }}>
      <TouchableOpacity style = {{paddingLeft:'12%', paddingRight:'14%',}}
        onPress={()=>getImageForGender('женщина')}
       >
        <FontAwesome5 name="female" size={50} color={col} />
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>getImageForGender('мужчина')}
        >
        <FontAwesome5 name="male" size={50} color={colm} />
  </TouchableOpacity>
    </SafeAreaView>
      </SafeAreaView>
    
   
  );


  
}
export default GenderCh;