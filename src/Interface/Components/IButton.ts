import { AnimatableNumericValue, DimensionValue, GestureResponderEvent } from "react-native";

export interface IButton {
  labelButton?: string;
  widthButton?: DimensionValue;
  heightButton?: DimensionValue;
  borderRadius?: AnimatableNumericValue;
  marginTop?: number;
  onPress?: (event: GestureResponderEvent) => void
}