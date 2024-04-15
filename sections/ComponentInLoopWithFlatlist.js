import { FlatList, Text, View } from 'react-native';

import React from 'react';
import Style from '../Style';
import UserData from '../components/UserData';

const ComponentInLoopWithFlatlist = () => {
    const users = [
        { id: 1, name: "kirat", email: "text1@gmail.com" },
        { id: 2, name: "gurkirat", email: "text2@gmail.com" },
        { id: 3, name: "harkirat", email: "text3@gmail.com" },
        { id: 4, name: "jaskirat", email: "text4@gmail.com" },
    ];
    return (
        <View style={Style.container}>
            <Text style={Style.text}>Component In Loop With Flatlist</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <UserData item={item} />}
            />
        </View>
    );
}



export default ComponentInLoopWithFlatlist;
