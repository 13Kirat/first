import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';

import Style from '../Style';

const Onpress = () => {
    const fruit = (a) => {
        console.warn(`Hello ${a}`);
        setName("Gurkirat");
    }
    const [name, setName] = useState("kirat");

    return (
        <View style={Style.container}>
            <Text style={{ fontSize: 40, marginTop: 15, }}>Hello React native</Text>
            <Text style={[Style.textbox, Style.text, { padding: 10 }]}>{name}</Text>
            <View style={Style.btn}>
                <Button title="press me" onPress={() => fruit(name)} color={"red"}></Button>
            </View>
            <View style={Style.btn}>
                {/* <Button title="press me 2" onPress={fruit} color={"green"}></Button> */}
            </View>
            <Name name={name} age={29} />
            <View style={Style.btn}>
                <Button title="change name" onPress={() => setName("Pandu")} color={"green"}></Button>
            </View>
        </View>
    );
}

const Name = (props) => {
    return (
        <View style={[Style.container, { backgroundColor: 'blue' }]}>
            <Text style={{ fontSize: 40 }}>Name: {props.name}</Text>
            <Text style={{ fontSize: 40 }}>Age: {props.age}</Text>
        </View>
    );
}

export default Onpress;
