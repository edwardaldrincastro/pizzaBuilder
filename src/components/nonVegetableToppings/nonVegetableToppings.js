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

class nonVegetableToppings extends Component {

    render() {
        return (
            <View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Pepperoni</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Bacon</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Chicken</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Steak Strip</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                /><Text style={styles.textStyle}>Italian Ham</Text>

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
export default nonVegetableToppings;