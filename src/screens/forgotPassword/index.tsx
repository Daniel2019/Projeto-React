import { View, Text } from "react-native";
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";

import { Button } from "../../components/Button";

import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

import { Header } from "../../components/header";

export function ForgotPassword() {

  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("EmailSuccessfully");
  };

  return (
    <Background>
      <View style={styles.container}>
        
        <Header />

        <Text style={styles.title}>Esqueceu a senha?</Text>
        <Text style={styles.subtitle}>Digite seu e-mail abaixo para receber as instruções de redefinição de senha.</Text>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          placeholderTextColor={theme.colors.primary}
        >
        </TextInput>
        <Button title="Recuperar senha" onPress={handleNavigate}></Button>
      </View>
    </Background>
  );
}
