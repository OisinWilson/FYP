import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, Image } from 'react-native';


export default class HomeScreen extends React.Component {
    
    render() {
      const {navigate} = this.props.navigation;
      return(
        <View style={styles.container}>
          {/*
          <Image
              style={{
                alignSelf: 'center',
                position: 'absolute',
                height: 250,
                width: 250,
              }}
              source={require('../assets/Gluten.png')}
            />
              <Text style={[{ margin: 20, fontSize:22}]}> Test Ground </Text> 
            */}
          
          
  
          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="Calender"
              color='#ECA37A'
              
              onPress={() => navigate('Calendar')}
              />
          </View>
  
          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="Circle"
              color= "#ECA37A"
              onPress={() => navigate('SCV')}
              />
          </View>

          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="Chart"
              color= "#ECA37A"
              onPress={() => navigate('CV')}
              />
          </View>

          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="Test Orbit"
              color= "#ECA37A"
              onPress={() => navigate('BV')}
              />
          </View>

          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="Pie"
              color= "#ECA37A"
              onPress={() => navigate('PI')}
              />
          </View>

          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="Polar"
              color= "#ECA37A"
              onPress={() => navigate('PO')}
              />
          </View>

          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="Input"
              color= "#ECA37A"
              onPress={() => navigate('INPUT')}
              />
          </View>

  
          <View style={styles.bottomView}>
            <View style={[{ width: "90%", margin: 4 }]}>
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