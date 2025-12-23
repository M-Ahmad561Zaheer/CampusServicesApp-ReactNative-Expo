import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

// Services data (EVEN last digit example)
const services = [
  {
    id: "1",
    name: "IT Helpdesk",
    shortDesc: "Technical support 💻",
    fullDesc: "Provides technical assistance for hardware and software issues.",
    category: "IT Services",
    status: "Open",
  },
  {
    id: "2",
    name: "Digital Library",
    shortDesc: "Online books 📚",
    fullDesc: "Access e-books and journals anytime.",
    category: "Library",
    status: "Open",
  },
  {
    id: "3",
    name: "LMS Support",
    shortDesc: "LMS help 🎓",
    fullDesc: "Support for learning management system.",
    category: "IT Services",
    status: "Open",
  },
  {
    id: "4",
    name: "Network Services",
    shortDesc: "Internet support 🌐",
    fullDesc: "Manages campus network and Wi-Fi.",
    category: "IT Services",
    status: "Closed",
  },
  {
    id: "5",
    name: "Lab Management",
    shortDesc: "Lab scheduling 🧪",
    fullDesc: "Manages lab equipment and schedules.",
    category: "Lab Services",
    status: "Open",
  },
];

export default function ServicesScreen() {
  const router = useRouter();

  // Render each service
  const renderService = ({ item }: any) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/ServiceDetailScreen",
          params: { service: JSON.stringify(item) }, 
        })
      }
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.shortDesc}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Services</Text>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={renderService}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f6f8",
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 3,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: "#555",
  },
});
