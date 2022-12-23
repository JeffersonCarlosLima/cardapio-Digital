import React from "react";
import { StyleSheet, Image, Dimensions, View, Text } from "react-native";
import imgTopo from '../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Carrinho() {
    return<>
    <Image source={imgTopo} style={styles.topo}/>
    <Text style={styles.cartTitle}>Detalhes do Carrinho</Text>
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

    }
});

