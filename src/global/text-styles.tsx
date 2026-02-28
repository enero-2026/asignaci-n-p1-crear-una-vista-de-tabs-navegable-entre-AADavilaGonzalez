import { StyleSheet } from "react-native";

import colors from "@/global/colors";

const textStyles = StyleSheet.create({
  h1: { 
    color: colors.text,
    fontSize: 28,
    fontWeight: "bold",
  },
  h2: { 
    color: colors.text,
    fontSize: 24,
  },
  h3: { 
    color: colors.text,
    fontSize: 20,
  },
  h4: { 
    color: colors.text,
    fontSize: 16,
  },
  body: {
    color: colors.text,
    fontSize: 14,
  },
});

export default textStyles;
