import { View, Text, Image, FlatList, Pressable, StyleSheet } from "react-native";

export default function Header({}){
  const paginas = ['home', 'agregar pagina'];

  return (
    <View style={styles.container}>
      {/*left logo*/} 
      <View style={styles.titleContainer}>
        <Text style={styles.title}>MIS PAGINAS</Text>
      </View> 

      {/*Links*/} 
      <FlatList
        contentContainerStyle={styles.linkContainer}
        data={paginas}
        horizontal={true}
        renderItem={({item, index})=> <Pressable style={styles.link} key={`pagina-${item}`}><Text style={styles.subTitle}>{item}</Text></Pressable>}
      />

      {/*User details*/} 
      <View style={styles.userDetailContainer}>
        <View>
          <Text style={styles.subTitle}>Orange Gat</Text>
          <Text>Ver usuario</Text>
        </View>
        <View><Pressable><Image style={styles.pfp} source={require("../assets/pfp_red.png")} /></Pressable></View>
      </View> 
    </View>
  )
}

const styles = {
  container: {
    height: "100px",
    width: "100%",
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: "50px",
    paddingTop: "-10px",
    alignItems: "center",
  },
  titleContainer: {
    flexBasis: "300px",
  },
  subTitle: {
    fontWeight: "800"
  },
  title: {
    fontSize: "2em",
    fontWeight: "800"
  },
  pfp: {
    height: "60px",
    width: "60px",
    borderWidth: "2px",
    borderRadius: "50px",
  },
  linkContainer: {
    flex: 1,
    gap: "100px",
  },
  link: {

  },
  userDetailContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
  }
}
