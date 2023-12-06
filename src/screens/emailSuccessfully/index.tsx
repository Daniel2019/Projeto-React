import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import { Button } from "../../components/Button";

import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import email from "../../../assets/Email_Confirmado.png";

import { Header } from "../../components/header";

export function EmailSuccessfully() {

  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Background>
      <View style={styles.container}>

        <Header />

        <Image source={email} style={styles.email} resizeMode="stretch" />
        
        <Text style={styles.title}>Confira seu e-mail</Text>
        <Text style={styles.subtitle}>Enviamos as instruções em seu e-mail para restaurar a sua senha</Text>
        <Button title="Entrar" onPress={handleNavigate}></Button>
      </View>
    </Background>
  );
}
