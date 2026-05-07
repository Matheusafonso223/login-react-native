import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (email === "" || senha === "") {
      Alert.alert("Atenção", "Preencha email e senha.");
      return;
    }

    if (email === "admin@gmail.com" && senha === "123") {
      router.push("/home");
    } else {
      Alert.alert("Erro", "Email ou senha inválidos");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#121212",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 32,
          fontWeight: "bold",
          marginBottom: 8,
        }}
      >
        Login
      </Text>

      <TextInput
        placeholder="Digite seu email"
        placeholderTextColor="#777"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
        style={{
          backgroundColor: "#1f1f1f",
          color: "#fff",
          padding: 16,
          borderRadius: 10,
          marginBottom: 14,
          fontSize: 16,
        }}
      />

      <TextInput
        placeholder="Digite sua senha"
        placeholderTextColor="#777"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={{
          backgroundColor: "#1f1f1f",
          color: "#fff",
          padding: 16,
          borderRadius: 10,
          marginBottom: 22,
          fontSize: 16,
        }}
      />

      <TouchableOpacity
        onPress={entrar}
        style={{
          backgroundColor: "#1e90ff",
          padding: 16,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
          Entrar
        </Text>
      </TouchableOpacity>
    </View>
  );
}