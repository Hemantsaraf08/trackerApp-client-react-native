import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const TrackListScreen=({navigation})=>{
    return (
        <View>

            <Text style={{fontSize: 48}}>TrackListScreen</Text>
            <Button 
                onPress={()=>navigation.navigate('TrackDetailScreen')}
                title="Go to track Details"
            />
        </View>
    )
}

const styles=StyleSheet.create({

})

export default TrackListScreen