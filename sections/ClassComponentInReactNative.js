import { Button, Text, TextInput, View } from 'react-native';
import React, { Component } from 'react';

import ClassComponentStudentData from '../components/ClassComponentStudentData';
import Style from '../Style';

class ClassComponentInReactNative extends Component {
    // cannot use const, let inside the class 
    fruit = () => {
        console.warn("apple");
    }
    constructor() {
        super(); // parent class k constructer function ko call karna k liya constructer function ko use karta h
        this.state = {
            name: "Kirat",
            age: 19,
        }
    }
    onUpdate(val) {
        this.setState({ name: val })
    }
    render() {
        return (
            <View>
                <Text style={Style.text}>Class Component In React-Native</Text>
                <Text style={Style.textOnly}>{this.state.name}</Text>
                <Text style={Style.textOnly}>{this.state.age}</Text>
                <TextInput placeholder='ENTER YOUR NAME' style={Style.textbox}
                    onChangeText={(text) => this.onUpdate(text)} />
                <Button title='press me' color={'gray'} onPress={this.fruit} />
                <ClassComponentStudentData name={this.state.name} />
            </View>
        )
    }
}

// const ClassComponentInReactNative = () => {
//     return (
//         <View style={Style.container}>
//             <Text style={Style.text}>Class Component In React-Native</Text>
//         </View>
//     );
// }

export default ClassComponentInReactNative;
