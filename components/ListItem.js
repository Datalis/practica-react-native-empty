import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableHighlight} from "react-native";

class ListItem extends Component {
    onPress(){

    }
    render() {
        return (
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor={'#dde0de'}>
                <View style={styles.view}>
                    <Text style={styles.item}>{this.props.item.key}</Text>
                    <Text style={[styles.item, styles.itemCosto]}>{this.props.item.costo}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        fontSize: 20,
        width: '80%',
        paddingTop: 0
    },
    itemCosto: {
        width: '20%'
    },
    view: {
        flex: 1,
        flexDirection: 'row',

    },
    button:{
        backgroundColor: '#e5e8e6',
        padding: 20,
        marginBottom: 5
    }
})


export default ListItem
