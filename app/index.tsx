import { Image, StyleSheet, TextInput, View, StatusBar, Text, Button } from 'react-native';
import React, { useState } from 'react';
import * as AppleAuthentication from 'expo-apple-authentication';

const AppleButton: React.FC = () => {
  return <AppleAuthentication.AppleAuthenticationButton
    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
    cornerRadius={100}
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
}

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
  <StatusBar backgroundColor="#000000" barStyle="dark-content" translucent={false} />

      <Image
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
      />
      <View style={styles.card}>
        <Text style={styles.signin}>Lock in.</Text>
      <TextInput
        style={styles.input}
        autoComplete="email"
        placeholder='Email'
        placeholderTextColor="#969696"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
      secureTextEntry
        style={styles.input}
        autoComplete="password"
        placeholder='Password'
        placeholderTextColor="#969696"
        value={password}
        onChangeText={setPassword}
      />
      <Button
        title="Sign in"
        accessibilityLabel="sign-in"
        />
      <View style={styles.otherSignIn}>
        <View style={styles.line} />
        <Text style={styles.text}>or</Text>
        <View style={styles.line} />
      </View>
      <AppleButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "10%",
    resizeMode: 'contain',
    transform: [{ translateY: "-120%" }],
  },
  input: {
    height: "12%",
    width: "80%",
    margin: 12,
    borderWidth: 1.4,
    borderRadius: 5,
    padding: 10,
    borderColor: '#A9A9A9',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  signin: {
    width: "89%",
    color: '#000000',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
    padding: 15,
    paddingBottom: 5
  },
  signButton: {
    color: "#fafafa",
    backgroundColor: "#007cce",
    borderRadius: 100,
  },
  card: {
    alignContent: 'center',
    alignItems: 'center',
    width: "85%",
    shadowColor: 'rgba(116, 120, 124, 0.2)',
    shadowOffset: {width: 24, height: 20},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#fafeff',
    borderRadius: 9,
  },
  button: {
    width: 200,
    height: 44,
    borderRadius: 100,
  },
  otherSignIn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    width: '10%',
    marginHorizontal: 30,
    backgroundColor: '#A9A9A9',
  },
  text: {
    marginHorizontal: -20,
    color: '#A9A9A9',
    fontSize: 16,
  },
});