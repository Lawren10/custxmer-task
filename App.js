// import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import Custxmers from "./components/Custxmers";

export default function App() {
  return (
    <View style={styles.container}>
      <Custxmers
        parameters={{
          dates: [
            {
              date: 4,
              mood: "sad",
            },
            {
              date: 1,
              mood: "sad",
            },
            {
              date: 4,
              mood: "happy",
            },
            {
              date: 6,
              mood: "fair",
            },
            {
              date: 27,
              mood: "sad",
            },
          ],
          month: 9,
          year: 2021,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
