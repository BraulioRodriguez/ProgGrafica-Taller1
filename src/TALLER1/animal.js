import React from "react";
import {Text} from 'react-native';
import {View} from 'react-native';
import {StyleSheet} from "react-native";
import {Image} from 'react-native';


const Animal = () => {
    const data = {
        name: "Siamang",
        latin_name: "Hylobates syndactylus",
        animal_type: "Mammal",
        active_time: "Diurnal",
        length_min: "1.90",
        length_max: "2.00",
        weight_min: "20",
        weight_max: "23",
        lifespan: "23",
        habitat: "Tropical rainforest",
        diet: "Primarily fruit and leaves, some invertebrates",
        geo_range: "Malaysia and Sumatra",
        image_link: "https://upload.wikimedia.org/wikipedia/commons/a/a4/DPPP_5348.jpg",
        id: 162,
    };
    return (
        <View style={clStyle.container}>
            <View>
                <Text style={clStyle.text1}>Nombre: {data.name}</Text>
                <Text style={clStyle.text2}>Latin: {data.latin_name}</Text>
                <Text style={clStyle.text3}>Tipo: {data.animal_type}</Text>
                <Text style={clStyle.text3}>Tiempo activo: {data.active_time}</Text>
            </View>

            <View>
                <Image source={{uri: data.image_link}} style={clStyle.img}/>
            </View>

            <View>
            <Text style={clStyle.text3}>Tamano: {data.length_min} - {data.length_max} m.</Text>
            <Text style={clStyle.text3}>Peso: {data.weight_min} - {data.weight_max} kg.</Text>
            <Text style={clStyle.text3}>Expectativa de vida: {data.lifespan} años</Text>
            <Text style={clStyle.text3}>Ubicacion: {data.geo_range}</Text>
            <Text style={clStyle.text4}>ID: {data.id}</Text>
            </View>
        </View>
    )
}

const clStyle = StyleSheet.create ({
    container: {
        flex: 1,
        marginHorizontal: 60,
    },
    text1: {
        color: 'gray',
        fontSize: 28,
        fontWeight: 'bold'
    },
    text2: {
        color: 'gray',
        fontSize: 16,
        fontStyle: 'italic',
    },
    text3: {
        color: 'gray',
        fontSize: 16,
    },

    text4: {
        color: 'gray',
        fontSize: 16,
        fontWeight: 'bold',
    },
    img: {
        width: 250,
        height: 250,
    },
})

export default Animal;