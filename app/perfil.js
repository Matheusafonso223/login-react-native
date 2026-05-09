import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
} from "react-native";

export default function Perfil() {
  const [nome, setNome] = useState("Matheus Afonso");
  const [novoNome, setNovoNome] = useState(nome);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalPedidos, setModalPedidos] = useState(false);

  function salvarNome() {
    if (novoNome.trim() === "") {
      Alert.alert("Erro", "Digite um nome válido.");
      return;
    }

    setNome(novoNome);
    setModalEditar(false);
    Alert.alert("Sucesso", "Nome alterado com sucesso!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.foto}>
          <Text style={styles.inicial}>{nome.charAt(0).toUpperCase()}</Text>
        </View>

        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.email}>matheus@email.com</Text>
        <Text style={styles.localizacao}>Teresina - PI</Text>

        <TouchableOpacity
          style={styles.botaoPrincipal}
          onPress={() => setModalEditar(true)}
        >
          <Text style={styles.textoBotaoPrincipal}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => setModalPedidos(true)}
        >
          <Text style={styles.textoBotaoSecundario}>Meus pedidos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botaoSair}>
          <Text style={styles.textoBotaoSair}>Sair da conta</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modalEditar} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitulo}>Editar perfil</Text>

            <TextInput
              style={styles.input}
              value={novoNome}
              onChangeText={setNovoNome}
              placeholder="Digite seu nome"
              placeholderTextColor="#777"
            />

            <TouchableOpacity style={styles.botaoPrincipal} onPress={salvarNome}>
              <Text style={styles.textoBotaoPrincipal}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalEditar(false)}>
              <Text style={styles.cancelar}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={modalPedidos} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitulo}>Meus pedidos</Text>

            <View style={styles.pedido}>
              <Text style={styles.pedidoNome}>Camiseta Oversized</Text>
              <Text style={styles.pedidoStatus}>Entregue</Text>
            </View>

            <View style={styles.pedido}>
              <Text style={styles.pedidoNome}>Tênis Minimalista</Text>
              <Text style={styles.pedidoStatus}>Em transporte</Text>
            </View>

            <View style={styles.pedido}>
              <Text style={styles.pedidoNome}>Jaqueta Streetwear</Text>
              <Text style={styles.pedidoStatus}>Aguardando pagamento</Text>
            </View>

            <TouchableOpacity
              style={styles.botaoPrincipal}
              onPress={() => setModalPedidos(false)}
            >
              <Text style={styles.textoBotaoPrincipal}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
  },

  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#00d084",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  inicial: {
    color: "#121212",
    fontSize: 48,
    fontWeight: "bold",
  },

  nome: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },

  email: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 6,
  },

  localizacao: {
    color: "#00d084",
    fontSize: 16,
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
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  botaoSecundario: {
    borderWidth: 1,
    borderColor: "#00d084",
    width: "100%",
    padding: 16,
    borderRadius: 14,
    marginBottom: 14,
  },

  textoBotaoSecundario: {
    color: "#00d084",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  botaoSair: {
    width: "100%",
    padding: 16,
  },

  textoBotaoSair: {
    color: "#ff4d4d",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    justifyContent: "center",
    padding: 24,
  },

  modalCard: {
    backgroundColor: "#1f1f1f",
    borderRadius: 24,
    padding: 24,
  },

  modalTitulo: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "#121212",
    color: "#fff",
    borderWidth: 1,
    borderColor: "#00d084",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    marginBottom: 18,
  },

  cancelar: {
    color: "#aaa",
    textAlign: "center",
    fontSize: 16,
    marginTop: 6,
  },

  pedido: {
    backgroundColor: "#121212",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },

  pedidoNome: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

  pedidoStatus: {
    color: "#00d084",
    marginTop: 6,
    fontSize: 15,
  },
});