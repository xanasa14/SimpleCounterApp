import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';



export default class Counter extends Component {

  constructor(props) {
    super(props);
    this.Decrement = this.Decrement.bind(this);
    this.Increment = this.Increment.bind(this);

    this.state = {value: 0,
        color: "blue"  };
  }
  Decrement = () =>{
    if(this.state.value< 1){
      this.setState({
        
        value:0
       
      });
    }else {
      this.setState({
        value: this.state.value- 1, 
        color: "red"
      });
    }
  };
  Increment = () =>{
   
      this.setState({
        value: this.state.value+ 1, 
        color: "green"
      });
      console.log(this.state.value + 1)
    
  };
  render() {
    return (
      <View>
        <Button
          title="Increase"
          color = "green"

          onPress={this.Increment}/>
        <Text
          style={{color : this.state.color,
          padding: 30,
          alignSelf: 'center',
          fontSize: 26,
          fontWeight: 'bold'}}
          
          >
          {this.state.value}
        </Text>
        <Button
          title="Decrease"
          color = "red"

          onPress={this.Decrement}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counter: {
    padding: 30,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
});