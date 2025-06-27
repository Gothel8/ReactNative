// 🟣=============================
// REACT NATIVE KAVRAM NOTLARI
// =============================

/*
✅ Self-closing nedir?
- Kapanış etiketi olmadan yazılan, kendi kendini kapatan tag.
- Örnek:
  <Image /> // self-closing
  <Image></Image> // aynı anlama gelir, ama uzun yazım
*/

/*
✅ SafeAreaView kullanmak her zaman mantıklı mı?
- iOS cihazlarda üstteki çentik vb. yüzünden mantıklıdır.
- Android’de şart değildir ama çapraz platform uyumu için kullanılır.
*/

/*
✅ Alert nedir, nerede kullanılır?
- Ekrana pop-up şeklinde bilgi, uyarı, onay mesajı çıkarır.
- Örnek:
  Alert.alert("Uyarı", "Kaydedildi!");
*/

/*
✅ console.log appte gözükür mü?
- Hayır, sadece terminalde (VSCode console veya Expo console) görünür.
- Kullanıcıya göstermez.
*/

// ==============================
// COMPONENT KAVRAMLARI
// ==============================

/*
✅ Component ne demek?
- Ekranda görünen veya görünmeyen yapı taşlarıdır.
- Örn: Buton, Text, View, ScrollView hepsi componenttir.
- React Native componentlerin birleşimiyle app oluşturur.
*/

/*
✅ TouchableOpacity vs Pressable farkı?
- TouchableOpacity:
  - Dokununca opacity (saydamlık) değişir, klasik buton etkisi.
- Pressable:
  - Daha esnek, basılı tutma gibi eventleri de yakalar.
  - Yeni projelerde genelde Pressable tercih edilir.
*/

/*
✅ FlatList ne zaman kullanılır?
- Çok sayıda liste elemanı varsa (ör. 1000 ürün) performanslı render için.
- ScrollView tüm listeyi yükler, FlatList sadece görünen kısmı yükler.
*/

/*
✅ ScrollView vs FlatList farkı?
- ScrollView:
  - Az elemanlı listeler için.
  - Tüm içeriği RAM’e yükler.
- FlatList:
  - Çok elemanlı listeler için.
  - Görünen kadarını yükler, performans dostudur.
*/

// JSX İçinde Değişken Kullanımı ve Template Literal Farkı

// React Native'de JSX yapısı içinde JavaScript ifadelerini göstermek için süslü parantez {} kullanılır.
let isim = "Nurdan";

// JSX örneği: isim değişkenini Text içinde göstermek için
// Ekranda "Nurdan" yazacaktır
// <Text>{isim}</Text>

// ----------------------------------------------

// Template literal (şablon string) ise JavaScript'in bir özelliğidir.
// String içine değişken veya ifade gömmek için ters tırnak ` ve ${} kullanılır.

console.log(`Merhaba, ${isim}`);  // Konsola "Merhaba, Nurdan" yazar

// ----------------------------------------------

// Özet:
// JSX (React Native içinde)           => {isim}
// JavaScript string birleştirme       => `Merhaba, ${isim}`

// Not: JSX içinde template literal kullanmak için süslü parantezle birlikte kullanmalısın:
// <Text>{`Merhaba, ${isim}`}</Text>


// ===== React Native Temel Konuları =====

// 1. JSX ve Component Yapısı
// React Native'de arayüzler JSX ile yazılır. JSX, JavaScript içinde HTML benzeri yapıdır.
// Componentler (bileşenler) UI parçalarıdır. Fonksiyon olarak yazılırlar ve UI dönerler.

import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Merhaba React Native!</Text>
    </View>
  );
}

// 2. Temel Bileşenler (Components)
// View: Kutu, blok yapar. Container gibi.
// Text: Ekrana yazı yazdırır.
// Image: Görsel ekler.
// SafeAreaView: iPhone çentiği gibi alanlarda güvenli alan sağlar.
// ScrollView: Uzun içerik için kaydırılabilir alan.
// TouchableOpacity / Pressable: Dokunulabilir buton benzeri alanlar.
// FlatList: Performanslı liste gösterir.
// Modal: Popup pencere gösterir.

// Örnek View ve Text
/*
<View style={{ padding: 20 }}>
  <Text style={{ fontSize: 18 }}>Basit bir metin</Text>
</View>
*/

// 3. Stil (Styling)
// React Native'de stil objeler şeklinde yazılır. CSS'ye benzese de farklıdır.
// Stil, StyleSheet.create ile tanımlanabilir veya direkt inline verilebilir.

// Örnek stil
/*
const styles = StyleSheet.create({
  kutu: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
  },
  yazi: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }
});
*/

// 4. Event Handling (Etkinlik Yönetimi)
// Kullanıcı etkileşimleri onPress gibi eventlerle yakalanır.

// Örnek Buton (TouchableOpacity) ve onPress
/*
<TouchableOpacity onPress={() => alert('Butona basıldı!')}>
  <Text>Bas</Text>
</TouchableOpacity>
*/

// 5. State Yönetimi (useState)
// useState Hook'u bileşen içi durumu (state) yönetir.
// Örnek: Butona basınca yazı değişsin

/*
const [yazi, setYazi] = React.useState("Merhaba");
<TouchableOpacity onPress={() => setYazi("Değişti")}>
  <Text>{yazi}</Text>
</TouchableOpacity>
*/

// 6. JSX ve JavaScript Kullanımı
// JSX içinde JavaScript ifadeleri {} içine yazılır.
// Template literal (`` `Metin ${degisken}` ``) ise JS'de string içine değişken gömmek için.

// Örnek:
/*
const isim = "Nurdan";
<Text>{`Merhaba, ${isim}`}</Text>
*/

//useState kullanırken genelde değişken küçük harfle başlar, set ile yazarken ilk harf büyük kalanı aynı yazılır
//[araba,setAaraba], [ARAba,setARAba], [aRABA,setARABA]


