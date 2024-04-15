import { Button, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

import Style from '../Style'

const Formval = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [display,setDisplay] = useState(false);
    const reset = () => {
        setDisplay(false);
        setName("");
        setPassword("");
        setEmail("");
    }
    return (
        <View style={Style.container}>
            <Text style={Style.text}>Simple form in react native</Text>
            <TextInput
                placeholder='enter user name '
                style={Style.textinput}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <TextInput
                placeholder='enter user password '
                style={Style.textinput}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                value={password}
            />
            <TextInput
                placeholder='enter user email '
                style={Style.textinput}
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <View style={Style.btn}>
                <Button title='print details' color='red' onPress={()=>setDisplay(true)} />
            </View>
            <View style={Style.btn}>
                <Button title='clear details' color='green' onPress={reset} />
            </View>
            {
                display?<View>
                    <Text style={Style.text}>Username : {name}</Text>
                    <Text style={Style.text}>Password : {password}</Text>
                    <Text style={Style.text}>Email : {email}</Text>
                </View>:null
            }
        </View>
    );
    
}

export default Formval;
