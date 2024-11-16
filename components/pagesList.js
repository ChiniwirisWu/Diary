import { FlatList, Pressable, View, Text, Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  pressable: {
    width: "49.4%",
    height: "200px",
  },
  pagesList: {
    flex: 1,
    gap: "10px",
  },
  pageItem:{
    flex: 1,
    flexDirection: "row",
    padding: "10px",
    borderWidth: .5,
    borderColor: "#ccc",
    marginRight: "10px",
  },
  pageItemTitle: {
    fontWeight: "800"
  },
  pageItemDetails: {
    flex: 1,
  },
  pageItemImageContainer: {
    flexBasis: "180px",
    height: "180px",
  },
  pageItemImage: {
    width: "180px",
    height: "180px"
  }
})


function PageItem({item}){
  return (
    <Pressable style={styles.pressable}>
      <View style={styles.pageItem}>
        <View style={styles.pageItemDetails}>
          <Text style={styles.pageItemTitle}>{item.title}</Text>
          <Text>{item.date}</Text>
        </View>
        <View style={styles.pageItemImageContainer}>
          <Image style={styles.pageItemImage} source={require("../assets/pfp_green.png")} />
        </View>
      </View>
    </Pressable>
  )
}

export default function PagesList({}){
  const data = [
    {id: 1, title: "Left 4 dead with the homies", date: "2024-11-15 : 20:47"},
    {id: 2, title: "ART ATTACT", date: "2024-11-16 : 10:40"},
    {id: 3, title: "Oshi no ko", date: "2024-11-17 : 19:00"},
  ];

  return (
    <FlatList
      contentContainerStyle={styles.pagesList}
      numColumns={2}
      data={data}
      renderItem={({item, index})=> <PageItem key={`page-${item.id}`} item={item} />}
    />
  )
}
