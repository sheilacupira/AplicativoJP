import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'100%',
        padding:10,
      },
    titulo:{
        color:'#141921',
        marginTop:20,
        fontSize:20,
        fontWeight:'bold',
        alignContent:'center',
        textAlign:'center'
    },
    texto:{
        color:'#141921',
        marginTop:10,
        fontSize:16,
        alignContent:'center',
        textAlign:'justify',
        padding:10
    },
    scrollImage: {
      marginTop:10,
      width: 127,
      height: 150,
      borderRadius: 10, // Bordas arredondadas para a imagem
      },
      scrollSubtitle: {
        marginTop: 8,
        fontSize: 16,
        color: '#141921',
      },
      item: {
        marginBottom: 20,
        padding:10, 
        alignItems: 'center', // Centraliza os itens
      },
})