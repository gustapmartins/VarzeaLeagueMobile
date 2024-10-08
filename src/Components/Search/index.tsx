import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from "react-native-vector-icons/AntDesign";
import styles from './styles';
import { ISearch } from '../../Interface/Components/ISearch';
import { COLORS } from '../../Styles/GlobalColors';

export default function Search({ matches }: ISearch) {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: string) => {
        setSearchText(text);
    };

    const filteredMatches = matches && Array.isArray(matches) ? matches.filter(match =>
        match.homeTeamModel.nameTeam.toLowerCase().includes(searchText.toLowerCase()) ||
        match.visitingTeamModel.nameTeam.toLowerCase().includes(searchText.toLowerCase())
    ) : [];

    return (
        <>
            <View style={styles.card}>
                <Icon style={styles.icon} name="search1" />
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    underlineColor='transparent'
                    activeUnderlineColor='transparent'
                    textColor='#fff'
                    placeholderTextColor="rgba(255, 255, 255, 0.7)"
                    value={searchText}
                    onChangeText={(e) => handleSearch(e)}
                />
            </View>

            {searchText.length > 0 && (
                <View style={styles.modalContainer}>
                    {filteredMatches.length == 0 ? (
                        <View style={styles.modalContent}>
                            <Text style={{color: COLORS.primary, fontWeight: "600"}}>Not Found</Text>
                        </View>
                    ) : (
                        filteredMatches.map((item, index) => (
                            <View style={styles.modalContent} key={index}>
                                <View style={styles.teamContent}>
                                    <Image source={require("./brasao.png")} style={styles.img} />
                                    <Text style={styles.goals}>{0}</Text>
                                </View>
                                <Text style={styles.vsText}>VS</Text>
                                <View style={styles.teamContent}>
                                    <Image source={require("./brasao.png")} style={styles.img} />
                                    <Text style={styles.goals}>{0}</Text>
                                </View>
                            </View>
                        ))
                    )}
                </View>
            )}
        </>
    );
};