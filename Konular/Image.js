import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";

export default function Image() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Image source={require("../assets/icon.png")} style={{ height: 300, width: 300 }} /> {/* iki nokta kaç kere yukarı çıkacağını söylüyo */}
            <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={{ height: 300, width: 300 }} />
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