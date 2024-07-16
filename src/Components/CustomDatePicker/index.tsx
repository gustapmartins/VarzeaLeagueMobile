import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './styles';
import Icon from "react-native-vector-icons/Feather";
import { ICustomDatePicker } from '../../Interface/Components/ICustomDatePicker';

export default function CustomDatePicker(props: ICustomDatePicker) {
  const handleDateChange = (inputText: string) => {
    // Remove qualquer caractere que não seja número
    const cleanedInput = inputText.replace(/[^0-9]/g, '');

    // Adiciona traços conforme necessário
    let formattedInput = cleanedInput;
    if (cleanedInput.length > 4) {
      formattedInput = `${cleanedInput.slice(0, 4)}-${cleanedInput.slice(4)}`;
    }
    if (cleanedInput.length > 7) {
      formattedInput = `${formattedInput.slice(0, 7)}-${formattedInput.slice(7)}`;
    }

    // Atualiza o estado com a data formatada
    props.setFormattedDate(formattedInput);
  };

  return (
    <View style={styles.container}>
      {Icon != null && <Icon name="calendar"/>}
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={props.formattedDate}
        onChangeText={handleDateChange}
        keyboardType="numeric"
        maxLength={10}
      />
    </View>
  );
}
