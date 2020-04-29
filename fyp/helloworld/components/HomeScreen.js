//Author : Oisin Wilson (C00213826)
// This is home display for the app 

import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import CircleViewManager from './CircleViewManager';
import Slider from "react-native-slider";
import PiDATA from "./PIDATA";

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      count: 0,
      value: 0
    };
  }

    componentDidMount(){
      this.focusListener = this.props.navigation.addListener('didFocus', () => {
        this.setState({ count: this.state.count + 1 });
      });
    }

    render() {
      const {navigate} = this.props.navigation;
     
      return(
        
        <View style={styles.container} >

          {this.state.value == 0 ? 
          <View style = {[{top:-50}]}>
              <CircleViewManager/>
          </View>
          : null}
          

          {this.state.value == 1 ? 
          <View style = {[{top:-50}]}>
              <PiDATA/>
          </View>
          : null}



        <View style={[{
                      position:'absolute',
                      bottom:60,
                      flex: 1,
                      width: 300,
                      marginLeft: 10,
                      marginRight: 10,
                      alignItems: "stretch",
                      justifyContent: "center" }]}>
          <Slider
              value={this.state.value}
              step={1}
              minimumValue={0}
              maximumValue={1}
              onValueChange={value => this.setState({ value })}
            />
           
          </View>

          {BottomBar(1, navigate) }
        
        </View>
      
      );
    }
  }

//<Button title="Input" color= "#ECA37A" onPress={() => navigate('INPUT')}/>
    
/*
 <Text>
              Value: {this.state.value}
            </Text>
*/


    function BottomBar(selector, navigate) {
      return( 
        <View style={styles.bottomView}>
    
                    { selector == 2 ? <Image style = {styles.calenderActive} source={require('./calendar.png')}/> 
                                                    : <Image style = {styles.calenderInactive} source={require('./calendar.png')}/>}
    
                    { selector == 1 ? <Image style = {styles.homeActive} source={require('./house.png')}/> 
                                                    : <Image style = {styles.homeInactive}source={require('./house.png')}/>}
    
                    { selector == 0 ? <Image style = {styles.InputActive} source={require('./input.png')}/> 
                                                    : <Image style = {styles.InputInactive} source={require('./input.png')}/>}
    
                    <TouchableOpacity style={styles.BottomTouchLeft} onPress={ () => navigate("INPUT") }/>
    
                    <TouchableOpacity style={styles.BottomTouchMid} onPress={ () => navigate("Home")} />
    
                    <TouchableOpacity style={styles.BottomTouchRight} onPress={ () => navigate("Calendar")}/>
        </View>
        )
    };




    /*


          <View style={[{ width: "60%", margin: 4 }]}>
              <Button
              title="MyComponent"
              color='#ECA37A'
              
              onPress={() => navigate('MyComponent')}
              />
          </View>

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













<View style={styles.bottomView}>

                    { this.state.ImageSelect == 0 ? <Image style = {[{ position: 'absolute',
                                          right: 50,
                                          width: 50,
                                          height: 50,
                                          resizeMode: 'stretch',
                                          tintColor: 'rgb(255, 0, 0)'
                                        }]} source={require('./calendar.png')}/> : <Image style = {[{ position: 'absolute',
                                          right: 50,
                                          width: 50,
                                          height: 50,
                                          resizeMode: 'stretch',
                                          tintColor: 'rgb(255, 0, 0)'
                                        }]}
                              source={require('./calendar.png')}
                            />}

                      <Image style = {[{ position: 'absolute', 
                                          width: 50,
                                          height: 50,
                                          resizeMode: 'stretch',
                                          tintColor: 'rgb(250, 0, 0)'
                                        }]}
                        source={require('./house.png')}
                      />

                      <Image style = {[{ position: 'absolute',
                                          left : 50,
                                          width: 50,
                                          height: 50,
                                          resizeMode: 'stretch',
                                          tintColor: 'rgb(0, 0, 0)'
                                        }]}
                        source={require('./input.png')}
                      />

                    <TouchableOpacity style={[{position: 'absolute', left:10, padding: 5,
                    height: 50,
                    width: 120,  //The Width must be the same as the height
                    borderRadius: 50, //Then Make the Border Radius twice the size of width or Height   
                     }]} onPress={ () => this.setState({ImageSelect : 0}) } >

                      

                    </TouchableOpacity>

                    <TouchableOpacity style={[{position: 'absolute', padding: 5,
                    height: 50,
                    width: 120,  //The Width must be the same as the height
                    borderRadius: 50, //Then Make the Border Radius twice the size of width or Height   
                     }]} onPress={ () => alert(this.state.ImageSelect)} />

                    <TouchableOpacity style={[{position: 'absolute', right:10, padding: 5,
                    height: 50,
                    width: 120,  //The Width must be the same as the height
                    borderRadius: 50, //Then Make the Border Radius twice the size of width or Height   
                     }]} onPress={ () => alert("hiR")} />




    */