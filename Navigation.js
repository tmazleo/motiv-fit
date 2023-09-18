// Navigation.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './src/pages/Cadastro';
import Room from './src/pages/Room';
import ChatRoom from './src/pages/ChatRoom';
import Home from './src/pages/Home';
import Information from './src/pages/Information';
import Ajuda from './src/pages/Ajuda';


const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Screen1">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Room" component={Room} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
                <Stack.Screen name="ChatRoom" component={ChatRoom} />
                <Stack.Screen name="Information" component={Information} />
                <Stack.Screen name="Ajuda" component={Ajuda} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
