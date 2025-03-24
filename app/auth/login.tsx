import { Image, StyleSheet, Platform } from 'react-native';

import Login from '@/components/Login';

export default function HomeScreen() {
  return (
    <Login
      headerImage={
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
      }>
     
    </Login>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  logo: {
    height: 208,
    width: 890,
  }
});
