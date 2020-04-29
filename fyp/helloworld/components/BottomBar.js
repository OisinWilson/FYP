
import * as React from 'react';
import {Image, TouchableOpacity, View, StyleSheet, Text} from 'react-native';


const ACTIVECOLOR = "rgb(255, 0, 0)";
const INACTIVECOLOR = "rgb(0, 0, 0)";


function BottomBar({ selector }) {
  return( 
      
    <View style={styles.bottomView}>

                { selector == 2 ? <Image style = {styles.calenderActive} source={require('./calendar.png')}/> 
                                                : <Image style = {styles.calenderInactive} source={require('./calendar.png')}/>}

                { selector == 1 ? <Image style = {styles.homeActive} source={require('./house.png')}/> 
                                                : <Image style = {styles.homeInactive}source={require('./house.png')}/>}

                { selector == 0 ? <Image style = {styles.InputActive} source={require('./input.png')}/> 
                                                : <Image style = {styles.InputInactive} source={require('./input.png')}/>}


                <TouchableOpacity style={[{position: 'absolute', left:10, padding: 5,
                height: 50,
                width: 120,  
                borderRadius: 50, 
                 }]} onPress={ () => navigate("INPUT") }/>


                <TouchableOpacity style={[{position: 'absolute', padding: 5,
                height: 50,
                width: 120,  
                borderRadius: 50,   
                 }]} onPress={ () => navigate("Home")} />

                <TouchableOpacity style={[{position: 'absolute', right:10, padding: 5,
                height: 50,
                width: 120,  
                borderRadius: 50, 
                 }]} onPress={ () => navigate("Calendar")}/>
    </View>
    )
};

//css styles
const styles = StyleSheet.create(
  {
  container:
  {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },

  bottomView:{
    width: '100%', 
    height: 70, 
    backgroundColor: '#FF9800', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
  textStyle:{
    color: '#fff',
    fontSize:22
  },


  calenderActive:{
    position: 'absolute',
    right: 50,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    tintColor: ACTIVECOLOR          
  },
  calenderInactive: {
    position: 'absolute',
    right: 50,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    tintColor: INACTIVECOLOR   
  },

  homeActive:{
    position: 'absolute', 
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    tintColor: ACTIVECOLOR
  },
  homeInactive:{
    position: 'absolute', 
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    tintColor: INACTIVECOLOR  
  },

  InputActive: {
    position: 'absolute',
    left : 50,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    tintColor: ACTIVECOLOR
  },
  InputInactive : {
    position: 'absolute',
    left : 50,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
    tintColor: INACTIVECOLOR
  }


  })



/*

import HomeScreen from './HomeScreen';
import CalendarScreen from './Calendar';
import { Input } from 'react-native-elements';
/*
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

const {navigate} = this.props.navigation;

export default createMaterialBottomTabNavigator(
  {
  Home: { screen: HomeScreen, navigationOptions: {header: null} },
  Calendar: { screen: CalendarScreen},
  },
  {
  initialRouteName: 'Home',
  activeColor: '#F44336',
  });




  import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

function GoToButton({ screenName }) {
  const navigation = useNavigation();}

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'music', title: 'Music' },
      { key: 'albums', title: 'Albums' },
    ],
    navigate : this.props.navigation
  };

  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: () => this.state.navigate.navigate("Home"),
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
*/