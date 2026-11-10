
import { StyleSheet, Text, View } from "react-native";


export default function StartScreen() {
  return (
    <View style={styles.container}>
      <Text>   You find a journal explaining that someone disappeared from this cabin years ago. The final page has your name on it. You hear footsteps behind you. You've become the cabin's next mystery. </Text>
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