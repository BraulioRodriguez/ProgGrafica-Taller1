import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Image } from 'react-native';
import ItemParcial from '../components/ItemParcial';

const URL_API = 'https://fakerapi.it/api/v1/persons'

const parcial = () => {
    const [dataApi, getData] = useState();

    const getApiParcial = async () => {
        const result = await fetch(URL_API);
        const json = await result.json();
        getData(json);
    };

    useEffect(() => {
        getData();
    }, []);

    const item = listItem.item;
    return <ItemParcial infoItem={item} />;
};

return (
    <View style={clStyle.container}>
        <FlatList
            data={dataApi}
            keyExtractor={item => item.id}
            renderItem={renderItemApi}
        />
        <View>
            {hidden ? (
                <ActivityIndicator />
            ) : (
              <View>
                <Image source={{uri: item.image}} style={clStyle.img}/>
                <Text style={clStyle.text1}>Nombre: {item.lastname}, {item.firstname}</Text>
            
              </View>
            )};
        </View>
    </View>

)



