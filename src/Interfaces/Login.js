import React from "react";
import { Button, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';

export default function Login(props) {
    console.log(props);
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textoInfo}>Preecha seus dados de acesso:</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={number}
                placeholder="Usuário"
                keyboardType="text"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Senha"
                keyboardType="numeric"
            />
            <Button title="Entrar" color="#841584" onPress={()=>props.navigation.navigate('Home')}/>
            <Text style={styles.esqueceusenha}>Esqueceu a senha?</Text>
        </SafeAreaView>
)}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 8,
      borderColor:'#AB58B9',
      lineHeight:24,
    },
    container:{
        flex: 1,
        flexDirection:'column',
        padding: 16,

    },
    textoInfo:{
        fontSize: 16,
        textAlign:'center',
        
    },
    esqueceusenha:{
        color:'#AB58B9',
        textAlign:'center',
        textDecorationLine:'underline'
    }
  });
