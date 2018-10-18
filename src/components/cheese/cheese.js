import React, { Component } from 'react';
import {pizzaBuilder} from "../pizzaBuilder/pizzaBuilder";
import {
    StyleSheet,
    Text,
    View,
    Button,
    Picker,
    CheckBox,
    ScrollView
} from 'react-native';

class cheese extends Component {

    render() {
        return (
            <View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Feta Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Parmesan Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Extra Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Four Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Goat Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Mozarella</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Dairy Free Cheese</Text>

            </View>
        </View>
    )
}
}
const styles = StyleSheet.create({

checkBoxStyle: {
flexDirection: "row"
},
textStyle: {
marginTop: 6
}
})
export default cheese;