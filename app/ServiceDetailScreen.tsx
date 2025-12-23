import { View, Text, StyleSheet, ScrollView , Button } from "react-native";
import { useLocalSearchParams , useRouter} from "expo-router";

export default function ServiceDetailScreen(){
  const router = useRouter();
  const { service } = useLocalSearchParams<{ service?: string }>();

  if (!service) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>No service selected.</Text>
      </View>
    );
  }

  const serviceObj = JSON.parse(service);

  const handleSetFavorite = () => {
    router.push({
      pathname: "/ProfileScreen",
      params: { favoriteService: serviceObj.name } 
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{serviceObj.name}</Text>
        <Text style={styles.description}>{serviceObj.fullDesc}</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Category:</Text>
          <Text style={styles.value}>{serviceObj.category}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Status:</Text>
          <Text
            style={[
              styles.status,
              serviceObj.status === "Open"
                ? styles.open
                : styles.closed,
            ]}
          >
            {serviceObj.status}
          </Text>
        </View>

        <Button
          title="Set as Favorite"
          color="#4b7bec"
          onPress={handleSetFavorite}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f4f6f8",
    padding: 20,
    justifyContent: "center",
  },

  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },

  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 16,
    lineHeight: 22,
  },

  row: {
    flexDirection: "row",
    marginBottom: 8,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    width: 90,
  },

  value: {
    fontSize: 16,
    color: "#333",
  },

  status: {
    fontSize: 16,
    fontWeight: "bold",
  },

  open: {
    color: "green",
  },

  closed: {
    color: "red",
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  errorText: {
    fontSize: 18,
    color: "red",
  },
});
