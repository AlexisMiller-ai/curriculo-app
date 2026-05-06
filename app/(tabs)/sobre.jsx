import { View, Text, StyleSheet, ScrollView } from "react-native";

const tecnologias = [
  { icon: "⚛️", nome: "React Native", desc: "Framework principal do app" },
  { icon: "📱", nome: "Expo", desc: "Plataforma de desenvolvimento" },
  { icon: "🧭", nome: "Expo Router", desc: "Navegação entre telas" },
  { icon: "🟢", nome: "Node.js", desc: "Runtime do back-end" },
  { icon: "🚂", nome: "Express", desc: "Framework do servidor" },
  { icon: "🐘", nome: "PostgreSQL", desc: "Banco de dados relacional" },
  { icon: "☁️", nome: "NeonDB", desc: "Banco de dados na nuvem" },
  { icon: "▲", nome: "Vercel", desc: "Deploy do back-end" },
];

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Sobre o App</Text>
        <Text style={styles.headerSub}>Currículo Digital</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📱 Funcionalidade Extra</Text>
        <View style={styles.card}>
          <Text style={styles.cardText}>
            Conexão em tempo real com back-end próprio desenvolvido com Express
            + PostgreSQL, consumindo dados diretamente da API REST hospedada no
            Vercel.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛠 Tecnologias Utilizadas</Text>
        {tecnologias.map((tec, index) => (
          <View key={index} style={styles.tecCard}>
            <Text style={styles.tecIcon}>{tec.icon}</Text>
            <View>
              <Text style={styles.tecNome}>{tec.nome}</Text>
              <Text style={styles.tecDesc}>{tec.desc}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  header: {
    backgroundColor: "#6C63FF",
    padding: 40,
    paddingTop: 60,
    alignItems: "center",
  },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  headerSub: { fontSize: 14, color: "#E0DFFF", marginTop: 4 },
  section: { margin: 16 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowOpacity: 0.1,
  },
  cardText: { fontSize: 14, color: "#555", lineHeight: 22 },
  tecCard: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
    elevation: 2,
    shadowOpacity: 0.1,
  },
  tecIcon: { fontSize: 28 },
  tecNome: { fontSize: 15, fontWeight: "bold", color: "#333" },
  tecDesc: { fontSize: 13, color: "#888" },
});
