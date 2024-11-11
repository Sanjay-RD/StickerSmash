import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function AboutUs() {
  return (
    <View style={styles.container}>
      <Text>About Us</Text>
      <Link href={"/"}>Back To Home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
