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

  makeVerseQuery = () => {
    let search = `${this.state.book} ${this.state.chapter} : ${this.state.verse}, ${this.state.translation}`;
    this.setState({ query: search });
  }

  render() {

    const inputs = [
      { placeholder: "Translation", name: "translation" },
      { placeholder: "Book", name: "book" },
      { placeholder: "Chapter", name: "chapter" },
      { placeholder: "Verse", name: "verse" },
    ];

    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Scripturize', style: { color: '#fff', fontSize: 30 } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
          outerContainerStyles={{ width: '100%' }}
        />

        <View style={styles.container}>
          {inputs.map((input, index) =>
            <TextInput
              key={input.name}
              style={styles.inputs}
              placeholder={input.placeholder}
              onChangeText={(text) => this.setState({ [input.name]: text })}
            />
          )}

          <Button
            title='Search'
            buttonStyle={{
              backgroundColor: "rgba(92, 99,216, 1)",
              width: 300,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5
            }}
            onPress={this.makeVerseQuery}
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
    backgroundColor: '#87ceeb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputs:{
    flex: 3,
    width: '75%',
    borderColor:'#87ceeb',
    borderWidth: 25,
    textAlign: 'center',
    backgroundColor: '#b8dcec',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});
