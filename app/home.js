import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LandingScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <StatusBar translucent backgroundColor="transparent" />

      <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.45)', justifyContent: 'space-between', padding: 28, paddingTop: 70, paddingBottom: 50 }}>

        <Text style={{ fontSize: 52, fontWeight: '800', color: '#fff', fontStyle: 'italic', letterSpacing: 1 }}>
          Style Store
        </Text>

        <View style={{ gap: 8 }}>
          <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', marginBottom: 4 }}>
            Vista quem você é
          </Text>

          <Text style={{ fontSize: 36, color: '#fff', lineHeight: 44, marginBottom: 32 }}>
            Moda que{'\n'}
            <Text style={{ fontWeight: '700' }}>conta sua história.</Text>
          </Text>

          <TouchableOpacity onPress={() => router.push('/login')}>
            <LinearGradient
              colors={['#176ef1', '#0f4db5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ padding: 18, borderRadius: 16, alignItems: 'center' }}
            >
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                Explorar
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => router.push('/produtos')}>
            <LinearGradient
              colors={['#176ef1', '#0f4db5']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ padding: 18, borderRadius: 16, alignItems: 'center' }}
            >
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>
                Produtos
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

    
    </ImageBackground>
  );
}