import React from "react";
import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    container: {
        flex: 1, // ekranın tamamını kapla
        backgroundColor: "#ebf3f6ff",
        alignItems: "center", // yatayda ortala
        justifyContent: "center", // dikeyde ortala
    }, 
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
        backgroundColor: "#f0f0f0",
        padding: 10, // metin etrafında boşluk, kutu
        margin: 10, // metin etrafında boşluk, dışarıda
    },
    class1: {
        color: "purple",
        fontSize: 20,
    },
    class2: {
        color: "blue",
        fontSize: 30,
    }
});
