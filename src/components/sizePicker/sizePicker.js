import React, { Component } from 'react';
import { pizzaBuilder } from "../pizzaBuilder/pizzaBuilder";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    CheckBox,
    ScrollView
} from 'react-native';

class sizePicker extends Component {
state = {
    language : ""
}
    render() {
        return (
            <View>
                {/* <Picker
                    //   selectedValue={this.state.language}
                    //   style={{ width: "100%" }}
                    // //   itemStyle={{fontSize: 10,}}
                    //   onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                selectedValue={}
                onValueChange={(itemValue) => }    
                >
                  {this.getSizeFromPizzaBuilder}
                </Picker> */}
                {/* <Text>{this.props.sizeObject}</Text> */}
                <Picker
                    selectedValue={this.state.language}
                    style={{ height: 50, width: "100%" }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                    <Picker.Item label="12 Inches" value="1" />
                    <Picker.Item label="18 Inches" value="1.6" />
                    <Picker.Item label="24 Inches" value="1.9" />
                </Picker>
            </View>
        )
    }
}
const styles = StyleSheet.create({


})
export default sizePicker;