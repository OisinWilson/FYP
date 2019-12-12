import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';


class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return(
      <View style={styles.MainContainer}>
        
        <Text style={[{ margin: 30, fontSize:22 }]}> My First React Native App </Text> 

        <Image
            style={{
              alignSelf: 'center',
              height: 250,
              width: 250,
            }}
            source={require('C:/Users/Recycled Sloth/Desktop/testing/fyp/assets/Gluten.png')}
          />

        <View style={[{ width: "60%", margin: 20 }]}>
            <Button
            title="Change Page"
            color= "#ECA37A"
            onPress={() => navigate('Demo')}
            />
        </View>


        <View style={styles.bottomView}>

          <View style={[{ width: "90%", margin: 10 }]}>
            <Button
            title="Button with Notification"
            color= "#EC407A"
            onPress={() => Alert.alert('Bottom Button was Clicked, Hello!!')}
            />
          </View>
        </View>
    </View>
    );
  }
}

class DemoScreen extends React.Component {
  render() 
  {
    return(
    <View style={styles.MainContainer}>
        <Text style={[{ margin: 30, fontSize:22 }]}> Hello World! This is a New Page </Text> 
    </View>
    );
  }
}


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Demo: {screen: DemoScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create(
{
      MainContainer:
      {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
      },
   
      bottomView:{
        width: '100%', 
        height: 50, 
        backgroundColor: '#FF9800', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
      },
   
      textStyle:{
   
        color: '#fff',
        fontSize:22
      }
});
