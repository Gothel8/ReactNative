import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import React, { useState } from "react";
import { Style } from "./Style"; // Style.js dosyasından stil import ediliyor

export default function Stil() {
    const [flag, setFlag] = useState(false);
    return (
    
        <View style={Style.container}>
            <StatusBar style="auto" />
        
            <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>nurdan</Text>
            <Text style= {[Style.text, {fontSize: 40}]}>Tahsin</Text> 
            {/*    ^ style prop'u birden fazla stil alabilir, sona yazılan baskın gelir */}
            <Text style={[Style.text , {color: flag ? "green" : "red"}]}>Flag Text</Text>

            <Text style={flag ? Style.class1 : Style.class2}>{flag ? "True" : "False"}</Text>

        </View>
    );
}  


// JSX'te süslü parantez kullanımları:
// 1. Tek {}: JavaScript ifadesi (değişken, fonksiyon, hesaplama)
// 2. Çift {{}}: JavaScript objesi (stil, props objesi vb.)
// 3. İç süslü parantez = JS obje literal syntax
// 4. Dış süslü parantez = JSX expression wrapper