import { FlatList, Text, View } from 'react-native';

import React from 'react';
import Style from '../Style';

const Flatlist = () => {
    const users = [
        {
            id: 1,
            name: "kirat"
        },
        {
            id: 2,
            name: "gurkirat"
        },
        {
            id: 3,
            name: "harkirat"
        },
        {
            id: 4,
            name: "jaskaran"
        },
        {
            id:5,
            name: "Tony",
        },
    ];
    return (
        <View style={Style.container}>
        <Text style={Style.text}>Flatlist</Text>
            <FlatList
                data={users}
                renderItem={({item})=><Text style={Style.item}>{item.name}</Text>}
                keyExtractor={item=>item.id}
            />
        </View>
    );
}

export default Flatlist;
