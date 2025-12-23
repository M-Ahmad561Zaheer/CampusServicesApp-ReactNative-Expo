import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/images/IMG_20221102_214554.jpg")}
          style={styles.image}
        />

        <Text style={styles.name}>Muhammad Ahmad Zaheer</Text>
        <Text style={styles.info}>Registration No: L1F22BSSE0340</Text>
        <Text style={styles.info}>Degree: BS Software Engineering</Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/ServicesScreen")}
        >
          <Text style={styles.buttonText}>View Campus Services</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f7fa",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 3,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#4b7bec",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});