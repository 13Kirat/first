import React, {Component} from "react";
import { Text, View } from "react-native";

import Style from "../Style";

class ClassComponentStudentData extends Component {
    render() {
        // console.warn(this.props);
        return (
            <View>
                <Text style={Style.text}>Class Component Student Data</Text>
                <Text style={Style.textOnly}>Student Name : {this.props.name}</Text>
            </View>
        );
    }
}

export default ClassComponentStudentData;