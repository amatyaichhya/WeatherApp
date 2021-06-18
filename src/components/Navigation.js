import React, {useState} from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import Weather from '../screens/Weather';
import {Text, TouchableNativeFeedback, Switch, View} from 'react-native';
import {navStyles} from '../styles/navStyles';

const WeatherStack = createStackNavigator();
const Drawer = createDrawerNavigator();

function WeatherStackScreen({navigation}) {
  return (
    <WeatherStack.Navigator>
      <WeatherStack.Screen
        name="Weather"
        component={Weather}
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: false,
          headerLeft: () => (
            <Icon
              name="navicon"
              size={25}
              style={navStyles.drawerIcon}
              color="white"
              backgroundColor="#000000"
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </WeatherStack.Navigator>
  );
}

export default function Navigation() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  function Theme({navigation}) {
    return (
      <View style={{flex: 1}}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Home')}>
          <View style={navStyles.home}>
            <Text>Weather</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback>
          <View style={navStyles.darkTheme}>
            <Text>Dark Theme</Text>
            <Switch
              trackColor={{false: '#ABABAB', true: '#333'}}
              thumbColor={isDarkTheme ? '#ABABAB' : 'slateblue'}
              onValueChange={() => setIsDarkTheme(!isDarkTheme)}
              value={isDarkTheme}
            />
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Drawer.Navigator
        drawerContent={Theme}
        drawerStyle={navStyles.drawerStyle}>
        <Drawer.Screen name="Home" component={WeatherStackScreen} />
        <Drawer.Screen name="DarkTheme" component={Theme} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
