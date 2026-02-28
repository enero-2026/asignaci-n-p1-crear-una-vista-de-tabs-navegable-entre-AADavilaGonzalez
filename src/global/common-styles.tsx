import { StyleSheet } from "react-native";

import colors from "@/global/colors";

const commonStyles = StyleSheet.create({
  backgound: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default commonStyles;
