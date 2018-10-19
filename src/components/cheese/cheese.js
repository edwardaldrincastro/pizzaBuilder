import React, { Component } from 'react';
import {pizzaBuilder} from "../pizzaBuilder/pizzaBuilder";
import {
    StyleSheet,
    Text,
    View,
    CheckBox
} from 'react-native';

class cheese extends Component {
    state = {
        cheeseSelected: [],
        cheeseState:false,
        fetaState:false,
        parmesanState: false,
        extraState: false,
        fourState: false,
        goatState: false,
        mozzarellaState: false,
        dairyState: false

    }

    cheeseSelectedHandler = (cheese, price) => {
        this.setState(prevState => {
            return {
                cheeseSelected: prevState.cheeseSelected.concat({
                    cheese: cheese,
                    price: price
                })

            }
        })
    }
    cheeseDeselectedHandler = (cheese) => {
        this.setState(prevState => {
            return {
                cheeseSelected: prevState.cheeseSelected.filter(topping => {
                    return topping.cheese !== cheese
                })
            };
        });
      };

      stateChecker = (testID) => {
        switch (testID){
            case "tomatoesCheckBox":
                this.setState({
                    cheeseState: !this.state.tomatoesState
                })
                return this.state.tomatoesState !== true ? this.veggiesSelectedHandler("Tomatoes", 60) : this.veggiesDeselectedHandler("Tomatoes");
            case "onionsCheckBox":
                this.setState({
                    fetaState: !this.state.fetaState
                })  
                return this.state.fetaState !== true ? this.veggiesSelectedHandler("Red Onions", 23) : this.veggiesDeselectedHandler("Red Onions");
            case "pepperCheckBox":
                this.setState({
                    parmesanState: !this.state.parmesanState
                })  
                return this.state.parmesanState !== true ? this.veggiesSelectedHandler("Green Pepper", 40) : this.veggiesDeselectedHandler("Green Pepper");
            case "chillyCheckBox":
                this.setState({
                    extraState: !this.state.extraState
                })  
                return this.state.extraState !== true ? this.veggiesSelectedHandler("Chilly", 35) : this.veggiesDeselectedHandler("Chilly");
            case "mushroomCheckBox":
                this.setState({
                    fourState: !this.state.fourState
                })  
                return this.state.fourState !== true ? this.veggiesSelectedHandler("Mushroom", 55) : this.veggiesDeselectedHandler("Mushroom");
            case "zucchiniCheckBox":
                this.setState({
                    goatState: !this.state.goatState
                })  
                return this.state.goatState !== true ? this.veggiesSelectedHandler("Grilled Zucchini", 35) : this.veggiesDeselectedHandler("Grilled Zucchini");
            case "olivesCheckBox":
                this.setState({
                    dairyState: !this.state.dairyState
                })  
                return this.state.dairyState !== true ? this.veggiesSelectedHandler("Green Olives", 65) : this.veggiesDeselectedHandler("Green Olives");
        }
    }

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
                /><Text style={styles.textStyle}>Mozzarella</Text>

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