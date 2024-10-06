import React,{useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LoginScreen({ navigation }) {
  const [emailFocused, setEmailFocused] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      {/* Email input with icon */}
      <View style={[styles.inputBox, emailFocused && styles.inputBoxFocused]}>
        <Icon name="envelope" size={20} color="green" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Enter your email" keyboardType="email-address"
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.switchScreenText}>Back to Login</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: 'green',
    borderRadius: 6,
    padding: 10,
    alignItems: 'center',
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
});
