import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Counter } from './Counter';

export default function Main() {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <Counter />
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