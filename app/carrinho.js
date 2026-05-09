import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";

export default function Carrinho() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>

      <View style={styles.card}>
        <Text style={styles.nome}>Jaqueta Oversized</Text>
        <Text style={styles.preco}>R$ 299,00</Text>
        <Text style={styles.qtd}>Quantidade: 1</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.nome}>Tênis Minimalista</Text>
        <Text style={styles.preco}>R$ 399,00</Text>
        <Text style={styles.qtd}>Quantidade: 1</Text>
      </View>

      <Text style={styles.total}>Total: R$ 698,00</Text>

      <TouchableOpacity
  style={styles.botao}
  onPress={() => Alert.alert("Compra finalizada", "Pedido realizado com sucesso!")}
>
  <Text style={styles.textoBotao}>Finalizar compra</Text>
</TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoVoltar}
        onPress={() => router.push("/produtos")}
      >
        <Text style={styles.textoVoltar}>Voltar para produtos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 24,
    justifyContent: "center",
  },

  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#1f1f1f",
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
  },

  nome: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },

  preco: {
    color: "#00d084",
    fontSize: 18,
    marginTop: 8,
  },

  qtd: {
    color: "#aaa",
    fontSize: 16,
    marginTop: 6,
  },

  total: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 24,
  },

  botao: {
    backgroundColor: "#00d084",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
  },

  textoBotao: {
    color: "#121212",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoVoltar: {
    borderWidth: 1,
    borderColor: "#00d084",
    padding: 16,
    borderRadius: 14,
  },

  textoVoltar: {
    color: "#00d084",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});