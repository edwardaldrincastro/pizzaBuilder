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
            case "cheeseCheckBox":
                this.setState({
                    cheeseState: !this.state.cheeseState
                })
                return this.state.cheeseState !== true ? this.cheeseSelectedHandler("Cheese", 60) : this.cheeseDeselectedHandler("Cheese");
            case "fetaCheckBox":
                this.setState({
                    fetaState: !this.state.fetaState
                })  
                return this.state.fetaState !== true ? this.cheeseSelectedHandler("Feta Cheese", 23) : this.cheeseDeselectedHandler("Feta Cheese");
            case "parmesanCheckBox":
                this.setState({
                    parmesanState: !this.state.parmesanState
                })  
                return this.state.parmesanState !== true ? this.cheeseSelectedHandler("Parmesan Cheese", 40) : this.cheeseDeselectedHandler("Parmesan Cheese");
            case "extraCheckBox":
                this.setState({
                    extraState: !this.state.extraState
                })  
                return this.state.extraState !== true ? this.cheeseSelectedHandler("Extra Cheese", 35) : this.cheeseDeselectedHandler("Extra Cheese");
            case "fourCheckBox":
                this.setState({
                    fourState: !this.state.fourState
                })  
                return this.state.fourState !== true ? this.cheeseSelectedHandler("Four Cheese", 55) : this.cheeseDeselectedHandler("Four Cheese");
            case "goatCheckBox":
                this.setState({
                    goatState: !this.state.goatState
                })  
                return this.state.goatState !== true ? this.cheeseSelectedHandler("Goat Cheese", 35) : this.cheeseDeselectedHandler("Goat Cheese");
            case "dairyCheckBox":
                this.setState({
                    dairyState: !this.state.dairyState
                })  
                return this.state.dairyState !== true ? this.cheeseSelectedHandler("Dairy Cream Cheese", 65) : this.cheeseDeselectedHandler("Dairy Cream Cheese");
        }
    }

    render() {
        // alert(this.state.cheeseSelected.length !== 0 ? this.state.cheeseSelected.length : "empty")
        return (
            <View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "cheeseCheckBox"
                    value = {this.state.cheeseState}
                    onChange={()=>this.stateChecker("cheeseCheckBox")}
                /><Text style={styles.textStyle}>Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "fetaCheckBox"
                    value = {this.state.fetaState}
                    onChange={()=>this.stateChecker("fetaCheckBox")}
                /><Text style={styles.textStyle}>Feta Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "parmesanCheckBox"
                    value = {this.state.parmesanState}
                    onChange={()=>this.stateChecker("parmesanCheckBox")}
                /><Text style={styles.textStyle}>Parmesan Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "extraCheckBox"
                    value = {this.state.extraState}
                    onChange={()=>this.stateChecker("extraCheckBox")}
                /><Text style={styles.textStyle}>Extra Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "fourCheckBox"
                    value = {this.state.fourState}
                    onChange={()=>this.stateChecker("fourCheckBox")}
                /><Text style={styles.textStyle}>Four Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "goatCheckBox"
                    value = {this.state.goatState}
                    onChange={()=>this.stateChecker("goatCheckBox")}
                /><Text style={styles.textStyle}>Goat Cheese</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "mozzarellaCheckBox"
                    value = {this.state.mozzarellaState}
                    onChange={()=>this.stateChecker("mozzarellaCheckBox")}
                /><Text style={styles.textStyle}>Mozzarella</Text>

            </View>
            <View style={styles.checkBoxStyle}>
                <CheckBox
                    testID = "dairyCheckBox"
                    value = {this.state.dairyState}
                    onChange={()=>this.stateChecker("dairyCheckBox")}
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