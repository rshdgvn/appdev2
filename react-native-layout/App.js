import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
      <Signup />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
