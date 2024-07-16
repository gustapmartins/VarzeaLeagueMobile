import { Dispatch, SetStateAction } from "react";
import { GestureResponderEvent } from "react-native";

type IconName = "AntDesign" | "MaterialCommunityIcons";

export interface IInput {
    placeholder: string;
    checkField?: boolean;
    placeholderError?: string;
    onChangeValue: Dispatch<SetStateAction<string>>;
    value: string;
    Icon?: string;
    secureTextEntry: boolean
}