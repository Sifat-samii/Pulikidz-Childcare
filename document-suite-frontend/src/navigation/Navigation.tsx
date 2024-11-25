import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import BookingScreen from '../screens/BookingScreen';
import ActivityScreen from '../screens/ActivityScreen';
import ComplianceScreen from '../screens/ComplianceScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Bookings" component={BookingScreen} />
        <Tab.Screen name="Activities" component={ActivityScreen} />
        <Tab.Screen name="Compliance" component={ComplianceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
