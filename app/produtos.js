import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Produtos() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>

      <TouchableOpacity
        style={styles.botaoCarrinho}
        onPress={() => router.push("/carrinho")}
      >
        <Text style={styles.textoCarrinho}>Ver carrinho</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
          }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>Camiseta Oversized</Text>

        <Text style={styles.preco}>R$ 89,90</Text>

        <TouchableOpacity style={styles.botaoProduto}>
          <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
          }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>Tênis Minimalista</Text>

        <Text style={styles.preco}>R$ 399,90</Text>

        <TouchableOpacity style={styles.botaoProduto}>
          <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
          }}
          style={styles.imagem}
        />

        <Text style={styles.nome}>Jaqueta Streetwear</Text>

        <Text style={styles.preco}>R$ 299,90</Text>

        <TouchableOpacity style={styles.botaoProduto}>
          <Text style={styles.textoBotao}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 20,
  },

  botaoCarrinho: {
    backgroundColor: "#00d084",
    padding: 14,
    borderRadius: 12,
    marginBottom: 25,
  },

  textoCarrinho: {
    color: "#121212",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  card: {
    backgroundColor: "#1f1f1f",
    borderRadius: 18,
    padding: 16,
    marginBottom: 24,
  },

  imagem: {
    width: "100%",
    height: 220,
    borderRadius: 14,
    marginBottom: 16,
  },

  nome: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },

  preco: {
    color: "#00d084",
    fontSize: 18,
    marginBottom: 16,
  },

  botaoProduto: {
    backgroundColor: "#00d084",
    padding: 14,
    borderRadius: 12,
  },

  textoBotao: {
    color: "#121212",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});