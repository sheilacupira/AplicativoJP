import { View, Text,StyleSheet, Image, ImageSourcePropType, TouchableOpacity  } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { Menu } from "./menu";
import Modal from 'react-native-modal';




interface Props{
  avatar: ImageSourcePropType;
  title?: string; // Use string com "s" minúsculo
  calendar: boolean;
  menu:boolean;
}

export default function Header(props: Props){

   const [isModalVisible, setModalVisible] = useState(false);
   const toggleModal = () => {
      setModalVisible(!isModalVisible);}

    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
         setMenuVisible(!isMenuVisible);}

   return(
    <View style={{flexDirection:'row', flex:1}}>
       <View style={{backgroundColor:'#96A4A5', flexDirection:'column', flex:0.8,alignItems:'center',justifyContent:'center'}}>
         <Image 
           source={props.avatar}
           style={styles.avatar}
         />
       </View>
       <View style={{backgroundColor:'#96A4A5', flexDirection:'column', flex:1}}>
         <Text style={[styles.text]}>{props.title}</Text>
       </View>
       <View style={{backgroundColor:'#96A4A5', flexDirection:'column', flex:0.6}}>
          <View style={{backgroundColor:'#96A4A5', flexDirection:'row', flex:0.6}}>
            <TouchableOpacity onPress={toggleModal} style={styles.iconButton}>
            <Icon name="calendar-today" size={30} color="#2d3644" />
            </TouchableOpacity>
          </View>
          <View style={{backgroundColor:'#96A4A5', flexDirection:'row', flex:0.2}}>
            <TouchableOpacity onPress={toggleMenu} style={styles.iconButton}>
              <Icon name="menu" size={30} color="#2d3644" />
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          isVisible={isMenuVisible}
          animationIn='slideInLeft'
          animationOut='slideOutLeft'
        >
          <Menu exit={toggleMenu}/>
        </Modal>
       {/* Modal para o calendário */}
         <Modal
          isVisible={isModalVisible}
          animationIn='slideInDown'
          animationOut='slideOutDown'
            >
            <View style={styles.modalBackground}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Selecione uma data:</Text>
                    <Calendar
                      onDayPress={(day:Date) => {
                      console.log("Dia selecionado:", day);
                      toggleModal(); // Fecha o modal após selecionar uma data
                      }}
                    />
                    <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
                      <Text style={styles.closeButtonText}>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
         </Modal>
    </View>
   )
}


const styles = StyleSheet.create({
   text:{
    color:'#141921',
    fontWeight:'bold',
    fontSize:20,
    alignItems:'center',
    marginTop:60, 
    marginLeft:15   
   }, 
   avatar:{
    borderRadius:200,
    borderColor: '#141921',
    borderWidth:1,
    resizeMode: 'cover',
    width:100,
    height:100
   },
   iconButton: {
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
   modalBackground: {
      flex: 1,
      backgroundColor: "rgba(241, 236, 232, 0.7)", 
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      width: "90%",
      alignItems: "center",
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
    closeButton: {
      marginTop: 15,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "#141921",
      borderRadius: 5,
    },
    closeButtonText: {
      color: "#9f8551",
      fontSize: 16,
    },
})
