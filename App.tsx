import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import CoffeeCard from "./components/CoffeeCard";
import CustomButton from "./components/CustomButton";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleOrder = () => {
    if (name.trim() === "") {
      setMessage("Por favor, informe seu nome!");
    } else {
      setMessage(`Olá, ${name}! Seu pedido foi recebido.`);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={30}
    >
      <ScrollView>
        {/* Header */}
        <Header />
        {/* Header */}

        {/* Conteúdo */}
        <View style={styles.content}>
          <View style={styles.grettingSection}>
            <Text style={styles.grettingTitle}>Bom dia!</Text>
            <Text style={styles.grettingSubtitle}>Que tal um café hoje?</Text>
          </View>

          <View style={styles.featured}>
            <Image
              style={styles.image}
              source={require("./assets/coffee.jpg")}
            ></Image>
            <Text style={styles.featuredTitle}>Cappucino Especial</Text>
            <Text style={styles.featuredDescription}>Cremoso e delicioso</Text>
            <Text style={styles.featuredPrice}>R$ 12,90</Text>
          </View>

          <Text style={styles.sectionTitle}>Nosso cardápio</Text>

          <View style={styles.menu}>
            <CoffeeCard
              name="Espresso"
              description="Puro e forte"
              price="R$ 7,00"
            />

            <CoffeeCard
              name="Cappucino"
              description="Clássico com espuma"
              price="R$ 12,90"
            />

            <CoffeeCard
              name="Latte"
              description="Leite cremoso"
              price="R$ 11,50"
            />

            <CoffeeCard
              name="Mocha"
              description="Toque de chocolate"
              price="R$ 13,50"
            />
          </View>

          <View style={styles.orderSection}>
            <Text style={styles.question}>Qual é o seu nome?</Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              value={name}
              onChangeText={setName}
            ></TextInput>

            <CustomButton title="Fazer meu pedido" onPress={handleOrder} />

            {message !== "" && (
              <Text style={styles.messageText}>{message}</Text>
            )}
          </View>
        </View>
        {/* Conteúdo */}

        {/* Footer */}
        <Footer />
        {/* Footer */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  content: {
    paddingHorizontal: 24,
  },
  grettingSection: {
    marginTop: 10,
    marginBottom: 24,
  },
  grettingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  grettingSubtitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8,
  },
  featured: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 180,
    marginBottom: 16,
    borderRadius: 16,
  },
  featuredTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#2f2d2c",
  },
  featuredDescription: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4,
  },
  featuredPrice: {
    fontSize: 20,
    fontWeight: "800",
    color: "#c67c4e",
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16,
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 32,
  },
  orderSection: {
    backgroundColor: "#ffffff",
    padding: 24,
    borderRadius: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.05,
    elevation: 4,
    marginTop: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 56,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    paddingHorizontal: 20,
    fontSize: 16,
  },
  messageText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c67c4e",
    textAlign: "center",
    marginTop: 20,
  },
});
