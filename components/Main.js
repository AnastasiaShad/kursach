import React from "react";
import { View, Button, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.center}>
    <SafeAreaView style={styles.ftext}>
    <Text style={{color:'#381758', fontSize:20, textAlign:'center'}}>Дыхательная система </Text>
    <Text style={{color:'#381758', fontSize:16, textAlign:'center'}}>(тест Штанге, тест Генча)</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.stext}>
    <Text style={{color:'#381758', fontSize:15, textAlign:'center'}} >Время проведения теста составляет около 5 минут.</Text>
    <Text style={{color:'#381758', fontSize:15, textAlign:'center', paddingTop:'4%'}}>Пожалуйста, прочитайте все описание до конца,
а затем приступайте к выполнению.</Text>
    </SafeAreaView>
    <SafeAreaView style={styles.fbutt}>   

    <Pressable
        onPress={() => navigation.navigate('Test')}
        style={{ alignItems: 'center'}, styles.button}
     
      >

      <Text style={{color:'#381758', fontSize:16}}>Начать</Text>
      </Pressable>

 </SafeAreaView>
   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  ftext: {
    marginTop:'-40%',
    textAlign: 'center',
    paddingLeft:'5%',
    paddingRight:'5%',
    marginLeft:'5%',
    marginRight:'5%'
  
   
    }, 
    stext: {
    marginTop:'10%',
    textAlign: 'center',
    paddingLeft:'3%',
    paddingRight:'3%',
    marginLeft:'4%',
    marginRight:'4%'
  
   
    }, 
    fbutt: {
    marginTop:'15%',
    textAlign: 'center',
    paddingLeft:'5%',
    paddingRight:'5%',
  
   
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
});

export default Main;