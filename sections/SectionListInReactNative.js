import { SectionList, Text, View } from 'react-native';

import React from 'react';
import Style from '../Style';

const SectionListInReactNative = () => {
    const users = [
        {
            id: 1,
            name: 'kirat',
            data: ['PHP', "React JS", 'HTML']
        },
        {
            id: 2,
            name: 'gurkirat',
            data: ['PHP', "React JS", 'CSS']
        },
        {
            id: 3,
            name: 'harkirat',
            data: ['C++', "React JS", 'CSS']
        },
        {
            id: 4,
            name: 'jaskirat',
            data: ['PHP', "Python", 'CSS']
        },
    ];
    return (
        <View style={Style.container}>
            <Text style={Style.text}>Section List In React Native</Text>
            <SectionList
                sections={users}
                renderItem={({item})=><Text style={[Style.text,{marginLeft: 50}]}>{item}</Text>}
                renderSectionHeader={({section:{name}})=><Text style={[Style.text,{color: 'red'}]}>{name}</Text>}
                // renderSectionFooter={({section:{id}})=><Text style={[Style.text,{color: 'red'}]}>{id}</Text>}
            />
        </View>
    );
}

export default SectionListInReactNative;
