import React from "react";
import { Button, Text, View } from 'react-native';

export default function TotalProfessores(props) {
    console.log(props);
    return(
        <View>
    <Text>Teste</Text>
    <Button title="Entrar" onPress={()=>props.navigation.navigate('Home')}/>
        </View>
)}
