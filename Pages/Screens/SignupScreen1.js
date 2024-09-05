import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput,Button,Image} from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {useNavigation}  from '@react-navigation/native';
import BlankScreen1 from './BlankScreen';

export default function SignupScreen1() {
    const  navigation = useNavigation()

  const [Name, setName] =  useState("");
  const [LastName, setLastName] =  useState("");
  const [password, setPassword] =  useState("");
  const [errors, setErrors]= useState({});

  const validateForm  = () => {
    let errors = {}
    if(!Name) errors.name= "Name is Required"
    if(!LastName) errors.lastname= "Lastname is Required"
    if(!password) errors.password= "Password is Required"

    setErrors(errors)

    return  Object.keys(errors).length === 0;

  }
  const  handleSubmit = () => {
    if(validateForm()){
      console.log("Submitted", Name,LastName , password)
      setName ("");
      setLastName("");
      setPassword("");
      setErrors ({});
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Image source={require("../assets/splash.png")} style={styles.image}/>
          <Text style={styles.label}>Name</Text>
          <TextInput 
          style={styles.input} 
          placeholder='Enter your name' 
          value={Name} 
          onChangeText={setName} 
          />
          {
            errors.name ?  <Text style={styles.errorText}>{errors.name}</Text> : null
          }
          <Text style={styles.label}>Lastname</Text>
          <TextInput 
          style={styles.input} 
          placeholder='Enter Lastname' 
          value={LastName} 
          onChangeText={setLastName} 
          />
          {
            errors.lastname ?  <Text style={styles.errorText}>{errors.lastname}</Text> : null
          }
          <Text style={styles.label}>Password</Text>
          <TextInput 
          style={styles.input}  
          placeholder='Enter Your Password' 
          secureTextEntry={true}  
          value={password} 
          onChangeText={setPassword} 
          />
          {
            errors.password ?  <Text style={styles.errorText}>{errors.password}</Text> : null
          }
          <Button title="SignUp" onPress={() => navigation.navigate("BlankScreen")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form:{
    backgroundColor:"white",
    padding:20,
    borderRadius:10,
    shadowColor:"black",
    shadowOffset:{
      width:0,
      height:2
      },
    shadowOpacity:0.2,
    shadowRadius:4,
    elevation:5
  },
  label:{
    fontSize:16,
    marginBottom:5,
    fontWeight: "bold"
  },
  input:{
    height:40, 
    borderColor:"gray",
    borderWidth:1,
    marginBottom:15,
    padding:10,
    borderRadius: 5
  },
  image:{
    width:200,  
    height:200,
    alignSelf:"center",
    marginBottom:50
  },
  errorText:{
    color:"red",
    fontSize:15,
    marginBottom:5
  }
}); 
