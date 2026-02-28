
import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import commonStyles from '@/global/common-styles';
import TextoEnCaja from "@/components/TextoEnCaja";

export default function DetallesAlumno() {
  return (
    <View style={commonStyles.backgound}>
      <TextoEnCaja texto="Hola 2"/>
    </View>
  );
}
