import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";

import { styles } from "./src/assets/style/StyleSheet";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./src/assets/images/Suco.jpg")}
        style={{ height: 100, width: 100, resizeMode: "cover" }}
      ></ImageBackground>
    </View>
  );
}
