import { Text, View, Button, StyleSheet, Modal} from 'react-native';
import { useState } from 'react';

export default function Modal() {
    const [ visible, setVisible ] = useState(false);

    return(
        <View style={styles.container}>
            <Button title= "modal" onPress = {() => setVisible(true)}/>
            <Modal visible = {visible} animationType = "slide">
                <View style={styles.modalView}>
                    <View style = {styles.modal}>
                        <Text style= {{ fontWeight: "bold", fontSize: 20 }}>Hello</Text>
                        <Button title = "close" onPress = {() => setVisible(false)}/>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    modal: {
        width: 300,
        height: 300,
        backgroundColor: '#e7ebeeff',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
});