import * as React from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, Image } from 'react-native';
//import * as RNFS from 'react-native-fs';
//import * as Expo from 'expo';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Permissions from 'expo-permissions';
import DatabaseManager from './DataBaseManager';

export default class HomeScreen extends React.Component {
  
  saveFile = () => {

    //var temp ={data:''};

    DatabaseManager.getInstance().fetchEvents(
      new Date().UTC,
      (_, error) => {alert(error)}, 
      (_, {rows: { _array }}) => (
        _array.forEach(element => {
         // this.temp.data += element;
        })))

       // console.log(temp.data);


    //const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //if (status === "granted") {
    //    let fileUri = FileSystem.documentDirectory + "TestDataBase.txt";
     //   await FileSystem.writeAsStringAsync(fileUri, "Hello World", { encoding: FileSystem.EncodingType.UTF8 });
      //  const asset = await MediaLibrary.createAssetAsync(fileUri)
       // await MediaLibrary.createAlbumAsync("Download", asset, false)
    //}
}


loadFile = () => {
  let filename = FileSystem.documentDirectory + "text.txt";
  let str = FileSystem.readAsStringAsync(filename, "Hello World");
  alert(str);
}

    render() {
      const {navigate} = this.props.navigation;
     
      // create a path you want to write to
      //var path = RNFS.DocumentDirectoryPath + '/test.txt';
     

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

          <View style={[{ width: "60%", margin: 4 }]}>
          <Button
          title="export"
          color= "#ECA37A"
          onPress={() => this.saveFile()}
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