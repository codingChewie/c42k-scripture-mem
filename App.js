import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import mountain from './img/mountain.jpg';

import { TestVerse } from './components/TestVerse.js';

import config from './api-config';
import verseRequest from './providers/bibleAPI.js';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /*Commenting out translation box for future use.
          translation: '',*/
      viewing: true,
      book: '',
      chapter: '',
      verse: '',
      query: ''
    };
  }

  makeVerseQuery = () => {
    let search = `${this.state.book} ${this.state.chapter}:${this.state.verse}`
    this.setState({ query: search }, () => verseRequest(this.state.query));
  }

  setToViewing = () => {
    this.setState({ viewing: true });
  }

  render() {

    const inputs = [
      { placeholder: "Book", name: "book" },
      { placeholder: "Chapter", name: "chapter" },
      { placeholder: "Verse", name: "verse" },
    ];

    return (
      <View style={{ flex: 1 }}>
        {this.state.viewing ? (
          <View style={styles.container}>
            <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Scripturize', style: { color: '#fff', fontSize: 30 } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
              outerContainerStyles={{ width: '100%' }}
            />
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
              onPress={() => {
                this.makeVerseQuery;
                this.setState({ viewing: false })
              }
              }
            />

            <Text style={{ padding: 10, fontSize: 42 }}>
              {this.state.query}
            </Text>

          </View>
        ) : (
            <TestVerse
              toggleViewing={this.setToViewing}
              queryVerse={this.makeVerseQuery} />
          )}
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
  inputs: {
    flex: 3,
    width: '75%',
    borderColor: '#87ceeb',
    borderWidth: 25,
    textAlign: 'center',
    backgroundColor: '#b8dcec',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
});
