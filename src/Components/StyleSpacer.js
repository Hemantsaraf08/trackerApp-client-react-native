import React from 'react';
import {View, StyleSheet} from 'react-native';


const StyleSpacer=({children})=>{
    return(
        <View style={styles.spacer}>
            {children}
        </View>
    )
}

const styles=StyleSheet.create({
    spacer:{
        margin: 15
    }
})

export default StyleSpacer