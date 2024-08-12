
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { PantallaInicio } from '../SCREEN/PantallaInicio';
import { PantallaPrincipal } from '../SCREEN/PantallaPrincipal';
import { PantallaRegistro } from '../SCREEN/PantallaRegistro';
import { PantallaProductos } from '../SCREEN/PantallaProductos';

const Stack = createStackNavigator();

export const StartNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ 
      }}
      initialRouteName="PantallaPrincipal"
    >
      <Stack.Screen name="PantallaPrincipal" component={PantallaPrincipal} />
      <Stack.Screen name="PantallaInicio" component={PantallaInicio} />
      <Stack.Screen name="PantallaRegistro" component={PantallaRegistro} /> 
      <Stack.Screen name="PantallaProductos" component={PantallaProductos} /> 
      
      
    </Stack.Navigator>
  );
};