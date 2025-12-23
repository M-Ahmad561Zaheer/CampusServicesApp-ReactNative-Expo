import { View, Text, Pressable, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const { favoriteService } = useLocalSearchParams<{ favoriteService?: string }>();

  const studentName = "Muhammad Ahmad Zaheer";
  const regNo = "L1F22BSSE0340";
  const currentSemester = "6th Semester";

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Student Profile</Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Name: </Text>{studentName}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Registration No: </Text>{regNo}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Semester: </Text>{currentSemester}
        </Text>

        <Text style={styles.text}>
          <Text style={styles.label}>Favorite Service: </Text>{favoriteService || "Not selected"}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => router.push("/ServicesScreen")}
        >
          <Text style={styles.buttonText}>Choose Favorite Service</Text>
        </Pressable>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 16,
    elevation: 4,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  text: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },

  label: {
    fontWeight: "bold",
  },

  button: {
    marginTop: 15,
    backgroundColor: "#4b7bec",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
