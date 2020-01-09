
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CalendarScreen from './Calendar';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen},
});

export default  AppNavigator;