import { Button, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

const ComponentDidUpdate = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(100);
    useEffect(() => console.warn(count), [count]) // called on state update 
    useEffect(() => console.warn(data), [data]) // called on state update 

    return (
        <View style={{marginVertical: 40}}>
                <Text style={Style.textOnly}> useEffect as Component Did Update </Text>
                <Text style={Style.textOnly}> count : {count} </Text>
                <Text style={Style.textOnly}> data : {data} </Text>
                <Button
                    title="update count"
                    onPress={() => setCount(count + 1)}
                />
                <Button
                    title="update data"
                    onPress={() => setData(data + 1)}
                />
                
            </View>
    );
}

export default ComponentDidUpdate;
