import React, { Component } from 'react';
import {pizzaBuilder} from "./src/components/pizzaBuilder/pizzaBuilder";
import SizePicker from "./src/components/sizePicker/sizePicker";
import VegetableToppings from "./src/components/vegetableToppings/vegetableToppings";
import NonVegetableToppings from "./src/components/nonVegetableToppings/nonVegetableToppings";
import Cheese from "./src/components/cheese/cheese";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  CheckBox,
  ScrollView
} from 'react-native';


export default class App extends Component {
  state = {
    sizes: []
  }
  sizes = {

  }
  getSizeFromPizzaBuilder = () => pizzaBuilder.size.map(val => {
    // <Picker.Item label={val.inches} value={val.value}/>
      return {
        sizes: {
          key: val.inches,
          value: val.value
        }
      }
  })
  /*

  pizzaOrderedHandler = pizzaSize, pizzaVeggies, pizzaNonVeggies, pizzaCheese => {
  this.setState(prevState => {
      return {  
        pizza: prevState.places.concat({
        size: pizzaSize,
        vegetable: [pizzaNonVeggies],
        nonVegetable: [pizzaNonVeggies],
        nonVegetable: {
          uri: "https://www.w3schools.com/w3images/fjords.jpg",
        cheese: [pizzaCheese]
        }
      })
    };
  });
};
  */

  render() {
    return (
      <View style={styles.container}>


        <View style={styles.title}>
          <Text style={styles.welcome}>
            Pizza Builder
          </Text>
        </View>
        <ScrollView style={{ width: "100%" }}>
          <View style={styles.toppingsContainer}>

            <View style={styles.size}>
              <Text style={styles.toppings}>
                Size
              </Text>
              <SizePicker sizeObject={this.sizes.keys}/>
            </View>

            <View style={styles.veggies}>
              <Text style={styles.toppings}>
                Vegetable Toppings{}
              </Text>
              <VegetableToppings />

              {/* <CheckBox
                    value={this.state.checked}
              {/* <CheckBox
                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                  />
                  <Text style={{marginTop: 5}}> this is checkbox</Text> */}
            </View>

            <View style={styles.nonVeggies}>
              <Text style={styles.toppings}>
                Non Vegetable Toppings
              </Text>
              <NonVegetableToppings />
            </View>

            <View style={styles.cheese}>
              <Text style={styles.toppings}>
                Cheese:
              </Text>
              <Cheese />
            </View>
            <Button
              title="SEND ORDER"
              style={styles.orderButton}
            />
          </View>

        </ScrollView>

        {/* <Text style={styles.toppings}>
          {toppings}
        </Text> */}
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'flex-start',
    flexDirection: "column",
    marginBottom: 20
  },
  title: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: "column"
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  toppings: {
    color: '#333333',
    fontWeight: "bold"
  },
  size: {
    justifyContent: "flex-start",

  },
  toppingsContainer: {
    justifyContent: "flex-start",
    marginLeft: 20,
    marginRight: 20
  },
  veggies: {
    flexDirection: "column"
  },
  checkBoxStyle: {
    flexDirection: "row"
  },

});
