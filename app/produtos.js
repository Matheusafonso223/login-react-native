import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const produtos = [
  {
    id: '1',
    nome: 'Jaqueta Oversized',
    preco: 'R$ 299,00',
    categoria: 'Outerwear',
    imagem: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
  },
  {
    id: '2',
    nome: 'Calça Cargo',
    preco: 'R$ 189,00',
    categoria: 'Bottoms',
    imagem: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400',
  },
  {
    id: '3',
    nome: 'Camiseta Básica',
    preco: 'R$ 89,00',
    categoria: 'Tops',
    imagem: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
  },
  {
    id: '4',
    nome: 'Tênis Minimalista',
    preco: 'R$ 399,00',
    categoria: 'Footwear',
    imagem: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
  },
  {
    id: '5',
    nome: 'Vestido Midi',
    preco: 'R$ 219,00',
    categoria: 'Dress',
    imagem: 'https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=400',
  },
  {
    id: '6',
    nome: 'Blazer Slim',
    preco: 'R$ 349,00',
    categoria: 'Outerwear',
    imagem: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400',
  },
];

function ProdutoCard({ item }) {
  return (
    <TouchableOpacity style={{
      flex: 1,
      margin: 8,
      borderRadius: 16,
      backgroundColor: '#1a1a1a',
      overflow: 'hidden',
    }}>
      <Image
        source={{ uri: item.imagem }}
        style={{ width: '100%', height: 180, resizeMode: 'cover' }}
      />
      <View style={{ padding: 12 }}>
        <Text style={{ fontSize: 11, color: '#176ef1', fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>
          {item.categoria}
        </Text>
        <Text style={{ fontSize: 15, color: '#fff', fontWeight: '600', marginBottom: 4 }}>
          {item.nome}
        </Text>
        <Text style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
          {item.preco}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function ProdutosScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0d0d0d' }}>
      <StatusBar barStyle="light-content" />

      
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 16 }}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={{ color: '#176ef1', fontSize: 16 }}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>
          Produtos
        </Text>
        <View style={{ width: 60 }} />
      </View>

      
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProdutoCard item={item} />}
        contentContainerStyle={{ padding: 8, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}