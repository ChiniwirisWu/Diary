import { View, Text, StyleSheet } from "react-native";
import HomePages from "./homePages";
import HomeTracker from "./homeTracker"; 

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: "50px",
    paddingTop: "50px",
    flexDirection: "row"
  }
})

export default function HomeContent({}){
  return (
    <View style={styles.container}>
      <HomePages />
      <HomeTracker />
    </View>
  ) 
}
