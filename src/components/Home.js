import React from 'react'

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

import {
  Actions,
} from 'react-native-router-flux';

class Home extends React.Component {
  state = {
    name: '',
  }
  render() {
    return (
      <View>
        <Text style={styles.title}>
          Enter your name:
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="John Snow"
          autoCorrect={false}
          //placeholderTextColor='black'
          onChangeText={(text) => this.setState({name: text})}
          value={this.state.name}
        />
        <TouchableOpacity
          onPress={() => {
            // navigate to second screen, and to pass it to name
            //alert(this.state.name)
            Actions.chat({
              name: this.state.name,
            });
          }}>
          <Text style={styles.buttonText}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
      marginTop: 20,
      marginLeft: 20,
      fontSize: 20,
    },
    textInput: {
      paddingLeft: 20,
      height: 40,
      margin: 20,
      borderWidth: 1,
      borderColor: 'black'
  },
  buttonText: {
    marginLeft: 20,
    fontSize: 20,
  }
});

export default Home;
