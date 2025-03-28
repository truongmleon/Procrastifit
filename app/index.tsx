import { Image, StyleSheet, TextInput, View, StatusBar, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import * as Haptics from 'expo-haptics';
import * as AppleAuthentication from 'expo-apple-authentication';

const router = useRouter();

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
    Haptics.selectionAsync();
}

const forgotPassword = () => {
    Haptics.selectionAsync();
    router.navigate('/loginredirects/forgot'); 
}

const signUp = () => {
    Haptics.selectionAsync();
    router.navigate('/loginredirects/signup');
}

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showPassword = () => {
    Haptics.selectionAsync();
    
    if (isPasswordVisible) {
        setIsPasswordVisible(false)
    }
    else {
        setIsPasswordVisible(true)
    }
}

  return (
    <View style={styles.container}>
<StatusBar backgroundColor="#000000" barStyle="light-content" translucent={false} />      <Image
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
        secureTextEntry={!isPasswordVisible}
        style={styles.input}
        autoComplete="password"
        placeholder='Password'
        placeholderTextColor="#969696"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
      style={styles.hideShow}>
        <Text 
        onPress={() => {showPassword()}}
        style={styles.showPW}>Show</Text>
      </TouchableOpacity>
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
        onPress={signUp}>
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
    transform: [{ translateY: "-90%" }],
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
  hideShow: {
    paddingLeft: 170,
    transform: [{ translateY: "-270%" }],
  },
  showPW: {
    color: "#007cce",
    textAlign: 'right',
    fontSize: 12,
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
    height: "57%",
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
    shadowColor: 'rgba(54, 56, 57, 0.2)',
    shadowOffset: {width: 14, height: 10},
    shadowOpacity: 0.2,
    shadowRadius: 9,
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