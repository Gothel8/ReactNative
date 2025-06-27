import React, { useState } from 'react';
// Gerekli React Native bileşenlerini içe aktar
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function App() {
  // isim: Kullanıcının girdiği ismi tutar
  // setIsim: ismi değiştirmek için kullanılır
  const [isim, setIsim] = useState('');
  // mesaj: Selam mesajını tutar
  // setMesaj: mesajı değiştirmek için kullanılır
  const [mesaj, setMesaj] = useState('');

  // Butona basıldığında çalışacak fonksiyon
  const handleButonPress = () => {
    // mesaj değişkenini günceller
    setMesaj(`Merhaba, ${isim}!`);
  };

  return (
    // Uygulamanın güvenli alanında çalışmasını sağlar (çentik, durum çubuğu vs. için)
    <SafeAreaView style={styles.safeArea}>
      {/* ScrollView: İçeriğin taşması durumunda kaydırma sağlar */}
      <ScrollView contentContainerStyle={styles.container}> 
        {/* React logosu */}
        <Image 
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} // Görselin kaynağı (URL)
          style={styles.logo} // Görselin stili
          resizeMode="contain" // Görselin oranını koruyarak sığdır
        />

        {/* Başlık metni */}
        <Text style={styles.baslik}>İsminizi Girin:</Text>

        {/* Kullanıcıdan isim almak için metin kutusu */}
        <TextInput
          style={styles.input} // Kutunun stili
          placeholder="Adınızı yazın" // Kutuda görünen açıklama
          value={isim} // Kutunun değeri (isim state'i ile bağlı)
          onChangeText={setIsim} // Her değişiklikte isim state'ini günceller
        />

        {/* Selamla butonu */}
        <TouchableOpacity style={styles.buton} onPress={handleButonPress}>
          <Text style={styles.butonYazi}>Selamla</Text>
        </TouchableOpacity>

        {/* Eğer mesaj boş değilse ekranda göster */}
        {mesaj !== '' && <Text style={styles.mesaj}>{mesaj}</Text>}
      </ScrollView>
    </SafeAreaView>
  );
}

// Uygulamanın tüm görsel stilleri burada tanımlanır
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // Arka plan rengi
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center', // Dikeyde ortala
    alignItems: 'center',     // Yatayda ortala
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  baslik: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    borderRadius: 8,
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  butonYazi: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  mesaj: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
});