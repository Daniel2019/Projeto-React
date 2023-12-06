import { View, Text, TextInput } from "react-native";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Header } from "../../components/header";

export function RegisterUser() {

    const navigation = useNavigation<any>();

    const handleNavigate = () => {
        navigation.navigate("RegisterImage");
    };

    return (
        <Background>
            <View style={styles.container}>

                <Header />

                <Text style={styles.title}>Insira os dados pessoais</Text>
                <Text style={styles.label}>Nome * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu e-mail"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Sobrenome * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu sobrenome"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Celular * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu celular"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Telefone * {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu telefone"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Button title="Continuar" onPress={handleNavigate} />

            </View>
        </Background>
    );
}