import { StyleSheet } from "react-native";
import { COLORS } from "../../Styles/GlobalColors";

const styles = StyleSheet.create({
  cardNotification: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 8,
    marginVertical: 8,
    padding: 22,
  },

  sectionText: {
    width: "80%",
  },

  sectionIcon: {
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    fontSize: 26,
    color: "green",
  },

  textNotification: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: "700",
  },

  dateCreatedNotification: {
    paddingTop: 8,
    fontSize: 16,
    color: COLORS.textGray,
    fontWeight: "400",
  }
})

export default styles;