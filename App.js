import { StyleSheet,Text,View,SafeAreaView } from 'react-native';
import React from 'react';
import Login from './Pages/Login';
import Register from './Pages/Register.js';
import Home from './Pages/Home.js';
import ExtraCredit from './Pages/ExtraCredit.js';
import VerifyAccount from './Pages/VerifyAccount.js';
// import UpcomingEvents from './Pages/UpcomingEvents.js';
import DailyExpense from './Pages/DailyExpense.js';
import MonthlyExpense from './Pages/MonthlyExpense.js';
import Comparison from './Pages/Comparison.js';
import History from './Pages/History.js';
import EditProfile from './Pages/EditProfile.js';
import ProfileBuilding from './Pages/ProfileBuilding.js';
import CodeOfReset from './Pages/CodeOfReset.js';
import EmailForForget from './Pages/EmailForForget.js';
import ResetPassword from './Pages/ResetPassword.js';
import CurrentBalance from './Pages/CurrentBalance.js';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App= ()  => {

  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>

        {/* PROFILE */}
        <Stack.Screen name="/" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccount} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="EmailForForget" component={EmailForForget} />
        <Stack.Screen name="CodeOfReset" component={CodeOfReset} />
        <Stack.Screen name="ProfileBuilding" component={ProfileBuilding} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

{/* working */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ExtraCredit" component={ExtraCredit} />

        <Stack.Screen name="DailyExpense" component={DailyExpense} />

        <Stack.Screen name="History" component={History} />
        
        {/* <Stack.Screen name="Comparison" component={Comparison} /> */}
        {/* <Stack.Screen name="CurrentBalance" component={CurrentBalance} /> */}
        {/* <Stack.Screen name="UpcomingEvents" component={UpcomingEvents} /> */}
        {/* <Stack.Screen name="MonthlyExpense" component={MonthlyExpense} /> */}
      </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;


// 696969 primary
// 4F55D8 secondary
// text E8D77F
// input 484437