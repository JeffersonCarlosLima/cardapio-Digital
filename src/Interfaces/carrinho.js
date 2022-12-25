import React from "react";
import { StyleSheet, Image, Dimensions, View, Text, Button, Alert } from "react-native";
import imgTopo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return<>
    <Image source={imgTopo} style={styles.topo}/>
    
    <Text style={styles.cartTitle}>Detalhes do Carrinho</Text>
        <View style={styles.textsCart}>
            <Text style={styles.titleCart}>Espetinho Completo</Text>
            <Text style={styles.descriptionCart}>espeto completo de picanha, com acompanhamento de arroz, mandioca, vinagrete, e farofa.</Text>
        </View>

        <Button title="Adicionar" onPress={() => Alert.alert('Simple Button pressed')}/>
    </>
}
const App = () => {
    const createTwoButtonAlert = () =>
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );}

const styles = StyleSheet.create({
    topo: {
        with: "100%",
        height: 578/768 * width,
        alignItems: "center",
    },
    cartTitle: {
        width:"100%",
        color: "#FFF",
        fontSize: 18, 
        lineHeight:24,
        marginTop: 32,
        textAlign: "center",
        position: "absolute",

    },
    textsCart: {
        margin:16,
        
    },
    titleCart:{
        width:"100%",
        fontSize: 20,
        lineHeight:28,
        fontWeigth: "bold",
    },
    descriptionCart:{
        fontSize: 14,
        lineHeight:28,
    }
});

