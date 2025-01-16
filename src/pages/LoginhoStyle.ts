import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      color: '#141921',
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#141921',
      padding: 10
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: '#141921',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    overlay: {
      backgroundColor: 'rgba(241, 236, 232, 0.7)', // Para adicionar um efeito de sobreposição (opcional)
      padding: 20,
      borderRadius: 10,
    },
    formTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '',
      marginTop: 10,
      marginBottom: 10,
      textAlign: 'center',
      alignItems: 'center'
    },
  });
  