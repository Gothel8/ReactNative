import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Style } from "./Style";
// Vector icons import
import { AntDesign, Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function TestPage() {
    
    return (
        <View style={[Style.container, { gap: 20 }]}>
            <StatusBar style="auto" />
            
            {/* Farklı icon setlerinden örnekler */}
            <AntDesign name="heart" size={24} color="red" /> 
            <Feather name="star" size={24} color="gold" />
            <MaterialIcons name="favorite" size={24} color="pink" />
            <Ionicons name="home" size={24} color="blue" />
            
            {/* Icon'u buton gibi kullanma */}
            <AntDesign 
                name="pluscircle" 
                size={40} 
                color="green" 
                onPress={() => console.log('Icon tıklandı!')}
            />
            
            {/* Text ile birlikte kullanma */}
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name="user" size={20} color="gray" />
                <Text style={{ marginLeft: 8 }}>Profil</Text>
            </View>
            
        </View>
    );
}

// AntDesign yayıncı adı gibi, import ettiğinde bütün paketi import ediyorsun.
// Daha sonarda iconları kullanırken sadece isimlerini yazıyorsun.