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
              buttonStyle={styles.buttons}
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
    justifyContent: 'flex-start',
  },
  inputs: {
    flex: 3,
    width: '75%',
    borderColor: 'transparent',
    borderRadius: 5,
    borderWidth: 5,
    margin: 30,
    textAlign: 'center',
    backgroundColor: '#b8dcec',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  buttons: {
    backgroundColor: "#5d67d5",
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: 300,
    margin: 10,
    height: 45,
    borderColor: "transparent",
    borderWidth: 15,
    borderRadius: 5
  },
  buttonsViewUi: {
    backgroundColor: "#5d67d5",
    flexWrap: 'wrap',
    width: 300,
    marginVertical: 75,
    height: 15,
    borderColor: "transparent",
    borderWidth: 5,
    borderRadius: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textViewUi: {
    marginVertical: 75,
    paddingBottom: 50,
    paddingTop: 33

  }
});
