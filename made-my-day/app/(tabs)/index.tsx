import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 26, fontWeight: "800", marginBottom: 6 }}>
        Made My Day ☀️
      </Text>

      <Text style={{ color: "#666", marginBottom: 20 }}>
        Plan your trips. Capture your moments.
      </Text>

      <TouchableOpacity
        onPress={() => router.push("/create-trip")}
        style={{
          backgroundColor: "#000",
          padding: 16,
          borderRadius: 14,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontWeight: "600" }}>
          + Create Trip
        </Text>
      </TouchableOpacity>

      <View
        style={{
          padding: 16,
          borderRadius: 14,
          backgroundColor: "#f4f4f5",
        }}
      >
        <Text style={{ fontWeight: "600" }}>📦 My Trips</Text>
        <Text style={{ color: "#666", marginTop: 4 }}>
          View your saved trips and memories
        </Text>
      </View>
    </View>
  );
}
