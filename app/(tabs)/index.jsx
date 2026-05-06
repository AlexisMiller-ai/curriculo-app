import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import { useEffect, useState } from "react";

const API_URL = "https://curriculo-api-nine.vercel.app";

export default function Home() {
  const [pessoa, setPessoa] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/pessoas/1`)
      .then((res) => res.json())
      .then((data) => {
        setPessoa(data);
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
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{pessoa?.nome?.charAt(0)}</Text>
        </View>
        <Text style={styles.nome}>{pessoa?.nome}</Text>
        <Text style={styles.titulo}>{pessoa?.titulo}</Text>
        <Text style={styles.resumo}>{pessoa?.resumo}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>🐙 GitHub</Text>
        <Text style={styles.cardText}>{pessoa?.github}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>💼 LinkedIn</Text>
        <Text style={styles.cardText}>{pessoa?.linkedin}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: {
    backgroundColor: "#6C63FF",
    alignItems: "center",
    padding: 40,
    paddingTop: 60,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: { fontSize: 36, fontWeight: "bold", color: "#6C63FF" },
  nome: { fontSize: 24, fontWeight: "bold", color: "#fff", marginBottom: 4 },
  titulo: { fontSize: 16, color: "#E0DFFF", marginBottom: 12 },
  resumo: { fontSize: 14, color: "#fff", textAlign: "center", lineHeight: 22 },
  card: {
    backgroundColor: "#fff",
    margin: 16,
    marginBottom: 0,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  cardText: { fontSize: 14, color: "#6C63FF" },
});
