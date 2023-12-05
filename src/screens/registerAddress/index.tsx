import { View, Text, TextInput } from "react-native";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { Button } from "../../components/Button";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

export function RegisterAddress() {

    const navigation = useNavigation<any>();

    const handleNavigate = () => {
        navigation.navigate("RegisterAccount");
    };

    return (
        <Background>
          <View style={styles.container}>
            <Text>Para comecar, insira seu endereco</Text>
            <Text style={styles.label}>CEP {"\n"}</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu CEP"
                keyboardType="email-address"
                placeholderTextColor={theme.colors.primary}
                maxLength={20}
            ></TextInput>

            <Text style={styles.label}>Endereco {"\n"}</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira seu endereco"
                keyboardType="email-address"
                placeholderTextColor={theme.colors.primary}
                maxLength={20}
            ></TextInput>

            <Text style={styles.label}>Numero {"\n"}</Text>
            <TextInput
                style={styles.input}
                placeholder="Insira sua numero"
                keyboardType="email-address"
                placeholderTextColor={theme.colors.primary}
                maxLength={20}
            ></TextInput>

            <Text style={styles.label}>Complemento {"\n"}</Text>
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