import React from "react";
import { Text, View, Button } from 'react-native';

export default function Home(props) {
    return(
    <View>
    <Text>Selecione o Gráfico desejado</Text>
    <Button title="Sair" onPress={()=>props.navigation.navigate('Login')}/>
    <Button title="Total de Professores" onPress={()=>props.navigation.navigate('TotalProfessores')}/>

    </View>)}
