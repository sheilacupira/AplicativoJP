import { useState } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './MinhaContaStyles';
import Header from '../components/header';
import InputCustom from '../components/inputCustom';





export default function MinhaConta() {
    
    
    return (
      <SafeAreaProvider>
        <SafeAreaView style={{ height: '100%', flexDirection: 'column' }}>
           
          <View style={{ flex: 0.3, flexDirection:'row' }} >
            <View style={{flex: 1,  }} >
              <Header 
                avatar={require('../assets/avatar.jpg')}
                title={'Minha conta'} 
                calendar={false} 
                menu={false}
              />
            </View> 
          </View>
          
          <View style={{ flex: 0.1, flexDirection: 'row' }}>
            <View style={{ flex: 1, backgroundColor: '#e0e2e0' }}>
              <Text style={[styles.titulo]}>
                Sheila
              </Text>
            </View>
          </View>

          <View style={{flex:0.1, backgroundColor: '#e0e2e0' }}>
            <Text style={[styles.texto, ]}>hjhhjk@gmail.com</Text>
           </View>

           <View style={{backgroundColor: '#e0e2e0', }}>
            <Text style={[styles.texto, ]}>Alterar dados</Text>
            <InputCustom
            border='#96A4A5'
            placeholder='Digite sua senha atual'
            onChangeText={undefined}/>
           </View>

           <View style={{ backgroundColor: '#e0e2e0' }}>
           <InputCustom
            border='#96A4A5'
            placeholder='Digite sua nova senha'
            onChangeText={undefined}/>
           </View>

           <View style={{ backgroundColor: '#e0e2e0' }}>
           <InputCustom
            border='#96A4A5'
            placeholder='Repita sua nova senha'
            onChangeText={undefined}/>
           </View>            
          

          <View style={{ flex: 0.5 }} >
              <View style={{ backgroundColor: '#e0e2e0', flex: 1}} > 
              
               <Image
                 source={require('../assets/profileIcon.jpg')}
                 style={styles.avatar}
               />
               <TouchableOpacity style={[styles.button]}>
                 <Text style={[styles.buttonText]}>Salvar</Text>
               </TouchableOpacity> 
              </View>
          </View>

        </SafeAreaView>
      </SafeAreaProvider>
    );
  }


