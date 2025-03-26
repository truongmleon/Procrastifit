import { Image, StyleSheet, TextInput, View, StatusBar } from 'react-native';
import React, { useState } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />
      <Image
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        autoComplete="email"
        placeholder='Email Address'
        placeholderTextColor="#A9A9A9"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
      secureTextEntry
        style={styles.input}
        autoComplete="password"
        placeholder='Password'
        placeholderTextColor="#A9A9A9"
        value={password}
        onChangeText={setPassword}
      />
      <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        style={styles.button}
        onPress={async () => {
          try {
            const credential = await AppleAuthentication.signInAsync({
              requestedScopes: [
                AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                AppleAuthentication.AppleAuthenticationScope.EMAIL,
              ],
            });
            // signed in
          } catch (e) {
            if (e instanceof Error) {
              // if (e.code === 'ERR_REQUEST_CANCELED') {
              //   // handle that the user canceled the sign-in flow
              // } else {
              //   // handle other errors
              // }
            }
            
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "10%",
    resizeMode: 'contain',
    transform: [{ translateY: "-270%" }],
  },
  input: {
    height: 40,
    width: "70%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  button: {
    width: 200,
    height: 44,
  },
});