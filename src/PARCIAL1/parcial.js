import React, { useEffect, useState } from 'react';
import { Image, Button, ActivityIndicator, FlatList, Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
     try {
      const response = await fetch('https://fakerapi.it/api/v1/persons');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
        <Text style={clStyle.text1}>PROGRAMACION GRAFICA</Text>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <>
            <Image source={{uri: item.image}} style={clStyle.img}/>
            <TouchableHighlight onPress={() => Alert.alert(`UBICACION \n ${item.address.street} `)}> 
              <Text Text style={clStyle.text3}>Nombre: {item.lastname}, {item.firstname} {"\n"}Numero: {item.phone} {"\n"}Fecha de nacimiento {item.birthday}</Text>                 
            </TouchableHighlight>
            </>
          )}
        />
      )}
      <Button color="#ff5c5c"
        title="PAGINA WEB"
        onPress={() => Alert.alert('${item.website}') }
      />
    </View>
  );
};

const clStyle = StyleSheet.create ({
    container: {
        flex: 1,
        marginHorizontal: 60,
    },
    text1: {
        color: 'gray',
        fontSize: 20,
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
        padding: 50,
        width: 100,
        height: 100,
        borderRadius: 100
    },
    button: {
      backgroundColor: 'black',
    }
})
