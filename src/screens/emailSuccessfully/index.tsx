import { View, Text, Image, Alert, ActivityIndicator } from "react-native";
import { styles } from "./styles";

import { Button } from "../../components/Button";

import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import logoSmall from "../../../assets/app-name-small.png";
import email from "../../../assets/Email_Confirmado.png";

export function EmailSuccessfully() {

  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Background>
      <View style={styles.container}>
          <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
          <Image source={email} style={styles.email} resizeMode="stretch" />
          <Text style={styles.title}>Confira seu e-mail</Text>
          <Text style={styles.subtitle}>Enviamos as instruções em seu e-mail para restaurar a sua senha</Text>
          <Button title="Entrar" onPress={handleNavigate}></Button>
      </View>
    </Background>
  );
}
