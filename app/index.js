import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";

import { router } from "expo-router";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (email === "admin@gmail.com" && senha === "123") {
      router.push("/home");
    } else {
      Alert.alert("Erro", "Email ou senha inválidos");
    }
  }

  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg")}
      resizeMode="cover"
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.60)",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 48,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Style Store
        </Text>

        <Text
          style={{
            color: "#d1d1d1",
            fontSize: 16,
            marginBottom: 40,
          }}
        >
          Descubra as melhores tendências da moda.
        </Text>

        <View
          style={{
            backgroundColor: "rgba(20,20,20,0.78)",
            padding: 22,
            borderRadius: 28,
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Bem-vindo
          </Text>

          <Text
            style={{
              color: "#aaa",
              marginBottom: 20,
              fontSize: 15,
            }}
          >
            Faça login para acessar sua conta
          </Text>

          <TextInput
            placeholder="Digite seu email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#fff",
              padding: 16,
              borderRadius: 14,
              marginBottom: 14,
              fontSize: 16,
            }}
          />

          <TextInput
            placeholder="Digite sua senha"
            placeholderTextColor="#999"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            style={{
              backgroundColor: "rgba(255,255,255,0.08)",
              color: "#fff",
              padding: 16,
              borderRadius: 14,
              marginBottom: 22,
              fontSize: 16,
            }}
          />

          <TouchableOpacity onPress={entrar}>
            <LinearGradient
              colors={["#8b5cf6", "#7c3aed"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                padding: 18,
                borderRadius: 16,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Entrar
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}