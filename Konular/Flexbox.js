import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Style } from "./Style";

export default function TestPage() {
    
    return (
        <View style= {Style.container}> {/* dış view tüm sayfayı kaplıyor ve mavi */}
            <StatusBar style="auto" />
            {/* dış viewin içinde bir parça belirledi rengi var ama içindekiler tamamen kapatıyor */}
            <View 
                style={{ 
                    width: 350, 
                    height: 100,  
                    flexDirection: "row" 
                }}> {/* flexdirection default olarak alt alta sıralar column*/}
                <View
                   style= {{ 
                    flex: 2, 
                    alignItems: "center",
                    // flex-start: solda, center: ortada, flex-end: sağda
                    justifyContent: "center" 
                    }}>
                    <View
                       style= {{ 
                        width: 70, 
                        height: 70, 
                        backgroundColor: "purple", 
                        borderRadius: 35, 
                    }}
                    ></View>
                </View>
                <View style= {{ flex: 4, justifyContent: "center" }}>
                    <Text style= {{ fontWeight: "bold", fontSize: 20}}>
                        Nurdan Tahsin</Text>
                    <Text style= {{ color: 'gray', fontSize: 15}}>
                        nurdantahsin@gmail.com</Text>
                </View>
                <View style= {{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style= {{ fontSize: 30, fontWeight: "bold", }}>
                        {">"}
                    </Text>
                </View>
            </View>
        </View>
    );
}  

// iç içe viewlerin boyutunu elle değiştirmek yerine flexbox kullanmak daha iyi