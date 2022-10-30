import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { spacing } from "./theme/spacing";
import { Provider } from "react-redux";
import store from "./store";
import FlashMessage from "react-native-flash-message";
import Navigation from "./navigation";

export default function App() {
  const [fontLoaded] = useFonts({
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <View style={{marginTop:40}}>
            
          </View>
          <Navigation></Navigation>
          <FlashMessage position="top" floating StatusBarHeight={30} />
        </SafeAreaProvider>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
});
