import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Bottom Tabs */}
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />

      {/* Create Trip Screen */}
      <Stack.Screen
        name="create-trip"
        options={{
          title: "Create Trip",
        }}
      />
    </Stack>
  );
}
