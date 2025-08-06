import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Style } from "../../Style";
import FunctionalComp from "./Comps/FunctionalComp"; // default export, süslü parantez kullanmadan çağırabilirsin
import { ArrowComp } from "./Comps/ArrowComp"; // named export, süslü parantezle çağırmalısın

export default function Main() {
    return (
        <View style={[Style.container, { gap: 20 }]}>
            <StatusBar style="auto" />

            <FunctionalComp />
            <ArrowComp />
        </View>
    );
}

