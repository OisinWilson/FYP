//Author : Oisin Wilson (C00213826)
// this is for inputting a symptom list to the database

import * as React from 'react';
import * as Native from 'react-native';
import DatabaseManager from './DataBaseManager';
import {CheckBox} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


export default class SymptomInputScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          DIARRHEA: false,
          STOMACHACHE: false,
          HEADACHE: false,
          FATIGUE: false,
          IRRITABILITY: false,
          VOMITING: false,
          RASH: false,
          WEIGHT_LOSS: false,
          inputText: ''
        };
      }

     
      render() {
        const {navigate} = this.props.navigation;


        return (
          <Native.View style={styles.container}>

            
             <Native.TextInput
                  style={{height: 40, borderColor: 'grey', borderWidth: 1}}
                  placeholder="Type Todays Notes here!"
                  onChangeText={(inputText) => this.setState({inputText})}
                  defaultValue={this.state.inputText}
                />

             <CheckBox
                title="DIARRHEA"
                checked={this.state.DIARRHEA}
                onPress={() => this.setState({ DIARRHEA: !this.state.DIARRHEA })}
                />  
              <CheckBox
                title="STOMACHACHE"
                checked={this.state.STOMACHACHE}
                onPress={() => this.setState({ STOMACHACHE: !this.state.STOMACHACHE })}
                />  
              <CheckBox
                title="HEADACHE"
                checked={this.state.HEADACHE}
                onPress={() => this.setState({ HEADACHE: !this.state.HEADACHE })}
                />  
              <CheckBox
                title="FATIGUE"
                checked={this.state.FATIGUE}
                onPress={() => this.setState({ FATIGUE: !this.state.FATIGUE })}
                />  
              <CheckBox
                title="IRRITABILITY"
                checked={this.state.IRRITABILITY}
                onPress={() => this.setState({ IRRITABILITY: !this.state.IRRITABILITY })}
                />  
              <CheckBox
                title="VOMITING"
                checked={this.state.VOMITING}
                onPress={() => this.setState({ VOMITING: !this.state.VOMITING })}
                />  
              <CheckBox
                title="RASH"
                checked={this.state.RASH}
                onPress={() => this.setState({ RASH: !this.state.RASH })}
                />  
              <CheckBox
                title="WEIGHT LOSS"
                checked={this.state.WEIGHT_LOSS}
                onPress={() => this.setState({ WEIGHT_LOSS: !this.state.WEIGHT_LOSS })}
                />  


            <Native.Button
              title="Submit"
              color= "#ECA37A"
              onPress={() => {
                if (this.state.DIARRHEA)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    1,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                if (this.state.STOMACHACHE)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    2,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                if (this.state.HEADACHE)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    3,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                if (this.state.FATIGUE)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    4,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                if (this.state.IRRITABILITY)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    5,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                if (this.state.VOMITING)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    6,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                if (this.state.RASH)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    7,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                if (this.state.WEIGHT_LOSS)
                {
                  DatabaseManager.getInstance().createSymptomEvent(
                    8,
                    this.state.inputText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
                }
                navigate('Home')
            }}/>

          </Native.View>
        );
      }
    } 


// Css styles
    const styles = Native.StyleSheet.create(
      {
          container:
          {
            flex: 1,
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
          }
      }
    );
