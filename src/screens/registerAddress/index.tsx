import { View, Text, TextInput, Image } from "react-native";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Header } from "../../components/header";

export function RegisterAddress() {

    const navigation = useNavigation<any>();

    const handleNavigate = () => {
        navigation.navigate("RegisterAccount");
    };

    return (
        <Background>
            <View style={styles.container}>

                <Header />

                <Text style={styles.title}>Para comecar, insira seu endereco</Text>
                <Text style={styles.label}>CEP * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu CEP"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Endereço * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu endereço"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Número * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu número"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Complemento * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu complemento"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Button title="Continuar" onPress={handleNavigate} />

            </View>
        </Background>
    );
}