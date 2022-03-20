import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native'

const SigninScreen=({navigation})=>{
    return (
        <View>
            <Text style={{fontSize: 48}}>SigninScreen</Text>
            <Button onPress={()=>navigation.navigate('Signup')} title="Go to SignUp screen"/>
        </View>
    )
}

const styles=StyleSheet.create({

})

export default SigninScreen