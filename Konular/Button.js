import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

export default function Button() {
    const [count, setCount] = useState(0);
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <View style={styles.buttonContainer}> {/* butonlar stillendirilemez tek yolu view içine almak */}
                {/* jsx içinde yorum satırını ancak böyle ekleyebilirsin */}
                <Button
                    title="Arttır" // olması zorunlu
                    onPress={() => {setCount((current) => current + 1)} }
                    touchSoundDisabled={true} // buton tıklama sesi kapalı
                    color={"#128d37ff"}
                />
            </View>
            
            <View style={styles.buttonContainer}>
                <Button
                    title="Azalt" // olması zorunlu
                    onPress={() => {setCount((current) => current - 1)}}
                    touchSoundDisabled={true} // buton tıklama sesi kapalı
                    color={"#9a2816ff"}
                />
            </View>
            <Text style={styles.countText}>{count}</Text>
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff', // rengin adını direkt yazcaksan # koyma
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: 120,
        marginVertical: 10,
    },
    countText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 15,
    },
});
