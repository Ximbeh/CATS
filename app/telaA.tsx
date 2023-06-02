import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";




export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={(require('../assets/Logo.png'))} />
      <View style={styles.titulos}>
        <Text style={styles.titulo}>CATS</Text>
        <Text style={styles.sobre}>sobre</Text>
      </View>

      <Text style={styles.texto}>Criada em 2023, a CATS é um site que tem como objetivo a rapida e facil divulgação da imagens de seus queridos. Já contamos com mais de 20.000 fotos e mais a cada dia!</Text> 
        <Link style={styles.botao} href="/">voltar</Link>
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
  titulos: {
    position: 'relative',
    marginBottom: 20,
  },
  titulo:{
    fontSize:90,
    fontWeight:'bold',
    color: '#1D0B20',
    marginTop: -20,
  },
  sobre: {
    position: 'absolute',
    fontSize: 40,
    fontWeight:'bold',
    color: '#1D0B20',
    right: 0,
    bottom: -20,
  },
  texto: {
    color: '#39373E',
    fontSize: 17,
    marginHorizontal: 70,
    textAlign: 'center',
    fontWeight: '600'
  },
  link: {
    color: '#1D0B20',
  },
  botao: {
    backgroundColor: '#1D0B20',
    color: '#fff',
    paddingHorizontal: 25,
    paddingVertical: 7,
    borderRadius: 7,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
});