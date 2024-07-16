import { ColorValue, GestureResponderEvent } from "react-native";

export interface IButtonNew {
  iconButton?: string;
  size?: number,
  color?: number | ColorValue | undefined,
  onPress?: (event: GestureResponderEvent) => void
}