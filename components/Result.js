
import * as React from 'react';
import { useState, useRef } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Pressable, TouchableOpacity, StatusBar, Animated } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProgressBar = ({ step, steps, height, color}) => {
  const [width, setWidth] = useState(0);
  const animatedVal = React.useRef(new Animated.Value(-1000)).current;
  const reactive = React.useRef(new Animated.Value(-1000)).current;
  React.useEffect(()=> {
    Animated.timing(animatedVal, {
      toValue: reactive, 
      duration:300,
      useNativeDriver:true,

    }).start();
  }, []);
  React.useEffect(()=>{
    reactive.setValue(-width+(width*step)/steps);
  }, [step, width])

  return (
      <>
      <Text style={{fontFamily:'Menlo', fontSize:12, fontWeight:'900', marginBottom:8}}>
      {step}/{steps}
      </Text>
      <View 
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
      style={{height,
      backgroundColor:'rgba(0,0,0,0.1)',
      borderRadius:height, 
      overflow:'hidden'}}>


      <Animated.View style={{height,
      width: '100%',
      backgroundColor:color,
      borderRadius:height, 
      position:'absolute',
      left:0,
      top:0, 
      transform: [{
        translateX: animatedVal,
      }]}} />
      
      </View>
      </>
  );
};



const Result = ({navigation, route}) => {
  
  const [col, setCol] = useState('')
 const [index, setIndex] = useState(1);
  React.useEffect(()=>{
   
   const interval = setInterval(()=> {
     if (index<=chInd()){
        setIndex((index+1)%(10+1))
     }
     
   }, 200);
  
    return () => {
     clearInterval(interval);
   }
   
  }, [index])
  const chInd = () => {
    if ((route.params.paramRes).includes('Error')) {
      return 0
    } else if ((route.params.paramRes).includes('Хорошо.')) {
        return 9
    }
    else if ((route.params.paramRes).includes('Средне.')) {
      return 4
    }
    else if ((route.params.paramRes).includes('Плохо.')) {
      return 2
    }
  }
  const chCol = () => {
    if ((route.params.paramRes).includes('Хорошо.')) {
   
        return '#95C799'
    }
    else if ((route.params.paramRes).includes('Средне.')) {
      
      return '#B3A37D'
    }
    else if ((route.params.paramRes).includes('Плохо.')) {
     
      return '#A66A4C'
    }
  }
    const chEm = () => {
    if ((route.params.paramRes).includes('Хорошо.')) {

        return 'emoji-happy'
    }
    else if ((route.params.paramRes).includes('Средне.')) {
      
      return 'emoji-neutral'
    }
    else if ((route.params.paramRes).includes('Плохо.')) {
     
      return 'emoji-sad'
    }
  }
  
  if (!(route.params.paramRes).includes('Error')) {
    if ((route.params.paramRes).includes('502')){
      return (
        <SafeAreaView style={styles.container}>
        <SafeAreaView style={styles.textcon}>
        <Text style={{fontSize:24, 
        color:'#381758', fontWeight: 'bold'}}>502</Text>
        <Text style={{fontSize:18, 
        color:'#381758', paddingTop:10}}>Bad Gateway</Text>
        </SafeAreaView>
        
          <StatusBar hidden />

      
      </SafeAreaView>
  );
  } else {
      const mainRes = (route.params.paramRes).substr(52).slice(0, -14)
    const massRes = mainRes.split(' ');
    
  return (
    <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.textcon}>
    <Text style={{fontSize:24, 
    color:'#381758', fontWeight: 'bold'}}>{mainRes.split(' ')[0]}</Text>
    
    <Text style={{fontSize:18, 
    color:'#381758', paddingTop:20, textAlign:'center'}}>{massRes.slice(1, massRes.length).join(' ')}</Text>
    </SafeAreaView>
    <SafeAreaView style={{marginBottom:'40%'}}>
      <StatusBar hidden />
      <ProgressBar step={index} steps={10} height={20} color={chCol()}/>
    <SafeAreaView style={{marginTop:'10%',  alignItems: "center",}}>
    <Entypo name={chEm()} size={94} color="#381758" />
    </SafeAreaView>
    </SafeAreaView>
   
    </SafeAreaView>
  );
  }
  
} else if ((route.params.paramRes).includes('Error')) {
  
  return (
    <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.textcon}>
    <Text style={{fontSize:24, 
    color:'#381758', fontWeight: 'bold'}}>Error</Text>
    <Text style={{fontSize:18, 
    color:'#381758', paddingTop:10}}>Проверьте данные на корректность</Text>
     </SafeAreaView>
    
      <StatusBar hidden />
      <ProgressBar step={index} steps={10} height={20} color={'rgba(0,0,0,0.5)'}/>
    <SafeAreaView style={{marginTop:'10%',  alignItems: "center",}}>
    <MaterialIcons name="error-outline" size={94} color="#381758" />
    </SafeAreaView>
   
   </SafeAreaView>
  );
   
} 
}

const styles = StyleSheet.create({
  container: {
   
    justifyContent: "center",
    textAlign: "center",
    marginLeft:20,
    marginRight:20,
    marginTop:'40%'

   
  },
  textcon: {
    alignItems: "center",
    marginBottom:5,
    marginTop:'10%',
    
    paddingBottom:'10%',
    



  }
});
export default Result;