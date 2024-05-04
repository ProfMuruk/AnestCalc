import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, RobotoSlab_400Regular, RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab'
import {NavigationContainer} from '@react-navigation/native'


import HomeScreen from './src/telas/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const Stack = createNativeStackNavigator();

  let [ fontCarregada, fontErro] = useFonts({
    "robotoNormal": RobotoSlab_400Regular,
    "robotoNegrito": RobotoSlab_700Bold
  })

  if(!fontCarregada && !fontErro){
    return <View><Text>A fonte não pode ser carregada</Text></View>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:'#6288A6',
          },
          headerTintColor:'#FFF',
          headerTitleAlign:'center',
          headerTitleStyle:{
            fontFamily:'robotoNegrito',
          }
        }}
      >
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{title:"AnestCalc"}}
        />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </NavigationContainer>
  );
}

