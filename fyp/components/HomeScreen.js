import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, Image } from 'react-native';


export default class HomeScreen extends React.Component {
    
    render() {
      const {navigate} = this.props.navigation;
      return(
        <View style={styles.container}>
          
          <Text style={[{ margin: 30, fontSize:22 }]}> My First React Native App </Text> 
  
          <Image
              style={{
                alignSelf: 'center',
                height: 250,
                width: 250,
              }}
              source={require('../assets/Gluten.png')}
            />
  
          <View style={[{ width: "60%", margin: 20 }]}>
              <Button
              title="Change Page"
              color= "#ECA37A"
              onPress={() => navigate('Calendar')}
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

  const styles = StyleSheet.create(
    {
    container:
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
      backgroundColor: '#FFFFFF',
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
    },
    })