import { FlatList, View, StyleSheet, Text, Pressable } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center"
  }, 
  homeTracker: {
    gap: "2px",
  },
  title:{
    fontSize: "1.2em",
    fontWeight: "800",
    marginBottom: "50px"
  },
  trackerItem: {
    width: "40px",
    height: "40px",
    borderWidth: 0.5,
    borderColor: "#ccc"
  }
})

function TrackerItem({}){
  return <Pressable><View style={styles.trackerItem}></View></Pressable> 
}

export default function HomeTracker({}){
  const data = [
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  [],[],[],[],[],[],[],[],[],[],[],[],
  ]
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>REGISTRO DE CONSTANCIA</Text>
        <FlatList
          data={data}
          numColumns={12}
          contentContainerStyle={styles.homeTracker}
          renderItem={({item, index})=> <TrackerItem />}
        />
        </View>
    </View>
  )
}
