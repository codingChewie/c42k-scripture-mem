import React from 'react';
import { StyleSheet, Text, TextInput, View, Navigator } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export const TestVerse = ({ }) => (
    <View style={styles.container}>
        Test
    </View>
);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default TestVerse;