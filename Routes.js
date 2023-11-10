import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import '@react-native-firebase/database';
import ListarPlantas from './Telas/ListarPlantas';
import AdicionarPlantas from './Telas/AdicionarPlantas';
import EditarPlantas from './Telas/EditarPlantas';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Listar'
          component={ListarPlantas}
          options={{ title: 'Lista de Plantas' }}
        />
        <Stack.Screen
          name='Adicionar'
          component={AdicionarPlantas}
          options={{ title: 'Adicionar Planta:' }}
        />
        <Stack.Screen
          name='Editar'
          component={EditarPlantas}
          options={{ title: 'Editar Planta:' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
