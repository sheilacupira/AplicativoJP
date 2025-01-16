import { useState } from 'react';
import { View, ScrollView, Text, Image, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { styles } from './HomeStyle';
import InputCustom from '../components/inputCustom';
import Header from '../components/header';


export default function Home() {

  const [pesquisa, onChangePesquisa] = useState('');

  const tableData = [
    { id: '1', dia: '01', mes: 'janeiro', ano: 2025, local: 'Joao Pessoa' },
    { id: '2', dia: '11', mes: 'fevereiro', ano: 2025, local: 'Porto de Galinhas' },
    { id: '3', dia: '01', mes: 'março', ano: 2025, local: 'Joao Pessoa' },
    { id: '4', dia: '15', mes: 'maio', ano: 2025, local: 'Porto de Galinhas' },
  ];


  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ height: '100%', flexDirection: 'column' }}>

        <View style={{ flex: 0.4, flexDirection: 'row' }} >
          <Header
            avatar={require('../assets/avatar.jpg')}
            title={'Olá, usuário!'}
            calendar={false}
            menu={false}
          />
        </View>

        <View style={{ flex: 0.2, backgroundColor: '#e0e2e0',  justifyContent: 'center', paddingLeft: 20, paddingRight: 20 }} >
          <InputCustom
            onChangeText={onChangePesquisa}
            value='pesquisa'
          />
        </View>
        
        <View style={{ flex: 0.6, backgroundColor: '#e0e2e0' }}>

          <ScrollView horizontal={true}>
            <View style={styles.item}>
              <Image
                source={{ uri: 'https://www.viajali.com.br/wp-content/uploads/2018/08/porto-de-galinhas-praia-11-730x913.jpg' }}
                style={styles.scrollImage}
              />
              <Text style={styles.scrollSubtitle}>Loft Porto de Galinhas</Text>
            </View>

            <View style={styles.item}>
              <Image
                source={{ uri: 'https://emalgumlugardomundo.com.br/wp-content/uploads/2018/05/Praias-de-Joao-Pessoa-Orla-de-Joao-Pessoa-10.jpg' }}
                style={styles.scrollImage}
              />
              <Text style={styles.scrollSubtitle}>Loft João Pessoa</Text>
            </View>

            <View style={styles.item}>
              <Image
                source={{ uri: 'https://th.bing.com/th/id/OIP.96-F2_sFWMU-a_nhzHMKSAHaLG?w=1024&h=1535&rs=1&pid=ImgDetMain' }}
                style={styles.scrollImage}
              />
              <Text style={styles.scrollSubtitle}>Praia Porto de Galinhas</Text>
            </View>
          </ScrollView>
        </View>
        
        <View style={{ backgroundColor: '#e0e2e0', flex: 0.8 }} >
          <Text style={styles.textTab}>Suas datas</Text>

          {/* Cabeçalho da Tabela */}
          <View style={styles.formHeader}>
            <Text style={[styles.cell, styles.headerText]}>Dia</Text>
            <Text style={[styles.cell, styles.headerText]}>Mês</Text>
            <Text style={[styles.cell, styles.headerText]}>Ano</Text>
            <Text style={[styles.cell, styles.headerText]}>Local</Text>
          </View>

          {/* Linhas da Tabela */}
          <FlatList
            data={tableData}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.row}>
                <Text style={styles.cell}>{item.dia}</Text>
                <Text style={styles.cell}>{item.mes}</Text>
                <Text style={styles.cell}>{item.ano}</Text>
                <Text style={styles.cell}>{item.local}</Text>
              </View>
            )}
            />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


