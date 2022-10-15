import React from "react";
import {Button, Text, TextInput, View} from "react-native";

const Cumple = (props) => {
    const name = "Braulio";
    const photo = '';
    const age = 0;
    const year = 2022;

    const handledAlert = () => {
        console.log("Evento desde App")
        alert("Feliz Cumpleaños!" + props.name)
    };
    return (
        <View style={{
            flex: 1,
            marginVertical: 50,
        }}>
            <Text 
            style={{
                fontSize: 30,
                color: 'blue',
                backgroundColor: 'yellow',
        }}> {props.title || 'Componente sin nombre'}
            </Text>
            
            <View style={{
                padding: 20,
            }}>
                <Text> {props.name} </Text>
                <TextInput 
                defaultValue="Ingrese su nombre"
                style={{
                   height: 40,
                   borderColor: 'red',
                   borderWidth: 1,
                }}
            />
            </View>        
            <Button title="Mostrar" onPress={handledAlert}/>  
        </View>
    )
}

export default Cumple;