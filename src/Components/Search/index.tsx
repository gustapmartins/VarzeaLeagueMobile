import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { ISearch } from '../../Interface/Components/ISearch';
import { MatchMock } from '../../Mock/MatchMock';
import Icon from "react-native-vector-icons/AntDesign";
import styles from './styles';

export default function Search({ IconName }: ISearch) {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text: string) => {
        setSearchText(text)
        console.log('Searching for:', text);
    };

    return (
        <>
            <View style={styles.card}>
                {IconName != null && <Icon style={styles.icon} name={IconName} />}
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
                    {MatchMock.length == 0 ? (
                        <Text>Not Found</Text>
                    ) : (
                        MatchMock.map((item, index) => (
                            <View style={styles.modalContent} key={index}>
                                <View style={styles.teamContent}>
                                    <Image source={{ uri: item.homeTeam.img }} style={styles.img} />
                                    <Text style={styles.goals}>{item.homeTeam.goals}</Text>
                                </View>
                                <Text style={styles.vsText}>VS</Text>
                                <View style={styles.teamContent}>
                                    <Image source={{ uri: item.visitingTeam.img }} style={styles.img} />
                                    <Text style={styles.goals}>{item.visitingTeam.goals}</Text>
                                </View>
                            </View>
                        ))
                    )}
                </View>
            )}
        </>
    );
};