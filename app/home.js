import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.logo}>STYLE STORE</Text>

        <Text style={styles.titulo}>Bem-vindo ao app</Text>

        <Text style={styles.subtitulo}>
          Encontre produtos modernos, veja seu perfil e acompanhe suas compras.
        </Text>

        <TouchableOpacity
          style={styles.botaoPrincipal}
          onPress={() => router.push("/produtos")}
        >
          <Text style={styles.textoBotaoPrincipal}>Ver produtos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => router.push("/perfil")}
        >
          <Text style={styles.textoBotaoSecundario}>Meu perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    justifyContent: "center",
    padding: 24,
  },

  card: {
    backgroundColor: "#1f1f1f",
    padding: 28,
    borderRadius: 24,
    alignItems: "center",
  },

  logo: {
    color: "#00d084",
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 20,
  },

  titulo: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitulo: {
    color: "#aaa",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 30,
  },

  botaoPrincipal: {
    backgroundColor: "#00d084",
    width: "100%",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
  },

  textoBotaoPrincipal: {
    color: "#121212",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoSecundario: {
    borderWidth: 1,
    borderColor: "#00d084",
    width: "100%",
    padding: 16,
    borderRadius: 14,
  },

  textoBotaoSecundario: {
    color: "#00d084",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});