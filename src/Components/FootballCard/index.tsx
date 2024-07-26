import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import { MatchViewDto } from "../../Interface/Dto/IMatchDto";

export default function FootballCard({
  homeTeamModel,
  visitingTeamModel,
  onPress,
}: MatchViewDto) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.teamContainer}>
          <Image source={require("./brasao.png")} style={styles.teamImage} />
          <Text style={styles.goalsText}>{homeTeamModel.nameTeam}</Text>
          <Text style={styles.goalsText}>{0}</Text>
        </View>
        <Text style={styles.vsText}>VS</Text>
        <View style={styles.teamContainer}>
          <Image source={require("./brasao.png")} style={styles.teamImage} />
          <Text style={styles.goalsText}>{visitingTeamModel.nameTeam}</Text>
          <Text style={styles.goalsText}>{0}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
