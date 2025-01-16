import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titulo:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign:'center',
        color:'#141921'
    },
    texto:{
        fontSize:16,
        fontWeight:'bold',
        textAlign:'left',
        color:'#141921',
        marginLeft:15
    },
    avatar:{
        borderRadius:200,
        borderColor: '#141921',
        borderWidth:1,
        resizeMode: 'cover',
        width:100,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        marginTop:20,
        marginLeft:120
       },
       button: {
        backgroundColor: '#141921',
        fontSize: 32,
        fontWeight: 'bold',
        justifyContent: 'center',
        padding: 12,
        margin: 15,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#141921',
        alignItems: 'center'
    },
    buttonText:{
        color:'#9f8551',
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize:20
    }

})