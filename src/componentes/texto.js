import React from "react";
import { Text, StyleSheet } from "react-native";


export default function Titulo({children}){

    return <Text style={stylestext.texto}>{children}</Text>
};
    const stylestext = StyleSheet.create({
        texto:{
            fontFamily: "Titulo",
        }
    });
