import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import Style from '../Style'

const OnchangeText = () => {
    const [name, setName] = useState("");

    return (
        <View style={Style.container}>
            <Text style={Style.text}>Text Input</Text>
            <Text style={Style.text}>Your Name : {name}</Text>
            <TextInput
                style={Style.textinput}
                placeholder='enter your name'
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <View style={Style.btn}>
                <Button title='clear input text' color='purple' onPress={() => setName('')} />
            </View>

        </View>
    );
}

export default OnchangeText;
