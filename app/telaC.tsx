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

      <View style={styles.imagens}>
        <View>
                <Image source={require('../assets/gato1.png')} style={styles.imagem}/>
                <Image source={require('../assets/Gato2.png')} style={styles.imagem}/>
                <Image source={require('../assets/Gato3.png')} style={styles.imagem}/>
                <Image source={require('../assets/Gato4.png')} style={styles.imagem}/>
            </View>
            <View>
                <Image source={require('../assets/Gato5.png')} style={styles.imagem}/>
                <Image source={require('../assets/Gato6.png')} style={styles.imagem}/>
                <Image source={require('../assets/Gato7.png')} style={styles.imagem}/>
                <Image source={require('../assets/Gato8.png')} style={styles.imagem}/>
            </View>
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

  logos: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,   
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
    imagens:{
    flex:1,
    display:'flex',
    flexDirection:'row'
  },
  imagem:{
    width:150,
    height:150,
    marginBottom:10,
    marginLeft:15,
    borderRadius:5,
  }
});
