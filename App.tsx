import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import Signup from './src/screens/auth/Signup';
import SignIn from './src/screens/auth/SignIn';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './src/screens/auth/Splash';
import {colors} from './src/utils/colors';
import RootStackParamList from './src/navigation';
import {ScreenNames} from './src/utils/routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from './src/screens/app/Favorites';
import Home from './src/screens/app/Home';
import Profile from './src/screens/app/Profile';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenNames.Profile}
        component={Profile}
        options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen
        name={ScreenNames.Settings}
        component={Settings}
        options={{headerShown: false}}></Stack.Screen>
    </Stack.Navigator>
  );
};

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === ScreenNames.Home) {
            icon = focused
              ? require('./src/assets/tabs/home_active.png')
              : require('./src/assets/tabs/home.png');
          } else if (route.name === ScreenNames.Favorites) {
            icon = focused
              ? require('./src/assets/tabs/favorite_active.png')
              : require('./src/assets/tabs/favorite.png');
          } else if (route.name === ScreenNames.ProfileStack) {
            icon = focused
              ? require('./src/assets/tabs/profile_active.png')
              : require('./src/assets/tabs/profile.png');
          }

          // You can return any component that you like here!
          return <Image source={icon} style={{width: 24, height: 24}} />;
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {borderTopColor: colors.lightGrey},
      })}>
      <Tab.Screen name={ScreenNames.Home} component={Home} />
      <Tab.Screen name={ScreenNames.Favorites} component={Favorites} />
      <Tab.Screen name={ScreenNames.ProfileStack} component={ProfileStack} />
    </Tab.Navigator>
  );
};

function App(): JSX.Element {
  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: Config.REACT_APP_GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access),
      iosClientId: Config.REACT_APP_GOOGLE_IOS_CLIENT_ID,
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.white,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name={ScreenNames.Tabs}
                component={Tabs}
                options={{headerShown: false}}></Stack.Screen>
              <Stack.Screen
                name={ScreenNames.ProductDetails}
                component={ProductDetails}
                options={{headerShown: false}}></Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen
                name={ScreenNames.Splash}
                options={{headerShown: false}}
                component={Splash}
              />
              <Stack.Screen
                name={ScreenNames.SignIn}
                options={{headerShown: false}}
                component={SignIn}
              />
              <Stack.Screen
                name={ScreenNames.SignUp}
                options={{headerShown: false}}
                component={Signup}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
