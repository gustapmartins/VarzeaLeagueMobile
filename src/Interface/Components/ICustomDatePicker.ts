import { Dispatch, SetStateAction } from "react";

export interface ICustomDatePicker {
    setFormattedDate: React.Dispatch<React.SetStateAction<string>>;
    formattedDate: string;
}