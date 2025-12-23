import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: "Welcome" }} />
      <Stack.Screen name="ServicesScreen" options={{ title: "Services" }} />
      <Stack.Screen name="ServiceDetailScreen" options={{ title: "Service Details" }} />
      <Stack.Screen name="ProfileScreen" options={{ title: "Profile" }} />
    </Stack>
  );
}