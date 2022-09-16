import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AddUser from '../screens/AddUser';
import ListUsers from '../screens/ListUsers';
import Home from '../screens/Home';
import Settings  from '../screens/Settings';

const Stack = createNativeStackNavigator();

function StackUser() {
    return (
              <Stack.Navigator initialRouteName='ListUsers' screenOptions={{headerShown: false}}>
              <Stack.Screen name="ListUsers" component={ListUsers}></Stack.Screen>
              <Stack.Screen name="AddUser" component={AddUser}></Stack.Screen>
              </Stack.Navigator>
    );
  }

const Tab = createBottomTabNavigator();
function Navigation() {
  return (
    <NavigationContainer>
            <Tab.Navigator  screenOptions={({ route }) => ({
             tabBarIcon: () => {
            let iconName;
            if (route.name == "Home") { iconName = "home"; }
            else if (route.name == "Users") { iconName = "people"; }
            else if (route.name == "Settings") { iconName = "settings"; }
            return (
              <Ionicons
                name={iconName}
                color={'red'}
                size={20}
              />
            );
          },
          tabBarShowLabel:false
        })}>
            <Tab.Screen name="Home" component={Home}></Tab.Screen>
            <Tab.Screen name="Users" component={StackUser}></Tab.Screen>
            <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
            </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
