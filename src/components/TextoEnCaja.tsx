import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import colors from "@/global/colors";
import textStyles from "@/global/text-styles";

type TextBoxProps = {
  texto: string;
};

export default function TextoEnCaja({ texto }: TextBoxProps) {
  return (
    <View style={styles.box}>
      <Text style={textStyles.h1}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});