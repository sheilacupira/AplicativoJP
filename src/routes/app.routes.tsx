import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home";
import Loginho from "../pages/Loginho";
import { SobreNos } from "../pages/SobreNos";
import MinhaConta from "../pages/MinhaConta";
import { MeuImovel } from "../pages/MeuImovel";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Loginho" component={Loginho} />
            <Screen name="Home" component={Home} />
            <Screen name="SobreNos" component={SobreNos} />
            <Screen name="MinhaConta" component={MinhaConta} />
            <Screen name="MeuImovel" component={MeuImovel} />
        </Navigator>
    );
}