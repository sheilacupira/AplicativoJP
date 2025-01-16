import { useNavigation } from '@react-navigation/native';
import { ImageBackground, Text, TextInput, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './LoginhoStyle';
import ButtonCustom from '../components/button';
import ModalTest from '../components/modal';
import { useState } from 'react';
import InputCustom from '../components/inputCustom';
import ButtonSecondary from '../components/buttonSecondary';


export default function Loginho() {

  const navigation = useNavigation();
  const [esqueciASenhaModalVisible, setEsqueciASenhaModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [nome, setNome] = useState('');
  const [criarSenha, setCriartSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('')

  function navHome() {
    navigation.navigate('Home')
  }
  const esqueciASenhaInputs = [
    { placeholder: 'Digite seu celular', keyboardType: 'number', value: celular, onChangeText: setCelular },
  ];
  const criarContaInputs = [
    { placeholder: 'Nome', value: nome, onChangeText: setNome },
    { placeholder: 'celular', keyboardType: 'numeric', value: celular, onChangeText: setCelular },
    { placeholder: 'CPF', value: cpf, onChangeText: setCpf },
    { placeholder: 'Data de Nascimento', value: dataNasc, onChangeText: setDataNasc },
    { placeholder: 'Senha', secureTextEntry: true, value: criarSenha, onChangeText: setCriartSenha },
    { placeholder: 'Confirmar Senha', secureTextEntry: true, value: confirmarSenha, onChangeText: setConfirmarSenha },
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: '100%', flexDirection: 'column' }}>

        <View style={{ flex: 1, justifyContent: 'center' }} >
          <ImageBackground source={require('../assets/logo1.png')} resizeMode="cover" style={styles.image}>

            <View style={{ flex: 1 }}></View>

            <View style={[styles.overlay, { flex: 2 }]}>

              <Text style={styles.formTitle}>Faça seu Login</Text>

              <InputCustom
                placeholder='CPF'
                keyboardType='numeric'
                value={cpf}
                onChangeText={(text) => setCpf(text)}
              />

              <InputCustom
                placeholder='Senha'
                value={senha}
                onChangeText={(text) => setSenha(text)}
              />

              <ButtonCustom titulo="Entrar"
                onPress={navHome}
              />

              <View style={{ flex: 10, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ flex: 1 }}>
                  <ButtonCustom titulo="Criar conta" onPress={() => setModalVisible(true)} />
                </View>

                <View style={{ flex: 1 }}>
                  <ButtonSecondary titulo="Esqueci a senha" onPress={() => setEsqueciASenhaModalVisible(true)} />
                </View>
              </View>

              <ModalTest
                modalVisible={esqueciASenhaModalVisible}
                onPress={() => setEsqueciASenhaModalVisible(false)}
                titulo="Esqueci a senha"
                inputs={esqueciASenhaInputs as any}
              />

              <ModalTest modalVisible={modalVisible}
                onPress={() => setModalVisible(false)}
                titulo={'Crie sua conta'}
                inputs={criarContaInputs as any}
              />

            </View>

            <View style={{ flex: 1 }}></View>

          </ImageBackground>

        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

