import { View, StatusBar, StyleSheet } from "react-native";
import { ReactNode } from "react";

import { COLORS } from "../utils";

interface Props {
  children: ReactNode;
  styles?: object;
}

export default function Screen({ children, styles: customStyles }: Props) {
  return <View style={[styles.screen, customStyles]}>{children}</View>;
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    backgroundColor: COLORS.white,
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
