import React, { Component } from 'react';
import {pizzaBuilder} from "../pizzaBuilder/pizzaBuilder";
import {
    StyleSheet,
    Text,
    View,
    CheckBox
} from 'react-native';

class nonVegetableToppings extends Component {
    state = {
        nonVeggiesSelected: [],
        pepperoniState:false,
        baconState:false,
        chickenState: false,
        steakState: false,
        hamState: false,
        chorizoState: false
    }
    nonVeggiesSelectedHandler = (nonVeggy, price) => {
        this.setState(prevState => {
            return {
                nonVeggiesSelected: prevState.nonVeggiesSelected.concat({
                    nonVeggy: nonVeggy,
                    price: price
                })

            }
        })
    }
    nonVeggiesDeselectedHandler = (nonVeggy) => {
        this.setState(prevState => {
            return {
                nonVeggiesSelected: prevState.nonVeggiesSelected.filter(topping => {
                    return topping.nonVeggy !== nonVeggy
                })
            };
        });
      };

    stateChecker = (testID) => {
        switch (testID){
            case "pepperoniCheckBox":
                this.setState({
                    pepperoniState: !this.state.pepperoniState
                })
                return this.state.pepperoniState !== true ? this.nonVeggiesSelectedHandler("Pepperoni", 88) : this.nonVeggiesDeselectedHandler("Pepperoni");
            case "baconCheckBox":
                this.setState({
                    baconState: !this.state.baconState
                })  
                return this.state.baconState !== true ? this.nonVeggiesSelectedHandler("Bacon", 120) : this.nonVeggiesDeselectedHandler("Bacon");
            case "chickenCheckBox":
                this.setState({
                    chickenState: !this.state.chickenState
                })  
                return this.state.chickenState !== true ? this.nonVeggiesSelectedHandler("Chicken", 120) : this.nonVeggiesDeselectedHandler("Chicken");
            case "steakCheckBox":
                this.setState({
                    steakState: !this.state.steakState
                })  
                return this.state.steakState !== true ? this.nonVeggiesSelectedHandler("Steak Strip", 120) : this.nonVeggiesDeselectedHandler("Steak Strip");
            case "hamCheckBox":
                this.setState({
                    hamState: !this.state.hamState
                })  
                return this.state.hamState !== true ? this.nonVeggiesSelectedHandler("Italian Ham", 50) : this.nonVeggiesDeselectedHandler("Italian Ham");
            case "chorizoCheckBox":
                this.setState({
                    chorizoState: !this.state.chorizoState
                })  
                return this.state.chorizoState !== true ? this.nonVeggiesSelectedHandler("Chorizo", 70) : this.nonVeggiesDeselectedHandler("Chorizo");
           
            }
    }

    render() {
        // alert(this.state.nonVeggiesSelected.length !== 0 ? this.state.nonVeggiesSelected.length : "empty")
        return (
            <View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                 testID = "pepperoniCheckBox"
                 value = {this.state.pepperoniState}
                 onChange={()=>this.stateChecker("pepperoniCheckBox")}
                /><Text style={styles.textStyle}>Pepperoni</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                 testID = "baconCheckBox"
                 value = {this.state.baconState}
                 onChange={()=>this.stateChecker("baconCheckBox")}
                /><Text style={styles.textStyle}>Bacon</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                 testID = "chickenCheckBox"
                 value = {this.state.chickenState}
                 onChange={()=>this.stateChecker("chickenCheckBox")}
                /><Text style={styles.textStyle}>Chicken</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                 testID = "steakCheckBox"
                 value = {this.state.steakState}
                 onChange={()=>this.stateChecker("steakCheckBox")}
                /><Text style={styles.textStyle}>Steak Strip</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                 testID = "hamCheckBox"
                 value = {this.state.hamState}
                 onChange={()=>this.stateChecker("hamCheckBox")}
                /><Text style={styles.textStyle}>Italian Ham</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                 testID = "chorizoCheckBox"
                 value = {this.state.chorizoState}
                 onChange={()=>this.stateChecker("chorizoCheckBox")}
                /><Text style={styles.textStyle}>Chorizo</Text>

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