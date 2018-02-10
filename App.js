import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import mountain from './img/mountain.jpg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translation: '',
      book: '',
      chapter: '',
      verse: '',
      query: ''
    };
  }

  searchForVerse = () => {
    let search = `${this.state.book} ${this.state.chapter} : ${this.state.verse}, ${this.state.translation}`;
    this.setState({ query: search });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Scripturize', style: { color: '#fff', fontSize: 30 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ width: '100%' }}
        />
        <View style={{ flex: 3, backgroundColor: 'skyblue' }}>
          <TextInput
            style={{ height: 40 }}
            placeholder="Translation"
            onChangeText={(text) => this.setState({ translation: text })}
          />

          <TextInput
            style={{ height: 40 }}
            placeholder="Book"
            onChangeText={(text) => {
              this.setState({ book: text });
            }}
          />

          <TextInput
            style={{ height: 40 }}
            placeholder="Chapter"
            onChangeText={(text) => this.setState({ chapter: text })}
          />

          <TextInput
            style={{ height: 40 }}
            placeholder="Verse"
            onChangeText={(text) => this.setState({ verse: text })}
          />

          <Button
            text='Search'
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this.searchForVerse}
          />

          <Text style={{ padding: 10, fontSize: 42 }}>
            {this.state.query}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
