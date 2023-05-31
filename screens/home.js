// import { 
//     StyleSheet, 
//     Text, 
//     View,
//     ScrollView,
//     Dimensions,
//     Button,
//   } from 'react-native';

//   import {
//     onLayout,
//     onLayoutRootView,
//   } from './SplashScreen.js';
  
//   const Home = () => {
//     return (
//         <ScrollView style = {styles.scrollContainer}>
//             <View style = {styles.container}>
//                 <View style = {styles.box}><Text>Picture 1</Text></View>
//                 <View style = {styles.box}><Text>Picture 2</Text></View>
//                 <View style = {styles.box}><Text>Picture 3</Text></View>
//                 <View style = {styles.box}><Text>Picture 4</Text></View>
//             </View>

//             <View style = {styles.bottom}>
//                 <Button onPress = {()=> navigation.navigate('PlanScreen')} title = 'Plan Screen'></Button>
//             </View>
//         </ScrollView>
//     )
//   }

// const styles = StyleSheet.create({
// scrollContainer: {
//     flex: 1,
//     backgroundColor: '#000000',
// },

// container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 2,
// },

// box: {
//     margin: 2,
//     width: Dimensions.get('window').width / 2 -6,
//     height: 200,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f1c40f'
// },

// bottom: {
//     margin: 2,
//     width: Dimensions.get('screen').width,
//     height: Dimensions.get('screen').height / 3,
//     justifyContent: 'center',
//     alignContent: 'center',
//     backgroundColor: '#e6e6fa',
// }
// });

// export default Home;