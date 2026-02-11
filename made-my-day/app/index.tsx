// // import { View, Text, StyleSheet } from "react-native";

// // export default function App() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>made-my-day</Text>
// //       <Text style={styles.subtitle}>
// //         Your smart travel companion 🌍
// //       </Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     alignItems: "center",
// //     justifyContent: "center",
// //     backgroundColor: "#ffffff",
// //   },
// //   title: {
// //     fontSize: 28,
// //     fontWeight: "bold",
// //   },
// //   subtitle: {
// //     fontSize: 16,
// //     marginTop: 8,
// //     color: "#555",
// //   },
// // });


// // import { NavigationContainer } from "@react-navigation/native";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// // import HomeScreen from "./screens/HomeScreen";
// // import TripsScreen from "./screens/TripsScreen";
// // import ProfileScreen from "./screens/ProfileScreen";

// // const Tab = createBottomTabNavigator();

// // export default function App() {
// //   return (
// //     <NavigationContainer>
// //       <Tab.Navigator>
// //         <Tab.Screen name="Home" component={HomeScreen} />
// //         <Tab.Screen name="Trips" component={TripsScreen} />
// //         <Tab.Screen name="Profile" component={ProfileScreen} />
// //       </Tab.Navigator>
// //     </NavigationContainer>
// //   );
// // }


// import { View, Text, StyleSheet } from "react-native";

// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>made-my-day</Text>
//       <Text style={styles.subtitle}>Your smart travel companion 🌍</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//   },
//   subtitle: {
//     fontSize: 16,
//     marginTop: 8,
//     color: "#555",
//   },
// });


import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/(tabs)" />;
}
