import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";



export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={(require('../assets/Logo.png'))} />
      <Text style={styles.titulo}>CATS</Text>
      <Text style={styles.texto}>Uma comunidade inteira dedicada a divulgação de imagens de seus queridos gatos! Conheça mais <Link style={styles.link} href="/telaA">SOBRE.</Link> </Text> 
      <View style={styles.botoes}>
        <Link style={styles.botao} href="/telaC">Entrar</Link>
        <Link style={styles.botao} href="/telaB">Cadastrar</Link>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82789E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 156,
    height: 150,
  },
  titulo:{
    fontSize:90,
    fontWeight:'bold',
    color: '#1D0B20',
    marginTop: -20,
  },
  texto: {
    color: '#39373E',
    fontSize: 17,
    marginHorizontal: 80,
    textAlign: 'center',
    fontWeight: '600'
  },
  link: {
    color: '#1D0B20',
  },
  botoes: {
    flexDirection: 'row',
  },
  botao: {
    backgroundColor: '#1D0B20',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },



});