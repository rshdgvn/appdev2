import { View, Text, StyleSheet } from "react-native";

const ProfileDemo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.texts}>Course & Section : BSIS 3-B</Text>
      <Text style={styles.texts}>Name : Rasheed Gavin M. Esponga</Text>
      <Text>Age : 20</Text>
      <Text>Favorite Hobby : Sleeping</Text>
      <Text>My Three Idols: Garrell, Ryan, Joshua</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: "10px",
  },
  texts: {
    fontSize: "30px",
    color: "green",
  },
});

export default ProfileDemo;
