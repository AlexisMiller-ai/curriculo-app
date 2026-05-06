import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";

const API_URL = "https://curriculo-api-nine.vercel.app";

export default function Profissional() {
  const [experiencias, setExperiencias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/experiencias`)
      .then((res) => res.json())
      .then((data) => {
        setExperiencias(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#6C63FF" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>💼 Experiência Profissional</Text>
      </View>

      <View style={styles.section}>
        {experiencias.map((exp, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cargo}>{exp.cargo}</Text>
              <Text style={styles.anos}>
                {exp.ano_inicio} — {exp.ano_fim ?? "Atual"}
              </Text>
            </View>
            <Text style={styles.empresa}>🏢 {exp.empresa}</Text>
            <View style={styles.divider} />
            <Text style={styles.descricao}>{exp.descricao}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    backgroundColor: "#6C63FF",
    padding: 40,
    paddingTop: 60,
    alignItems: "center",
  },
  headerTitle: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  section: { margin: 16 },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  cargo: { fontSize: 16, fontWeight: "bold", color: "#333" },
  anos: { fontSize: 12, color: "#888", alignSelf: "center" },
  empresa: {
    fontSize: 14,
    color: "#6C63FF",
    fontWeight: "600",
    marginBottom: 8,
  },
  divider: { height: 1, backgroundColor: "#F0F0F0", marginBottom: 8 },
  descricao: { fontSize: 13, color: "#555", lineHeight: 20 },
});
