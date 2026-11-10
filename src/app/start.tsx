import { Image } from 'expo-image';
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const cabin = require('@/assets/images/cabin.png');


export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Image source= {cabin} style={styles.image} />
      <Text>You're walking through a forest when you come across an abandoned cabin. The door is slightly open, and you hear a noise inside.

        </Text>
      <Link href="/inside" style={styles.button}> Enter the cabin</Link>

      <Link href="/stranger" style={styles.button}> Keep walking</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#0000ff',
    margin: 20,
  },
  image: {
    width: 320,
    height: 480,
    borderRadius: 4,
  }
});