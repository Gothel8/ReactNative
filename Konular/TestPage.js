import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Style } from "./Style";

export default function TestPage() {
    return (
        <View style={[Style.container, { gap: 20 }]}>
            <StatusBar style="auto" />

            
        </View>
    );
}

