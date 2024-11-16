import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput:{
    width: "100%",
    height: "50px",
    paddingVertical: "10px",
    paddingHorizontal: "20px",
    marginBottom: "20px",
    borderWidth: 0.5,
    borderColor: "#ccc"
  }
})

export default function SearchBar({}){
  return (
    <TextInput style={styles.textInput} placeholder="Buscar @emocion | #año | titulo" /> 
  )
}
