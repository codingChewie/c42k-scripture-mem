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
        <Text style={styles.textViewUi}>Testing</Text>
        <Button
            title='Test'
            buttonStyle={styles.buttonsViewUi}
            onPress={queryVerse}
        />

        <Button
            title='Back'
            buttonStyle={styles.buttonsViewUi}
            onPress={toggleViewing}
        />
    </View>;

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
      flexDirection:'column',
      flexWrap: 'wrap',
      justifyContent:'space-around',
      width: 300,
      margin: 10,
      height: 45,
      borderColor: "transparent",
      borderWidth: 15,
      borderRadius: 5
    },
    buttonsViewUi:{
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
  
    textViewUi:{
      marginVertical:75,
      paddingBottom:50,
      paddingTop:33
      
    }
  });

export default TestVerse;