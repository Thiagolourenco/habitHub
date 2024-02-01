import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface ICardStyle {
  card: ViewStyle
  viewImage: ViewStyle
  cardText: TextStyle
  cardDescription: TextStyle
}

export default (): ICardStyle => {
  return StyleSheet.create({
    card: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginHorizontal: 16, 
      marginTop: 10,
      backgroundColor: "#FFFF",
      paddingVertical: 24,
      paddingHorizontal: 16,
      borderRadius: 29,
      shadowColor: "#B0B3BF",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,

    },
    viewImage: {
      width: 40, 
      height: 40, 
      backgroundColor: "#000",
      borderRadius: 20
    },
    cardText: {
      fontSize: 14,
      fontWeight: "600"
    },
    cardDescription: {
      fontSize: 12,
      marginTop: 4,
      fontWeight: "500"
    }
  })
}