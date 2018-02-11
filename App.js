import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

import mountain from './img/mountain.jpg';

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
    //let search = `${this.state.book} ${this.state.chapter} : ${this.state.verse}, ${this.state.translation}`;
    // format search for bible-api.com
    let search = `${this.state.book} ${this.state.chapter}:${this.state.verse}`
    console.log('search', search);
    console.log('config', config.api_auth);
    this.setState({ query: search }, () => verseRequest(this.state.query));
  }

  render() {

    const inputs = [
      /*Commenting out translation box for future use
     { placeholder: "Translation", name: "translation" },*/
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
            <View style={styles.container}>
              <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Scripturize', style: { color: '#fff', fontSize: 30 } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
                outerContainerStyles={{ width: '100%', top:-217}}
              />
              <Text>Testing</Text>

              <Button
                title='Test'
                buttonStyle={styles.buttons}
                onPress={() => {
                  console.log("Testing Accuracy!");
                }
                }
              />

              <Button
                title='Back'
                buttonStyle={styles.buttons}
                onPress={() => {
                  this.setState({ viewing: true })
                }
                }
              />
            </View>
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
    borderColor: 'transparent',
    borderRadius:5,
    borderWidth: 5,
    margin:30,
    textAlign: 'center',
    backgroundColor: '#b8dcec',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  buttons: {
    backgroundColor: "#5d67d5",
    flexDirection:'row',
    flexWrap: 'wrap',
    justifyContent:'space-around',
    width: 300,
    margin: 10,
    height: 45,
    borderColor: "transparent",
    borderWidth: 15,
    borderRadius: 5
  }
});
