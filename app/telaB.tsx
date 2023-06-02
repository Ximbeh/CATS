import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import {Link} from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logos}>
        <Image style={styles.logo} source={(require('../assets/Logo.png'))} />
        <Text style={styles.titulo}>CATS</Text>
      </View>
      <Text style={styles.sobre}>Cadastro</Text>

      <View style={styles.inputs}>
        <TextInput 
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#39373E"
        />
        <TextInput 
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#39373E"
        />
        <TextInput 
          style={styles.input}
          placeholder="Data Nasc."
          placeholderTextColor="#39373E"
        />
        <TextInput 
          style={styles.input}
          placeholder="CPF"
          placeholderTextColor="#39373E"
        />
      </View>
      <Link style={styles.botao} href="/telaC">Salvar</Link>
      <Text style={styles.texto}>Já possue uma conta?<Link style={styles.link} href="/">Faça Login.</Link> </Text> 


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

  logos: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  logo: {
    width: 80,
    height: 75,
  },
  titulo:{
    fontSize:60,
    fontWeight:'bold',
    color: '#1D0B20',
  },
  sobre: {
    fontSize: 40,
    fontWeight:'bold',
    color: '#1D0B20',
    marginTop: 20,
  },
  inputs: {
    marginTop: 10,
  },

 input: {
  backgroundColor:'#C1BDCD',
  borderRadius: 10,
  fontWeight: '600',
  paddingVertical: 8,
  paddingHorizontal: 10,
  marginBottom: 15,
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
texto: {

  marginTop: 20,
  color: '#39373E',
  fontSize: 14,
  marginHorizontal: 80,
  textAlign: 'center',
  fontWeight: '600'
},
link: {
  color: '#1D0B20',
},
});
