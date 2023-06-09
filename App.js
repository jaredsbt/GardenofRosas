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
  Image,
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
    <ScrollView style = {styles.scrollContainer} onLayout={onLayoutRootView}>
      <View style = {styles.container}>
        <View style = {styles.box}><Image source = {require("./HouseImages/house1.png")} style = {styles.image}></Image></View>
        <View style = {styles.box}><Image source = {require("./HouseImages/house2.png")} style = {styles.image}></Image></View>
        <View style = {styles.box}><Image source = {require("./HouseImages/house3.png")} style = {styles.image}></Image></View>
        <View style = {styles.box}><Image source = {require("./HouseImages/house4.png")} style = {styles.image}></Image></View>
      </View>

      <View style = {styles.bottom}>
        <Text style = {styles.text}>Plan your Future Home!</Text>
      </View>
    </ScrollView>   
  );
}

const styles = StyleSheet.create({
scrollContainer: {
    flex: 1,
    backgroundColor: '#000000',
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
},

bottom: {
    margin: 2,
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#e6e6fa',
},

text: {
  textAlign: 'center',
},

image: {
  flex: 1,
  width: '100%',
  height: undefined,
  aspectRatio: 1,
},
});



// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from './screens/Home';
// import PlanScreen from './screens/Plan';


// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Home'}}
//         />
//         <Stack.Screen name="PlanScreen" component={PlanScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default MyStack

