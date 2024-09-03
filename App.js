import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { createTamagui, TamaguiProvider } from "tamagui";
import AppContent from "./src/AppContent";
import BottomSheetProvider from "./src/contexts/provider/BottomSheetProvider";

SplashScreen.preventAutoHideAsync();

const tamaguiConfig = createTamagui(config);

const App = () => {
  const [loaded, error] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    "StyleScript-Regular": require("./assets/fonts/ttf/StyleScript-Regular.ttf"),
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  function onRefresh() {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  }

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <TamaguiProvider config={tamaguiConfig}>
        <SafeAreaView style={{ flex: 1 }}>
          <BottomSheetProvider>
            <FlatList
              data={[{}]}
              renderItem={AppContent}
              contentContainerStyle={{
                flexGrow: 1,
              }}
              refreshControl={
                <RefreshControl
                  refreshing={isRefreshing}
                  onRefresh={onRefresh}
                />
              }
            />
            <StatusBar style="light" backgroundColor="black" />
          </BottomSheetProvider>
        </SafeAreaView>
      </TamaguiProvider>
    </GestureHandlerRootView>
  );
};

export default App;
