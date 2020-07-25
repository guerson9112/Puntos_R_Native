import React from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';

export default ({onPressLeft, textLeft, togglePointsFilter}) => {
    return (
        <View style= {styles.panel}>
            <Button onPress={onPressLeft} title= {textLeft}>

            </Button>
            <Button title="Mostrar/Ocultar" onPress={togglePointsFilter}>

            </Button>
        </View>
    )
}

const styles = StyleSheet.create({

    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

})
