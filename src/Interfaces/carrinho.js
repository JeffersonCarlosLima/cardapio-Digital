<<<<<<< HEAD
import React from "react";
import { StyleSheet, Image, Dimensions, View, Text, Alert, Button } from "react-native";
import imgTopo from '../../assets/topo.png';
import Titulo from './src/componentes/texto';

const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return<>
    <Image source={imgTopo} style={styles.topo}/>
    <Text style={styles.cartTitle}>Detalhes do Carrinho</Text>
        <View style={styles.textsproduto}>
            <Titulo>Espeto de picanha</Titulo>
            <Text style={styles.descricaoProduto}>Espeto completo de picanha, com acompanhamento de arroz, mandioca, vinagrete, e farofa</Text>
            <Text>R$40,00</Text>
            <Button title="Adicionar ao carrinho" color="#089944" onPress={() => Alert.alert('fazi o ELi')}/>
        </View>
    </>
}
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
    textsproduto:{
        margin:16
    },
    nomeProduto:{
        width:"100%",
        fontSize:18,
        
    },
    descricaoProduto:{
        width:"100%",
        marginTop: 16,
        fontSize: 14,
    }

});

=======
import React from "react";
import { StyleSheet, Image, Dimensions, View, Text, Alert, Button } from "react-native";
import imgTopo from '../../assets/topo.png';
import Titulo from './src/componentes/texto';

const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return<>
    <Image source={imgTopo} style={styles.topo}/>
    <Text style={styles.cartTitle}>Detalhes do Carrinho</Text>
        <View style={styles.textsproduto}>
            <Titulo>Espeto de picanha do LULA</Titulo>
            <Text style={styles.descricaoProduto}>Espeto completo de picanha, com acompanhamento de arroz, mandioca, vinagrete, e farofa</Text>
            <Text>R$40,00</Text>
            <Button title="Adicionar ao carrinho" color="#089944" onPress={() => Alert.alert('fazi o ELi')}/>
        </View>
    </>
}
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
    textsproduto:{
        margin:16
    },
    nomeProduto:{
        width:"100%",
        fontSize:18,
        
    },
    descricaoProduto:{
        width:"100%",
        marginTop: 16,
        fontSize: 14,
    }

});

>>>>>>> 437fa92757d99ed9676c610246daa975bb4c1915
