import React, {useState, useContext} from 'react'
import { View, StyleSheet} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import StyleSpacer from '../Components/StyleSpacer'
import { Context as AuthContext } from '../Context/AuthContext'
const SignupScreen=({navigation})=>{
    const {state, signup} =useContext(AuthContext)
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    return (
        <View style={styles.container}>
            <StyleSpacer>
                <Text h3>Sign Up</Text>
            </StyleSpacer>
            <Input 
                label="Email"
                value={email}    
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <StyleSpacer/>
            <Input 
                secureTextEntry={true}
                label="Password"
                value={password}    
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <StyleSpacer>
                <Button 
                    title="Sign Up"
                    onPress={()=>signup({email, password})}
                />
            </StyleSpacer>
            {
                state.errorMessage?<Text>{state.errorMessage}</Text>:null
            }
        </View>
    )
}

SignupScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles=StyleSheet.create({
    container:{
        justifyContent: 'center',
        flex: 1,
        marginBottom: 100
    }
})

export default SignupScreen