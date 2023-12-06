import { View, Text, Image } from "react-native";
import { styles } from "./styles";

import { Button } from "../../components/Button";
import { ButtonWhite } from "../../components/ButtonWhite";

import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../../components/header";

import image from "../../../assets/ImagemPerfil.png";

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

        <Image source={image} style={styles.image} resizeMode="stretch" />

        <Text style={styles.subtitle}>Selecionar foto de perfil</Text>

        <View style={styles.buttondiv}>
          <ButtonWhite title="Pular esta etapa" onPress={handleNavigate}></ButtonWhite>
          <Button title="Continuar" onPress={handleNavigate}></Button>
        </View>
      </View>
    </Background>
  );
}
