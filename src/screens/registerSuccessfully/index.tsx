import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import { Button } from "../../components/Button";

import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import logoSmall from "../../../assets/app-name-small.png";
import email from "../../../assets/Email_Confirmado.png";

export function RegisterSuccessfully() {

  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Background>
      <View style={styles.container}>
          <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
          <Image source={email} style={styles.email} resizeMode="stretch" />
          <Text style={styles.title}>Seu perfil foi criado com sucesso!</Text>
          <Text style={styles.subtitle}>Realiza o login com as credencias inseridas nos</Text>
          <Button title="Entrar" onPress={handleNavigate}></Button>
      </View>
    </Background>
  );
}
