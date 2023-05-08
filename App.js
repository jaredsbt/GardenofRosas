import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <ScrollView style = {styles.scrollContainer}>
      <View style = {styles.box}><Text>Picture 1</Text></View>
      <View style = {styles.box}><Text>Picture 2</Text></View>
      <View style = {styles.box}><Text>Picture 3</Text></View>
      <View style = {styles.box}><Text>Picture 4</Text></View>
    </ScrollView>

    // <View>
    //   <View
    //     style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    //     onLayout={onLayoutRootView}>
    //     <Text>Bring your Dream Home to Life! 👋</Text>
    //     <Entypo name="rocket" size={30} />
    //   </View>
    // </View>
    
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },

  box: {
    margin: 2,
    width: Dimensions.get('window').width / 2 -6,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1c40f'
  }

});

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Welcome to Garden of Rosas!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
