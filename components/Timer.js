import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Pressable, TextInput } from 'react-native';

let timer = () => {};

const myTimer = () => {
    const [timeLeft, setTimeLeft] = useState(0);
 
    const startTimer = () => {
        timer = setTimeout(() => {
            if(timeLeft >= 370){
                setTimeLeft(0);
                clearTimeout(timer);
                return false;
            }
     
          setTimeLeft(timeLeft+1);
         // }
         
        }, 1000)
     }

     useEffect(() => {
         startTimer();
         return () => clearTimeout(timer);
     });    

    const start = () => {
        //setMin(4);
        setTimeLeft(0);
        clearTimeout(timer);
        startTimer();
    }

    return (
       <SafeAreaView style = {{flexDirection: 'row',justifyContent: "center", alignItems: "center", textAlign: "center",marginTop:'3%'}}>
          <Text style={{fontSize:18, 
    color:'#381758', paddingRight:'5%', paddingTop:'3%'}}> секунды: {timeLeft}</Text>
           <Pressable  style={{ alignItems: 'center',  paddingTop:'3%'}}  onPress={start}>
          <Text style={{color:'#381758', fontSize:18, fontWeight: 'bold'}}>Рестарт</Text> 
        </Pressable>
    
    </SafeAreaView>
)}



export default myTimer;