import { StatusBar } from "expo-status-bar";
import { Alert, Button, StyleSheet, View } from "react-native";


export default function Alert() {

    // bu basit fonksiyonlar için kullanılır
    const alertMe = () => {
        alert("Button Pressed!"); 
    }

    // kişiselleştirilebilir
    const alertMe2 = () => { 
        Alert.alert("Alert Title", "This is an alert message.", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
          },
          {
            text: "OK",
            onPress: () => console.log("OK Pressed"),
          },  
        ]); 
    };

    return (
    
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Button title= "Press" onPress={alertMe} />
            <Button title= "Press 2" onPress={alertMe2} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }, 
});