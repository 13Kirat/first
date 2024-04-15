import { Text, View } from 'react-native';

import React from 'react';
import Style from '../Style';

const UserData = (props) => {
    const item  = props.item;
    return (
        <View style={[Style.item, Style.containerFlex]}>
            <Text style={Style.text}>{item.id}</Text>
            <Text style={Style.text}>{item.name}</Text>
            <Text style={Style.text}>{item.email}</Text>
        </View>
    )
};

export default UserData;
