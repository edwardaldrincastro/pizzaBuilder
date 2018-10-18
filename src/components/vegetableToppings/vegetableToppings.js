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

class vegetableToppings extends Component {

    render() {
        return (
            <View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    /><Text style={styles.textStyle}>Tomatoes</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    /><Text style={styles.textStyle}>Red Onion</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    /><Text style={styles.textStyle}>Green Pepper</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    /><Text style={styles.textStyle}>Chilly</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    /><Text style={styles.textStyle}>Mushroom</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    /><Text style={styles.textStyle}>Grilled Zucchini</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    /><Text style={styles.textStyle}>Green Olives</Text>

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
export default vegetableToppings;