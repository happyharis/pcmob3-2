import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("notes.db");

function NotesScreen({ navigation }) {
  const [notes, setNotes] = useState([
    { title: "Sleep", done: false, id: "0" },
  ]);

  console.log("Use effect ran");
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={addNote}>
          <Entypo name="new-message" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  });

  function addNote() {
    let newNote = { title: "test", done: false, id: notes.length.toString() };
    setNotes([...notes, newNote]);
  }

  return <View style={styles.container}></View>;
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes"
          component={NotesScreen}
          options={{
            headerTitle: "Notes App",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
            headerStyle: {
              height: 120,
              backgroundColor: "yellow",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffc",
    alignItems: "center",
    justifyContent: "center",
  },
});
