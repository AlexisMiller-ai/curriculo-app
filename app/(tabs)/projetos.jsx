import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useEffect, useState } from "react";

const API_URL = "https://curriculo-api-nine.vercel.app";

export default function Projetos() {
  const [projetos, setProjetos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/projetos`)
      .then((res) => res.json())
      .then((data) => {
        setProjetos(data);
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
        <Text style={styles.headerTitle}>🚀 Projetos</Text>
      </View>

      <View style={styles.section}>
        {projetos.map((proj, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.nome}>{proj.nome}</Text>
            <Text style={styles.descricao}>{proj.descricao}</Text>
            <View style={styles.tecContainer}>
              {proj.tecnologias?.split(",").map((tec, i) => (
                <View key={i} style={styles.tecBadge}>
                  <Text style={styles.tecText}>{tec.trim()}</Text>
                </View>
              ))}
            </View>
            {proj.url && (
              <TouchableOpacity
                style={styles.linkBtn}
                onPress={() => Linking.openURL(`https://${proj.url}`)}
              >
                <Text style={styles.linkText}>🔗 Ver projeto</Text>
              </TouchableOpacity>
            )}
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
  nome: { fontSize: 16, fontWeight: "bold", color: "#333", marginBottom: 6 },
  descricao: { fontSize: 13, color: "#555", lineHeight: 20, marginBottom: 10 },
  tecContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },
  tecBadge: {
    backgroundColor: "#EEF0FF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  tecText: { fontSize: 12, color: "#6C63FF", fontWeight: "600" },
  linkBtn: {
    backgroundColor: "#6C63FF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  linkText: { color: "#fff", fontWeight: "bold", fontSize: 13 },
});
