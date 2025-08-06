import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput } from "react-native";
import { Style } from "./Style";
import { useState } from "react";

export default function TestPage() {
    const [name, setName] = useState("");
    return (
        <View style={[Style.container, { gap: 20 }]}>
            <StatusBar style="auto" />
            
            <TextInput
              style ={{ 
                height: 50,
                width: 200, 
                borderWidth: 1, 
                padding: 10 
                }} 
                placeholder="Kullanıcı Adı" 
                placeholderTextColor={"purple"}
                // words: kelime, sentences: cümle, characters: harf
                autoCapitalize="none"
                // multiline varken bu mantıklı değil, gör diye
                maxLength={20}
                // normalde aynı satırda dümdüz devam ediyo
                multiline={true}
                // bu inputu direkt kitliyor. mesela önce kullanıcı adı yazıp sonra şifre yazmak için
                editable={true}
                // @ ve .com klavyeye gelir. decimal dersen sadece sayılar gelir
                inputMode= "email"
                value= {name}
                onChangeText={(e) => setName(e)}
                /> 
        </View>
    );
}

