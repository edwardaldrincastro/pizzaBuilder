import React, { Component } from 'react';
import {pizzaBuilder} from "../pizzaBuilder/pizzaBuilder";
import {
    StyleSheet,
    Text,
    View,
    CheckBox
} from 'react-native';

class vegetableToppings extends Component {
    state = {
        veggiesSelected: [],
        tomatoesState:false,
        onionsState:false,
        pepperState: false,
        chillyState: false,
        mushroomState: false,
        zucchiniState: false,
        olivesState: false

    }

    veggiesSelectedHandler = (veggy, price) => {
        this.setState(prevState => {
            return {
                veggiesSelected: prevState.veggiesSelected.concat({
                    veggy: veggy,
                    price: price
                })

            }
        })
    }
    veggiesDeselectedHandler = (veggy) => {
        this.setState(prevState => {
            return {
                veggiesSelected: prevState.veggiesSelected.filter(topping => {
                    return topping.veggy !== veggy
                })
            };
        });
      };

    stateChecker = (testID) => {
        switch (testID){
            case "tomatoesCheckBox":
                this.setState({
                    tomatoesState: !this.state.tomatoesState
                })
                return this.state.tomatoesState !== true ? this.veggiesSelectedHandler("Tomatoes", 60) : this.veggiesDeselectedHandler("Tomatoes");
            case "onionsCheckBox":
                this.setState({
                    onionsState: !this.state.onionsState
                })  
                return this.state.onionsState !== true ? this.veggiesSelectedHandler("Red Onions", 23) : this.veggiesDeselectedHandler("Red Onions");
            case "pepperCheckBox":
                this.setState({
                    pepperState: !this.state.pepperState
                })  
                return this.state.pepperState !== true ? this.veggiesSelectedHandler("Green Pepper", 40) : this.veggiesDeselectedHandler("Green Pepper");
            case "chillyCheckBox":
                this.setState({
                    chillyState: !this.state.chillyState
                })  
                return this.state.chillyState !== true ? this.veggiesSelectedHandler("Chilly", 35) : this.veggiesDeselectedHandler("Chilly");
            case "mushroomCheckBox":
                this.setState({
                    mushroomState: !this.state.mushroomState
                })  
                return this.state.mushroomState !== true ? this.veggiesSelectedHandler("Mushroom", 55) : this.veggiesDeselectedHandler("Mushroom");
            case "zucchiniCheckBox":
                this.setState({
                    zucchiniState: !this.state.zucchiniState
                })  
                return this.state.zucchiniState !== true ? this.veggiesSelectedHandler("Grilled Zucchini", 35) : this.veggiesDeselectedHandler("Grilled Zucchini");
            case "olivesCheckBox":
                this.setState({
                    olivesState: !this.state.olivesState
                })  
                return this.state.olivesState !== true ? this.veggiesSelectedHandler("Green Olives", 65) : this.veggiesDeselectedHandler("Green Olives");
        }
    }


    render() {
        alert(this.state.veggiesSelected.length !== 0 ? this.state.veggiesSelected.length : "empty")
        return (
            <View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    testID = "tomatoesCheckBox"
                    value = {this.state.tomatoesState}
                    onChange={()=>this.stateChecker("tomatoesCheckBox")}
                    /><Text style={styles.textStyle}>Tomatoes</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    testID = "onionsCheckBox"
                    value = {this.state.onionsState}
                    onChange={()=>this.stateChecker("onionsCheckBox")}
                    /><Text style={styles.textStyle}>Red Onion</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    testID = "pepperCheckBox"
                    value = {this.state.pepperState}
                    onChange={()=>this.stateChecker("pepperCheckBox")}
                    /><Text style={styles.textStyle}>Green Pepper</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    testID = "chillyCheckBox"
                    value = {this.state.chillyState}
                    onChange={()=>this.stateChecker("chillyCheckBox")}
                    /><Text style={styles.textStyle}>Chilly</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    testID = "mushroomCheckBox"
                    value = {this.state.mushroomState}
                    onChange={()=>this.stateChecker("mushroomCheckBox")}
                    /><Text style={styles.textStyle}>Mushroom</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    testID = "zucchiniCheckBox"
                    value = {this.state.zucchiniState}
                    onChange={()=>this.stateChecker("zucchiniCheckBox")}
                    /><Text style={styles.textStyle}>Grilled Zucchini</Text>

                </View>
                <View style={styles.checkBoxStyle}>
                    <CheckBox
                    testID = "olivesCheckBox"
                    value = {this.state.olivesState}
                    onChange={()=>this.stateChecker("olivesCheckBox")}
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