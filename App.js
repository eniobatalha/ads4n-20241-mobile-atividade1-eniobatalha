import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./src/pages/login/LoginScreen.js";
import SignupScreen from './src/pages/signup/SignupScreen.js';
import ContatosScreen from './src/pages/contatos/ContatosScreen.js';
import NovoContatoScreen from './src/pages/novoContato/novoContatoScreen.js';
import AlteraContatoScreen from './src/pages/alteraContato/alteraContatoScreen.js';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Contatos" component={ContatosScreen} />
        <Stack.Screen name="NovoContato" component={NovoContatoScreen} />
        <Stack.Screen name="AlteraContato" component={AlteraContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
