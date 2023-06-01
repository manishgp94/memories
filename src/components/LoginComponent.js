import React from "react";
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

const LoginComponent = ({navigation}) => {

    const login = () =>{
        navigation.navigate("Home");
    }
  
    
    return (
      <View style={styles.loginContainer}>
        <Text style={styles.loginHeader}>Login</Text>
  
        <View>
          <Text style={styles.loginFieldText}>Email</Text>
          <TextInput style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
  
        <View>
          <Text style={styles.loginFieldText}>Password</Text>
          <TextInput style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>
  
        <TouchableOpacity style={styles.loginButton}
          onPress={() => login()}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    loginContainer: {
      height: "100%",
      padding: 40,
      backgroundColor: "#fff",
    },
    loginHeader: {
      fontSize: 30,
      color: "#000",
      marginTop: 100,
      fontWeight: 500,
    },
    loginFieldText: {
      fontSize: 18,
      color: "#000",
      marginTop: 50,
    },
    inputStyle: {
      borderBottomWidth: 1,
      borderBottomColor: "rgba(0,0,0,0.3)",
      color: "#000",
    },
    loginButton: {
      backgroundColor: "blue",
      padding:10,
      marginTop: 50,
      borderRadius: 5
    },
    loginButtonText: {
      textAlign: "center",
      color: "#fff",
      fontSize:18,
  
    }
  })
  

export default LoginComponent;