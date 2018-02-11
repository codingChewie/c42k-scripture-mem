import React from 'react';
import { StyleSheet, Text, TextInput, View, Navigator } from 'react-native';
import { Header, Input, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const TestVerse = ({ toggleViewing, queryVerse }) =>
    <View style={styles.container}>
        <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Scripturize', style: { color: '#fff', fontSize: 30 } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            outerContainerStyles={{ width: '100%' }}
        />
        <Text>Testing</Text>
        <Button
            title='Test'
            buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
            }}
            onPress={queryVerse}
        />

        <Button
            title='Back'
            buttonStyle={{
                backgroundColor: "rgba(92, 99,216, 1)",
                width: 300,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
            }}
            onPress={toggleViewing}
        />
    </View>;

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

export default TestVerse;