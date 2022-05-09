import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground,StyleSheet } from 'react-native';
import Widget from './src/components/Widget';
import { theme } from './src/theme';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, Inter_500Medium
  });
  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>
      <StatusBar style="light" backgroundColor='transparent' translucent />
      <ImageBackground source={require('./assets/img.jpg')}
              style={{alignItems: 'center',justifyContent: 'center', flex: 1 }}></ImageBackground>
      <Widget/>
    </View>
  );
}