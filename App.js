import { StatusBar } from 'expo-status-bar';
import {SafeAreaView} from 'react-native';
import Carrinho from './src/Interfaces/carrinho';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Carrinho/>
   
    </SafeAreaView>
  );
}

