import {styles} from './MeuImovelStyle';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView } from 'react-native';
import Header from '../components/header';

export function MeuImovel (){
   return(
      <SafeAreaProvider>
         <SafeAreaView style={{ height: '100%', flexDirection: 'column' }}>
            <View style={{flexDirection:'row', flex:0.5, backgroundColor:'green'}}>
               <View style={{flex: 1,  }} >
                  <Header 
                     avatar={require('../assets/avatar.jpg')}
                     title={'Meus Imóveis'} 
                     calendar={false} 
                     menu={false}
                  />                
               </View>
            </View>
            
            <View style={{flexDirection:'row', flex:0.8,}}>
               <Image
                 source={{uri:'https://i.pinimg.com/736x/c9/43/7a/c9437a8afb5c3b1a31771b8e11eb95a4.jpg' }}
                 style= {[styles.image]}
               />
            </View>

            <View style={{flexDirection:'column', flex:0.8, backgroundColor:'#e0e2e0'}}>
               <View>
                 <Text style={[styles.titulo]}>Seu lugar em Joao Pessoa</Text>
               </View>

               <View>
               <Text style={[styles.texto]}>Este é seu lugar de passar momentos inesquíceis com 
                  as pessoas mais importantes para você. Um lugar aconchegante
                  pra você contruir suas melhores memórias...</Text>
               </View>
            </View>

            <ScrollView horizontal={true} style={{ flex: 0.8, backgroundColor:'#e0e2e0' }}>
               <View style={styles.item}>
                  <Image
                    source={{ uri: 'https://i.pinimg.com/736x/7a/c6/ae/7ac6ae3452cb9703d4d9c4de09e45553.jpg' }}
                    style={styles.scrollImage}
                  />
                  <Text style={styles.scrollSubtitle}>Loft Porto de Galinhas</Text>
               </View>
                             
               <View style={styles.item}>
                  <Image
                     source={{ uri: 'https://i.pinimg.com/736x/c9/43/7a/c9437a8afb5c3b1a31771b8e11eb95a4.jpg' }}
                     style={styles.scrollImage}
                  />
                  <Text style={styles.scrollSubtitle}>Loft João Pessoa</Text>
               </View>
                             
               <View style={styles.item}>
                  <Image
                     source={{ uri: 'https://i.pinimg.com/736x/39/4d/90/394d9049bf2086fc5b4ee64e91a159af.jpg' }}
                     style={styles.scrollImage}
                  />
                  <Text style={styles.scrollSubtitle}>Loft Outro lugar</Text>
               </View>
            </ScrollView>
            
         </SafeAreaView>
      </SafeAreaProvider>
   )
}