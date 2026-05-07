import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Perfil() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#222" }}>
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Tela Perfil
      </Text>

      <TouchableOpacity
        onPress={() => router.back()}
        style={{ backgroundColor: "#ff4444", padding: 15, borderRadius: 10 }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}