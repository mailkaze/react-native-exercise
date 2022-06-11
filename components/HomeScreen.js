import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import AnImage from "./AnImage";
import Other from "./Other";

export default function HomeScreen({ navigation }) {
  const [cosa, setCosa] = useState(false);
  const [texto, setTexto] = useState("");

  const arr = [
    {
      content: "uno",
      color: "azul",
    },
    {
      content: "dos",
      color: "verde",
    },
    {
      content: "tres",
      color: "morado",
    },
    {
      content: "cuatro",
      color: "rojo",
    },
    {
      content: "uno",
      color: "azul",
    },
    {
      content: "dos",
      color: "verde",
    },
    {
      content: "tres",
      color: "morado",
    },
    {
      content: "cuatro",
      color: "rojo",
    },
    {
      content: "uno",
      color: "azul",
    },
    {
      content: "dos",
      color: "verde",
    },
    {
      content: "tres",
      color: "morado",
    },
    {
      content: "cuatro",
      color: "rojo",
    },
  ];

  return (
    <View>
      {/* <ScrollView> */}
      <Button
        title="Vámonos"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
      <View style={styles.container}>
        <Button
          onPress={() => {
            setCosa(!cosa);
          }}
          title="hola"
        />
        <Text>{cosa ? "si" : "no"}</Text>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(newText) => setTexto(newText)}
          value={texto}
        />
        <FlatList
          data={arr}
          renderItem={({ item }) => (
            <Other content={item.content} color={item.color} onPress={() => navigation.navigate("Profile", { name: "Jane" })}/>
          )}
        />
        <AnImage />

        {/* <StatusBar style="auto" /> */}
      </View>
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
