import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, PressableProps, KeyboardTypeOptions, TouchableOpacityProps } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import InputCustom from './inputCustom';
import ButtonSecondary from './buttonSecondary';
import ButtonCustom from './button';

interface Props {
  modalVisible: boolean;
  onPress: TouchableOpacityProps['onPress'];
  titulo: string;
  inputs?: {
    placeholder: string;
    keyboardType?: KeyboardTypeOptions;
    value: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
  }[];
}



export default function ModalTest(props: Props,) {
  const inputs = props.inputs || []
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={props.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              {/*Header do Modal*/}
              <Text style={styles.modalHeader}>{props.titulo}</Text>

              {/*Corpo do Modal */}
              <View style={styles.modalContent}>
                {inputs.map((input, index) => (
                  <InputCustom
                    key={index}
                    placeholder={input.placeholder}
                    keyboardType={input.keyboardType || 'default'}
                    value={input.value}
                    password={input.secureTextEntry || false}
                    onChangeText={input.onChangeText}
                  />
                ))}
              </View>

              {/*Footer do Modal */}
                <ButtonCustom titulo="Enviar" />
                <ButtonSecondary titulo="Fechar" onPress={props.onPress} />
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: '#e0e2e0',
    width: '100%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#e0e2e0',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    color: '#2d3644',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#9f8551',
  },
  textStyle: {
    color:  '#e0e2e0',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContent: {
    width: '100%',
  }
});
