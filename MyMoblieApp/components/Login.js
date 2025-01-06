import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Logo from './Logo';
import Footer from './Footer';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';
import { students } from './StudentsDb';

export default function Login({ navigation, setUser }) {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });
  const [showpassword, setShowPassword] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const login = () => {
    const user = students.find(student => student.username === form.username && student.password === form.password);
    if (user) {
      setUser(user)
      navigation.navigate('BottomTabs', { user });
    } else {
      setShowErrorMessage(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>STUDENT LOGIN</Text>
        <TextInput
          label="Username"
          style={styles.input}
          mode='outlined'
          value={form.username}
          onChangeText={(text) => {
            setShowErrorMessage(false);
            setForm({
              ...form,
              username: text
            });
          }}
        />
        <TextInput
          label="Password"
          secureTextEntry={!showpassword}
          style={styles.input}
          right={<TextInput.Icon 
            icon={showpassword ? 'eye-off' : 'eye'}
            onPress={() => setShowPassword(!showpassword)} />}
          mode='outlined'
          value={form.password}
          onChangeText={(text) => {
            setShowErrorMessage(false);
            setForm({
              ...form,
              password: text
            });
          }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={login}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {showErrorMessage && 
          <View style={styles.error}>
            <Image 
              source={require('../assets/icons/error.png')} 
              style={styles.errorIcon}
            /> 
            <Text style={styles.errorText}>Please check your username and password</Text>
          </View>
        }
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin:50,
  },
  footerContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    marginTop: -50,
    paddingBottom: 40,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4b0150',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  error: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#F3E5F5',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  errorIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 10,
  },
  errorText: {
    fontSize: 14,
    fontWeight:600,
    flex: 1,
  }
});