import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from 'react-native';
import Header from '../components/header';
import { styles } from './SobreNosStyles';


export function SobreNos (){
    return(
       <SafeAreaProvider>
          <SafeAreaView style={{ height: '100%', flexDirection: 'column' }}>
            <View style={{ flex: 0.5, flexDirection:'row' }} >
                <View style={{flex: 1,  }} >
                    <Header 
                        avatar={require('../assets/avatar.jpg')}
                        title={'Sobre nós'} 
                        calendar={false} 
                        menu={false}
                    />
                </View> 
            </View>

            <View style={{flex:1.5, flexDirection:'row', backgroundColor: '#e0e2e0'}}>
                    <View style={{marginTop:20,  justifyContent:'flex-start',}}>
                        <Text style={[styles.texto]}>vfnjgreugvjfnipuwhgu9hgbnkafmvklmfboipgjrtg90jthiontkbfmklbmfiogj598ugjreimv
                            nfbnubitntibntpmbotpmbopjgiorbnnbkfmbpmjbijiotnbnbmm
                        </Text>
                    </View>
            </View>

            <View style={{flex:0.5, flexDirection:'row', backgroundColor: '#e0e2e0'}}>
                    
                <View style={[styles.footer]}>
                    <Text>
                       Todos os direitos reservados
                    </Text>
                    <Text>
                       Criado por WI Consultoria
                    </Text>
                </View>
            </View>
           
          </SafeAreaView>
       </SafeAreaProvider>
    )
}