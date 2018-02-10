import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class VerseForm extends React.Component {

    render() {
        return (
            <View style={{ flex: 3, backgroundColor: 'skyblue' }}>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Translation"
                    onChangeText={(text) => this.setState({ text })}
                />

                <Text style={{ padding: 10, fontSize: 42 }}>
                    {this.state.text}
                </Text>
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