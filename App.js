import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import AccountScreen from './src/Screens/AccountScreen'
import SigninScreen from './src/Screens/SigninScreen'
import SignupScreen from './src/Screens/SignupScreen'
import TrackCreateScreen from './src/Screens/TrackCreateScreen'
import TrackListScreen from './src/Screens/TrackListScreen'
import TrackDetailScreen from './src/Screens/TrackDetailScreen'
import { ContextProvider as AuthProvider } from './src/Context/AuthContext';
const switchNavigator=createSwitchNavigator({
  authFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen,
  }),
  appFlow: createBottomTabNavigator({
      trackListFlow: createStackNavigator({
        TrackListScreen: TrackListScreen,
        TrackDetailScreen: TrackDetailScreen
      }),   
      TrackCreate: TrackCreateScreen,
      AccountScreen: AccountScreen 
  })
})

const App= createAppContainer(switchNavigator)

export default ()=>{
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
}