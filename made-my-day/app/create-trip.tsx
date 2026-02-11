import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function CreateTrip() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 20 }}>
        Create a Trip ✈️
      </Text>

      <Text style={{ marginBottom: 6 }}>Trip Name</Text>
      <TextInput
        placeholder="e.g. Bali Vacation"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          padding: 12,
          marginBottom: 16,
        }}
      />

      <Text style={{ marginBottom: 6 }}>Destination</Text>
      <TextInput
        placeholder="Where are you going?"
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          borderRadius: 10,
          padding: 12,
          marginBottom: 16,
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#2563eb",
          padding: 14,
          borderRadius: 12,
          alignItems: "center",
          marginTop: 10,
        }}
        onPress={() => router.back()}
      >
        <Text style={{ color: "#fff", fontWeight: "600" }}>
          Save Trip
        </Text>
      </TouchableOpacity>
    </View>
  );
}
