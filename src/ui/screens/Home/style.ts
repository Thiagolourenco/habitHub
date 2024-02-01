import { StyleSheet, TextStyle, ViewStyle } from "react-native"

interface IHomeStyle {
  container: ViewStyle;
  banner: ViewStyle
  bannerContent: ViewStyle
  progressValues: ViewStyle
  bannerNumProgress: TextStyle
  bannerNameProgress: TextStyle
  bannerTitle: TextStyle
  content: ViewStyle
  contentGroupButton: ViewStyle
  contentButton: ViewStyle
  contentButtonText: TextStyle
}

export default (): IHomeStyle => {
  return StyleSheet.create({
    container: {
      // backgroundColor: "#CCC",
      paddingVertical: 16,
      
    },
    banner: {
      alignItems: "center",
      marginTop: 32,
      backgroundColor: "rgba(124, 145, 244, 0.6)",
      marginHorizontal: 24,
      paddingVertical: 22,
      borderRadius: 32
    },
    bannerTitle: {
      fontSize: 14,
      fontWeight: "600",
      color: "#FFFFFF",
    },
    bannerContent: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 4
    },
    progressValues: {
      alignItems: "center",
      marginRight: 16,
      color: "#FFFFFF"
    },
    bannerNumProgress: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#FFFFFF"
    },
    bannerNameProgress: {
      fontSize: 14,
      fontWeight: "500",
      color: "#FFFFFF"
    },
    content: {
      height: "100%",
      backgroundColor: "#FFF",
      borderTopEndRadius: 40,
      borderTopStartRadius: 40,
      marginTop: 32,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,
      
      elevation: 9,
    },
    contentGroupButton: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 8
    },
    contentButton: {
      height: 40,
      width: 140,
      backgroundColor: "#7C91F4",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 18,
      marginLeft: -16
    },
    contentButtonText: {
      fontSize: 14,
      fontWeight: "bold",
      color: "#FFFFFF"
    }
  })
}