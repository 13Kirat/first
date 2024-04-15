import { Button, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import ComponentDidUpdate from '../components/ComponentDidUpdate';
import Style from '../Style';

const LifeCycleWithUseEffectHook = () => {
    const [count, setCount] = useState(0);
    // useEffect(() => console.warn("hello"),)
    useEffect(() => console.warn("hello"), []) // called only on mounting
    return (
        <View style={Style.container}>
            <Text style={Style.text}>Life Cycle With Use Effect Hook </Text>
            <Text style={Style.textOnly}> useEffect as Component Did Mount </Text>
            <Text style={Style.textOnly}> count : {count} </Text>
            <Button
                title="update count"
                onPress={() => setCount(count + 1)}
            />
            <ComponentDidUpdate/>
        </View>
    );
}

export default LifeCycleWithUseEffectHook;
