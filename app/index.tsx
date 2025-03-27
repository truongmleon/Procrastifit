import { Image, StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as Haptics from 'expo-haptics';
import * as AppleAuthentication from 'expo-apple-authentication';

const AppleButton: React.FC = () => {
  return <AppleAuthentication.AppleAuthenticationButton
    buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
    buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
    cornerRadius={100}
    style={styles.button}
    onPress={async () => {
      Haptics.selectionAsync()
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

const regularSignIn = () => {
    Haptics.selectionAsync()
}

const forgotPassword = () => {
    Haptics.selectionAsync()
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
      <TouchableOpacity
        style={styles.button}
        onPress={forgotPassword}
      >
        <Text style={styles.redirects}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
        onPress={regularSignIn}
      >
        <Text style={styles.signButton}>Sign in</Text>
      </TouchableOpacity>
      <View style={styles.otherSignIn}>
        <View style={styles.line} />
        <Text style={styles.otherText}>or</Text>
        <View style={styles.line} />
      </View>
      <AppleButton />
      </View>
      <Text style={styles.signup}>New here? Whatever.
        <TouchableOpacity
        style={styles.button}
        onPress={forgotPassword}>
          <Text style={styles.redirects}>Join and lock in.</Text>
      </TouchableOpacity>
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: "10%",
    resizeMode: 'contain',
    transform: [{ translateY: "-110%" }],
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
  redirects: {
    color: "#007cce",
    textAlign: 'left',
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
  signup: {
    marginTop: -20
  },
  signButton: {
    color: "#fafafa",
    backgroundColor: "#007cce",
    borderRadius: 100,
    height: 44,
    textAlign: 'center',
    paddingTop: 10,
  },
  card: {
    transform: [{ translateY: "-10%" }],
    alignContent: 'center',
    alignItems: 'center',
    width: "85%",
    height: "55%",
    shadowColor: 'rgba(76, 78, 81, 0.2)',
    shadowOffset: {width: 24, height: 30},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#fafeff',
    borderRadius: 9,
  },
  button: {
    width: "80%",
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
  otherText: {
    marginHorizontal: -20,
    color: '#A9A9A9',
    fontSize: 16,
  },
});