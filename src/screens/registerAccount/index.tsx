import { View, Text, TextInput } from "react-native";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Header } from "../../components/header";

export function RegisterAccount() {

    const navigation = useNavigation<any>();

    const handleNavigate = () => {
        navigation.navigate("RegisterUser");
    };

    return (
        <Background>
            <View style={styles.container}>

                <Header />

                <Text>Insira os dados da sua conta</Text>
                <Text style={styles.label}>E-mail {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu e-mail"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Nome de usuario {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira seu nome de usuario"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Senha {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira sua senha"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Text style={styles.label}>Confirme sua senha {"\n"}</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Insira sua senha"
                    keyboardType="email-address"
                    placeholderTextColor={theme.colors.primary}
                    maxLength={20}
                ></TextInput>

                <Button title="Continuar" onPress={handleNavigate} />

            </View>
        </Background>
    );
}