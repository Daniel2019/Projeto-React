import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import { Button } from "../../components/Button";
import { ButtonWhite } from "../../components/ButtonWhite";

import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/header";

import logoSmall from "../../../assets/app-name-small.png";
import email from "../../../assets/Email_Confirmado.png";

export function RegisterImage() {

  const navigation = useNavigation<any>();

  const handleNavigate = () => {
    navigation.navigate("RegisterSuccessfully");
  };

  return (
    <Background>
      <View style={styles.container}>

        <Header />

        <Text style={styles.title}>Para finalizar, insira uma foto de perfil</Text>
        <Image source={logoSmall} style={styles.imageLogo} resizeMode="stretch" />
        <Text style={styles.title}>Selecionar foto de perfil</Text>
        <ButtonWhite title="Pular esta etapa" onPress={handleNavigate}></ButtonWhite>
        <Button title="Continuar" onPress={handleNavigate}></Button>
      </View>
    </Background>
  );
}
