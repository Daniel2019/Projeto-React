import React from 'react';
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styles } from "./styles";

import logoSmall from "../../../assets/app-name-small.png";
import backArrow from "../../../assets/back.png";

export function Header() {

    const navigation = useNavigation<any>();

    const handleNavigateBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <RectButton onPress={handleNavigateBack}><Image source={backArrow} style={styles.backArrow} /></RectButton>
            <Image source={logoSmall} style={styles.imageLogo} />
        </View>
    );
}