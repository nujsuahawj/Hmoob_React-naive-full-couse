


import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  ToastAndroid,
} from 'react-native';
import { and } from 'react-native-reanimated';

const App = () => {

  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [school, SetSchool] = useState('');
  const [submitted, SetSubmitted] = useState(false);
  const onPressHandler = () => {

    if( name.length < 3 )
    {
      Alert.alert(
            'ກະລຸນາປະຕິດບັດຕາມ',
            'ກະລຸນາປ້ອນຊື່', [
            {
              text: 'ຕົກລົງ'
            },
          ],
            {
              cancelable: true,
              onDismiss: () => console.warn('Alert dismissed!')
            })
    }else if( email.length < 3 )
    {
      Alert.alert(
        'ກະລຸນາປະຕິດບັດຕາມ',
        'ກະລຸນາປ້ອນ email', [
        {
          text: 'ຕົກລົງ',
          //onPress: () => console.warn('ຕົກລົງ')
        },
      ],
        {
          cancelable: true,
          onDismiss: () => console.warn('Alert dismissed!')
        })
 
    }else if( school.length < 3 )
    {
      Alert.alert(
        'ກະລຸນາປະຕິດບັດຕາມ',
        'ກະລຸນາປ້ອນ ໂຮງຮຽນ', [
        {
          text: 'ຕົກລົງ',
         // onPress: () => console.warn('ຕົກລົງ')
        },
      ],
        {
          cancelable: true,
          onDismiss: () => console.warn('Alert dismissed!')
        })
    }
    else{
      SetSubmitted(!submitted);
    }

  }

  return (
    <View style={styles.body}>
      <Text style={styles.texts}>
        ຟອມລົງທະບຽນ
      </Text>
      <TextInput
        style={styles.input}
        placeholder='ກະລຸນາປ້ອນຊື່'
        onChangeText={(value) => SetName(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='ກະລຸນາປ້ອນ email'
        onChangeText={(value) => SetEmail(value)}
      />
      <TextInput
        style={styles.input}
        placeholder='ກະລານາປ້ອນ ໂຮງຮຽນ'
        onChangeText={(value) => SetSchool(value)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
        android_ripple={{ color: '#00f' }}
        style={({ pressed }) => [
          { backgroundColor: pressed ? '#dddddd' : '#00ff00' },
          styles.button
        ]}
      >
        <Text style={styles.text}>
          {submitted ? 'ລ້າງ' : 'ສົ່ງ'}
        </Text>
      </Pressable>
      {submitted ?
        <Text style={styles.text}>
           {name}
        </Text>
        :
        null
      }
      {submitted ?
        <Text style={styles.text}>
           {email}
        </Text>
        :
        null
      }
      {submitted ?
        <Text style={styles.text}>
           {school}
        </Text>
        :
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  texts: {
    color: '#000000',
    fontSize: 30,
    margin: 10,
    marginTop:40,
    marginBottom:40,
    color:'blue',
  },
  input: {
    width: 300,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 10,
    marginTop:20,
  },
});