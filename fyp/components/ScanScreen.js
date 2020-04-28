//Author : Oisin Wilson (C00213826)
// This Component is for scanning a products barcode to use in the the apps database
// This uses an open source food Librarry "world.openfoodfacts.org" as a reference point for products
//    -> example product link : https://world.openfoodfacts.org/api/v0/product/5000442007570.json

import * as React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import dataPass from './dataPass';



let gloabalData = null; //This is the variable for the scanned product code 

export default class ScanScreen extends React.Component {
    constructor(props){
        super(props);
    }
    state ={
        hasCameraPermission: null,
        scanned: false
    };

    //This function is for making a GET request to the food library
    httpGet() 
    {
        const Http = new XMLHttpRequest();
        const url='https://world.openfoodfacts.org/api/v0/product/' + gloabalData + '.json';
        Http.open("GET", url);
        Http.send();
    
        Http.onreadystatechange = (e) => {
               var json;

               try {  
                json = JSON.parse(Http.responseText);
                dataPass.MealName = json['product'].product_name;
               } catch (e) {}
        }
    }

    componentDidMount()
    {
      this.getPermissionsAsync();
    }

    //  This is to get the camera permission on the phone
    getPermissionsAsync = async() => {
        const {
          status
        } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
          hasCameraPermission: status === 'granted'
        });
      };

  render() {
    const {navigate} = this.props.navigation;
    const { hasCameraPermission, scanned } = this.state;
  
      if (hasCameraPermission === null) {
        return (<Text> Requesting for camera permission </Text>);
      }
      if (hasCameraPermission === false) {
        return (<Text > No access to camera </Text>);
      }

      return(
        <View style = {{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
            <BarCodeScanner onBarCodeScanned = { scanned ? this.httpGet() : this.handleBarCodeScanned} style = {StyleSheet.absoluteFillObject}/>
            
            {scanned && (<Button title = { 'Tap to Confirm Scan' } color= "#0aa80a" onPress = {() => navigate('INPUT')}/>)} 

            {this.state.scanned ? (<Button title = { 'Tap to Clear Scan' } color="#000000" onPress = { () => this.setState({ scanned: false })}/>) : null}
        </View>
      );
  }

  //sucessfull code scan 
  handleBarCodeScanned = ({
      type,
    data
  }) => {
    this.setState({
      scanned: true
    });

    gloabalData = data;

    //alert('Bar code with type ${type} and data ${data} has been scanned!');
  };
}


const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});