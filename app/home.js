import { View, Text } from "react-native";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#121212", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: "#fff", fontSize: 28, fontWeight: "bold" }}>
        Login realizado com sucesso
      </Text>
    </View>
  );
}