import { ScrollView, Text, View } from 'react-native';

import React from 'react';
import Style from '../Style';

const ListWithMapFunc = () => {
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
            id: 5,
            name: "Tony",
        },
        {
            id: 6,
            name: "kirat"
        },
        {
            id: 7,
            name: "gurkirat"
        },
        {
            id: 8,
            name: "harkirat"
        },
        {
            id: 9,
            name: "jaskaran"
        },
        {
            id: 10,
            name: "Tony",
        },
        {
            id: 11,
            name: "kirat"
        },
        {
            id: 12,
            name: "gurkirat"
        },
        {
            id: 13,
            name: "harkirat"
        },
        {
            id: 14,
            name: "jaskaran"
        },
        {
            id: 15,
            name: "Tony",
        },
    ];
    return (
        <View style={Style.container}>
            <Text style={Style.text}>List With Map Function</Text>
            <ScrollView>
                {
                    users.map((item) => <Text style={Style.item}>{item.name}</Text>)
                }
            </ScrollView>
        </View>
    );
}

export default ListWithMapFunc;
