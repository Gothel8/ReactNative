import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Person } from './Person';

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Person name="M.furkan" surname="Ardoğan" color="#BFDFFD" />
      <Person name="Ali" surname="Eroğlu" color="#E0FFD9" />
      <Person name="Serdar" surname="Yıldız" color="#FFE0D9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
