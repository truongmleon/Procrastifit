import { Image, StyleSheet, Platform, View, StatusBar } from 'react-native';

import * as AppleAuthentication from 'expo-apple-authentication';
import { ThemedText } from '@/components/ThemedText';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="dark-content" />
      <Image
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
      />
      <ThemedText style={{ fontSize: 20, marginBottom: 20 }}>
        SignWelcome
      </ThemedText>
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