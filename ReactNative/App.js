import React, { useState } from 'react';
import { View, Button, Alert, Text, Image, StyleSheet } from 'react-native';

export default function App() {
    const [sayi, setSayi] = useState(0);
    const [kirildi, setKirildi] = useState(false);

    const handleClick = () => {
        if (sayi + 1 >= 10) {
            setKirildi(true);
        } else {
            setSayi(sayi + 1);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={
                    kirildi
                        ? require('./assets/kirik-yumurta.jpg') // kırık yumurta görseli
                        : require('./assets/yumurta.jpg') // normal yumurta görseli
                }
                style={styles.avatar}
            />
            <Text style={styles.text}>
                {kirildi ? 'Yumurta kırıldı!' : `Yumurtayı kırmak için tıkla! (${sayi})`}
            </Text>
            {!kirildi && (
                <Button title="Tıkla" onPress={handleClick} />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    avatar: { width: 150, height: 150, marginBottom: 20 },
    text: { fontSize: 20, margin: 10 },
});