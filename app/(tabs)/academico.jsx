import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useEffect, useState } from "react";

const API_URL = "https://curriculo-api-nine.vercel.app";

export default function Academico() {
  const [educacoes, setEducacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/educacao`)
      .then((res) => res.json())
      .then((data) => {
        setEducacoes(data);
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
        <Text style={styles.headerTitle}>🎓 Experiência Acadêmica</Text>
      </View>

      <View style={styles.section}>
        {educacoes.map((edu, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.nivel}>{edu.nivel}</Text>
              <Text style={styles.anos}>
                {edu.ano_inicio} — {edu.ano_fim ?? "Atual"}
              </Text>
            </View>
            <Text style={styles.curso}>{edu.curso}</Text>
            <Text style={styles.instituicao}>🏛 {edu.instituicao}</Text>
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
    marginBottom: 8,
  },
  nivel: {
    backgroundColor: "#EEF0FF",
    color: "#6C63FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: "bold",
  },
  anos: { fontSize: 12, color: "#888", alignSelf: "center" },
  curso: { fontSize: 16, fontWeight: "bold", color: "#333", marginBottom: 4 },
  instituicao: { fontSize: 14, color: "#555" },
});
