import { ScrollView, Text, View } from 'react-native';

import React from 'react';
import Style from '../Style';

const GridWithDynamicData = () => {
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
    ];
    return (
        <View style={Style.container}>
            <Text style={Style.text}>Grid With Dynamic Data</Text>
            <View style={Style.containerFlex}>
                    {
                        users.map((items) =><Text style={Style.itemFlex}>{items.name}</Text>)
                    }
            </View>
        </View>
    );
}

export default GridWithDynamicData;
