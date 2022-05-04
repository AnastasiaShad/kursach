
import * as React from 'react';
import { View, StyleSheet, Text, SafeAreaView, Pressable, Alert, Platform } from "react-native";
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import GenderCh from './ChooseGender'
import AppLoad from './Load'


const fullMonth = ['январь','февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август','сентябрь','октябрь','ноябрь','декабрь'];

const Test = ({navigation, route}) => {
  React.useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params?.post]);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Выбрать дату');
  const [gend, setGend] = useState('')
  const [res, setRes] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = (event, selectedDate) => {
    
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    let cDate = new Date(currentDate);
    let fDate = cDate.getDate() + ', ' + fullMonth[cDate.getMonth()]+ ' '+ cDate.getFullYear()
    setDay(cDate.getDate())
    setMonth(cDate.getMonth()+1)
    setYear(cDate.getFullYear())
    setText(fDate)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);

  };

  const showDatepicker = () => {
    showMode('date');
  };
  const checkGend = (gg) => {
      setGend(gg)
  }
const fullbody = 'day='+day+'&month='+month+'&year='+year+'&sex='+gend+'&m1='+route.params?.post+'&m2='+route.params?.post2;
  	const requestOptions = {
		method: 'POST',
    headers: {
      "Host": "abashin.ru",
      "Connection": "close",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3);q=0.9",
      "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
		body:fullbody
	};

	const postServer = async () => {
		try {
       setLoading(true)
			await fetch(
				"http://abashin.ru/cgi-bin/ru/tests/lungs", requestOptions)
        .then(response => {
          console.log(response.status)
          response.text()
						.then(array => {
              console.log(array)
              navigation.navigate('Result', {paramRes: array})
            
						});
				})
        setLoading(false)
       
		}
		catch (error) {
			console.error(error);
		}
	}
  const checksAnswers = () => {
    if (day === '' || month === '' || year === '' || gend === '' || route.params?.post === '' || route.params?.post2 === '') {
        Alert.alert(
             "Внимание",
      "Введены неполные данные, проверьте еще раз",
      [
        {
          text: "Отмена",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OК", onPress: () => console.log("OK Pressed") }
      ]

        );
    } else {
        postServer()
    }


  }
  return (
    <>
    <SafeAreaView >
    <SafeAreaView style={styles.center}>
      <SafeAreaView style = {{flexDirection: 'row',}}>
      <Text style={{fontSize:18, color:'#381758', paddingRight:'2%'}}>Ваш день рождения:</Text>
        <Pressable onPress={showDatepicker} >
        <Text style={{color:'#381758', fontSize:18, fontWeight: 'bold'}}>{text}</Text> 
        </Pressable>
      </SafeAreaView>
     

      
      <SafeAreaView>
      <GenderCh  onClick = {checkGend} />
      
      <SafeAreaView style={{marginTop:'5%'}}>
       <Pressable onPress={() => navigation.navigate('MainData')} >
        <Text style={{color:'#381758', fontSize:18, fontWeight: 'bold', paddingBottom:'3%'}}>Получить данные о времени</Text> 
        </Pressable>
      <Text style={{paddingBottom:'3%', fontSize:18, color:'#381758', }}>Первое время: {route.params?.post}</Text>
      <Text style={{ fontSize:18, color:'#381758', }}>Второе время: {route.params?.post2}</Text>
      
      </SafeAreaView>
     
      </SafeAreaView>
      </SafeAreaView>
       <SafeAreaView style={styles.fbutt}>   

    <Pressable
        onPress={checksAnswers}
        style={{ alignItems: 'center'}, styles.button}
     
      >

      <Text style={{color:'#381758', fontSize:16}}>Отправить данные</Text>
      </Pressable>
      
      </SafeAreaView>
      {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            locale={'ru'}
            
          />
        )}
    
     </SafeAreaView>
     {loading ? <AppLoad/> : null}
     </>
  );
}

const styles = StyleSheet.create({
  center: {

  marginLeft:"10%",
  marginTop:"10%"
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
 
    },
});
export default Test;