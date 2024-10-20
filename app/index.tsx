import { Text, View,StyleSheet } from "react-native";
import { Link } from "expo-router";
export default function Index() {
  return (
    <View
      style={
        styles.container
      }
    >
      <Text>Hello Expo</Text>
      <Link href={"/about"}>
          About Us</Link>
    </View>
  );
}
const styles= StyleSheet.create({
  container:{
    flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FF4500"
        ,
  },
  button:{
    fontSize:20,
    textDecorationLine:"underline",
    color: "#fff"
  }
})