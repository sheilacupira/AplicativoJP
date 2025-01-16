import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity,  TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";


interface P {
    exit:any;
}

export function Menu (p:P){
   
   
    const navigation = useNavigation();

    return(
        <View style={{height:'100%',width:'100%',flexDirection:'row'}}>
            <View style={{height:'100%',flex:3, backgroundColor:'#e0e2e0'}}>
                <Text style={[styles.title]}>Menu</Text>

                <TouchableHighlight onPress={() => navigation.navigate('Home')}>
                <Text style={[styles.text]} >Home</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('MeuImovel')}>
                <Text style={[styles.text]} >Meu Imóvel</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('MinhaConta')}>
                <Text style={[styles.text]} >Minha conta</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={() => navigation.navigate('SobreNos')}>
                <Text style={[styles.text]} >Sobre nós</Text>
                </TouchableHighlight> 

                <TouchableHighlight onPress={() => navigation.navigate('Loginho')}>
                <Text style={[styles.text]} >Sair</Text>
                </TouchableHighlight>               
            </View>
            <View style={{height:'100%',flex:1}}>
                <TouchableOpacity onPress={p.exit}style={{width:'100%',height:'100%'}}></TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
 text:{
    marginLeft:10,
    color: '#141921',
    fontWeight:'bold',
    fontSize: 16,
    padding:10,
    borderBottomColor:'#96A4A5',
    borderBottomWidth:1
    
 },
 title:{
    marginTop:50,
    marginLeft:50,
    color: '#141921',
    fontWeight:'bold',
    fontSize: 16
 }
})