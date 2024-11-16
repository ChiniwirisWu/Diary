import { View, StyleSheet } from "react-native";
import SearchBar from "./searchBar";
import PagesList from "./pagesList";

const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
})

export default function HomePages({}){
  return (
    <View style={styles.container}>
      <SearchBar />
      <PagesList />
    </View> 
  )
}
