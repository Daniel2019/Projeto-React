import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Start } from '../screens/start';
import { Home } from '../screens/home';
import { SignIn } from '../screens/signin';
import { ForgotPassword } from '../screens/forgotPassword';
import { EmailSuccessfully} from '../screens/emailSuccessfully';

import { RegisterAddress } from '../screens/registerAddress';
import { RegisterAccount } from '../screens/registerAccount';
import { RegisterSuccessfully } from '../screens/registerSuccessfully';
import { RegisterImage } from '../screens/registerImage';
import { RegisterUser } from '../screens/registerUser';

/// import { App4 } from '../screens/reset';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="EmailSuccessfully" component={EmailSuccessfully} />
      <Stack.Screen name="RegisterAccount" component={RegisterAccount} />
      <Stack.Screen name="RegisterAddress" component={RegisterAddress} />
      <Stack.Screen name="RegisterImage" component={RegisterImage} />
      <Stack.Screen name="RegisterSuccessfully" component={RegisterSuccessfully} />
      <Stack.Screen name="RegisterUser" component={RegisterUser} />
      {/* <Stack.Screen name="Reset" component={App4} /> */}
    </Stack.Navigator>
  );
}