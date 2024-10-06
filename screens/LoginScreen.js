import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // FontAwesome icons

export default function LoginScreen({ navigation }) {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      {/* Email input with icon */}
      <View style={[styles.inputBox, emailFocused && styles.inputBoxFocused]}>
        <Icon name="envelope" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
      </View>

      {/* Password input with icon */}
      <View style={[styles.inputBox, passwordFocused && styles.inputBoxFocused]}>
        <Icon name="lock" size={20} color="green" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
  <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
</TouchableOpacity>


      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.switchScreenText}>Don't have an account? Register now</Text>
      </TouchableOpacity>
      {/* Separator Line */}
      <View style={styles.separator}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Google Button with your provided style */}
      <View style={styles.mediaOptions}>
        <TouchableOpacity style={styles.googleButton} onPress={() => {}}>
          <Image
            source={require('../assets/google.png')}  // Make sure to add a local Google logo image in your assets folder
            style={styles.googleImg}
          />
          <Text style={styles.googleButtonText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputBoxFocused: {
    borderBottomColor: 'green',  // Change underline to green on focus
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  forgotPasswordText: {
    color: 'green',
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchScreenText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },

  // Styles for the Google Button
  mediaOptions: {
    display: 'flex',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    marginTop: 20,
  },
  googleButton: {
    display: 'flex',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  googleImg: {
    width: 20,
    height: 20,
  },
});
