import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const AccountScreen=({navigation})=>{
    return (
        <View>
            <Text style={{fontSize: 48}}>AccountScreen</Text>
            <Button
                title='Log out'
                onPress={()=>navigation.navigate('authFlow')}
            />
        </View>
    )
}

const styles=StyleSheet.create({

})

export default AccountScreen