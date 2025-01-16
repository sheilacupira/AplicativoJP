import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 8
    },
    text: {
      color: '#141921',
      fontSize: 24,
      lineHeight: 50,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#96A4A5',
    },
    scrollContainer: {
      height: 200, // Teste com altura fixa
      backgroundColor: '#f9f9f9',
    },
    item: {
      marginBottom: 20,
      paddingBottom:10, 
      paddingLeft:10,
      alignItems: 'center', // Centraliza os itens
    },
    scrollImage: {
      marginTop:10,
      width: 127,
      height: 150,
      borderRadius: 10, // Bordas arredondadas para a imagem
    },
    scrollSubtitle: {
      marginTop: 10,
      fontSize: 14,
      color: '#141921',
    },
    textTab: {
      marginTop:6,
      marginLeft:10,
      color: '#141921',
      fontSize: 24,
    },
    formContainer: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f9f9f9',
    },
    formHeader: {
      flexDirection: 'row',
      backgroundColor: '#96A4A5',
      marginTop:10,
      padding: 10,
      borderRadius: 5,
    },
    headerText: {
      fontWeight: 'bold',
      color: '#141921',
    },
    row: {
      flexDirection: 'row',
      backgroundColor: '#e0e2e0',
      padding: 10,
      marginVertical: 2,
      borderRadius: 5,
      elevation: 1, // Sombra no Android
      shadowColor: '#000', // Sombra no iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    cell: {
      flex: 1, // Divide o espaço igualmente entre as colunas
      textAlign: 'center',
      fontSize: 16,
    },

  });