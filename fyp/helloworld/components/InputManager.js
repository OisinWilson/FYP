//Author : Oisin Wilson (C00213826)
// This is used for inputting:  the if you ate gluten / your mood / any food that you ate

import * as React from 'react';
import {Button, Text, View, TouchableOpacity, TextInput, Image, ScrollView} from 'react-native';
import DatabaseManager from './DataBaseManager';
import {Picker} from '@react-native-community/picker';
//import {ScanScreen} from './ScanScreen'
import dataPass from './dataPass';
import {CheckBox} from 'react-native-elements'
import styles from './styles';

export default class InputScreen extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
          mood: 'NA',
          mealText: dataPass.MealName,
          meal: 'NA',
          gluten: 'NA',
          count: 0,
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

      componentDidMount()
      { //This is only use to reload the state when returning to this screen
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
          this.setState({ count: this.state.count + 1 });
        });
      }

      checkForInput(){
        if(this.state.DIARRHEA == false 
          && this.state.STOMACHACHE == false
          && this.state.HEADACHE== false
          && this.state.FATIGUE== false
          && this.state.IRRITABILITY== false
          && this.state.VOMITING== false
          && this.state.RASH== false
          && this.state.WEIGHT_LOSS== false
          )
          {
            this.setState({symptom: 0})
          }
          else
          {
            this.setState({symptom: 1})
         
          };
      }

      render() {
        const {navigate} = this.props.navigation;

        let textBox = <TextInput
          style={styles.TextInputStyle}
          placeholder= {dataPass.MealName}
          onChangeText={(mealText) => dataPass.MealName = mealText}
          defaultValue={dataPass.MealName}/>;

        let checkList = <View style={[{top:10}]}>

                <CheckBox
                title="DIARRHEA"
                checked={this.state.DIARRHEA}
                onPress={() =>  this.setState({ DIARRHEA: !this.state.DIARRHEA }) }
                />  
              <CheckBox
                title="STOMACHACHE"
                checked={this.state.STOMACHACHE}
                onPress={() => this.setState({ STOMACHACHE: !this.state.STOMACHACHE})}
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

                <TextInput
                  style={{ 
                  top: 10,
                  left:10, 
                  height: 40, 
                  width: 285, 
                  borderColor: 'grey', 
                  backgroundColor:'#FFFFFF', 
                  borderWidth: 1}}
                  placeholder="Type Symptom Notes here!"
                  onChangeText={(inputText) => this.setState({inputText})}
                  defaultValue={this.state.inputText}
                />


        </View>

        databaseinsert = () =>
        {
          
          if (this.state.DIARRHEA)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              1,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
          if (this.state.STOMACHACHE)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              2,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
          if (this.state.HEADACHE)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              3,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
          if (this.state.FATIGUE)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              4,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
          if (this.state.IRRITABILITY)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              5,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
          if (this.state.VOMITING)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              6,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
          if (this.state.RASH)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              7,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
          if (this.state.WEIGHT_LOSS)
          {
            DatabaseManager.getInstance().createSymptomEvent(
              8,
              this.state.inputText,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };

          if(this.state.mood != 'NA')
          {
            DatabaseManager.getInstance().createEmotionEvent(
              this.state.mood,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };

          if (this.state.meal != 'NA')
          {
            DatabaseManager.getInstance().createFoodEvent(
              this.state.meal,
              dataPass.MealName,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
            dataPass.MealName = "Scan Barcode or Type what you ate here!";
          };

          if(this.state.gluten != 'NA')
          {
            DatabaseManager.getInstance().createGlutenEvent(
              this.state.gluten,
              Date.now(),
              (_, error) => {alert(error)},
              null
            );
          };
        }
        


        return (
          <View style={styles.container}>

            <ScrollView style ={styles.scrollViewOuterContainer}>

              <View style={styles.scrollViewInnerContainer}>
            

            {this.state.mood != "NA" ?
              <View style = {styles.MoodInputYesEntery}>
                <Text style= {[{left:10, top: 10}]}>Enter Your Mood</Text>
                <Picker
                  selectedValue={this.state.mood}
                  style={{position:"absolute", left: 110, top:25,  height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({mood: itemValue})}>
                    <Picker.Item label="Select Mood Here" value="NA" />
                    <Picker.Item label="Great" value="Great" />
                    <Picker.Item label="Good" value="Good" />
                    <Picker.Item label="Just Ok" value="Ok" />
                    <Picker.Item label="Poor" value="Poor" />
                    <Picker.Item label="Terrible" value="Terrible" />
                </Picker>
              </View>
              :
              <View style = {styles.MoodInputNoEntery}>
                <Text style= {[{left:10, top: 10}]}>Enter Your Mood</Text>
                <Picker
                  selectedValue={this.state.mood}
                  style={{position:"absolute", left: 110, top:25,  height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({mood: itemValue})}>
                    <Picker.Item label="Select Mood Here" value="NA" />
                    <Picker.Item label="Great" value="Great" />
                    <Picker.Item label="Good" value="Good" />
                    <Picker.Item label="Just Ok" value="Ok" />
                    <Picker.Item label="Poor" value="Poor" />
                    <Picker.Item label="Terrible" value="Terrible" />
                </Picker>
              </View>
            }

            {this.state.gluten != "NA" ?  
              <View style = {styles.GlutenInputYesEntry}>
                <Text style= {[{left:10, top: 10}]} >Do you feel you ate gluten?</Text>
                
                <Picker
                  selectedValue={this.state.gluten}
                  style={{position:"absolute", left: 110, top:25,  height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({gluten: itemValue})}>
                    <Picker.Item label="Input Here" value="NA" />
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                  </Picker>
              </View>
              :
              <View style = {styles.GlutenInputNoEntry}>
                <Text style= {[{left:10, top: 10}]} >Do you feel you ate gluten?</Text>
                
                <Picker
                  selectedValue={this.state.gluten}
                  style={{position:"absolute", left: 110, top:25,  height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({gluten: itemValue})}>
                    <Picker.Item label="Input Here" value="NA" />
                    <Picker.Item label="Yes" value="Yes" />
                    <Picker.Item label="No" value="No" />
                  </Picker>
              </View>
            }
              
            { this.state.meal != "NA" ? 
              <View style = {styles.MealInputYesEntery}>

                <Text style= {[{left:10, top: 10}]} >Enter Meal Eaten</Text>

                <Picker
                  selectedValue={this.state.meal}
                  style={{position:"absolute", left: 110, top:25,  height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) =>
                      this.setState({meal: itemValue})}>
                    <Picker.Item label="Select Meal Here" value="NA" />
                    <Picker.Item label="Breakfast" value="Breakfast" />
                    <Picker.Item label="Snack" value="Snack" />
                    <Picker.Item label="Lunch" value="Lunch" />
                    <Picker.Item label="Tea" value="Tea" />
                    <Picker.Item label="Dinner" value="Dinner" />
                </Picker>

                
                  <TouchableOpacity style ={styles.BarcodeImageButton} onPress={() => {
                      this.setState({
                        mood: 'NA',
                        mealText: dataPass.MealName,
                        meal: 'NA',
                        gluten: 'NA',
                      }),
                      navigate('SCAN')
                    }}>
                      <Image style = {styles.BarcodeImage} source={require('./barcode.png')}/>
                    </TouchableOpacity>
               
                  {textBox}
                </View>
                :  
                <View style = { styles.MealInputNoEntery}>
                  <Text style= {[{left:10, top: 10}]} >Enter Meal Eaten</Text>

                  <Picker
                    selectedValue={this.state.meal}
                    style={{position:"absolute", left: 110, top:25,  height: 50, width: 200}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({meal: itemValue})}>
                      <Picker.Item label="Select Meal Here" value="NA" />
                      <Picker.Item label="Breakfast" value="Breakfast" />
                      <Picker.Item label="Snack" value="Snack" />
                      <Picker.Item label="Lunch" value="Lunch" />
                      <Picker.Item label="Tea" value="Tea" />
                      <Picker.Item label="Dinner" value="Dinner" />
                  </Picker>
                </View>
            }
      


            { this.state.meal != "NA" ?
              <View style = { styles.SymptomInputNoEntery1}>
                <Text style= {[{left:10, top: 10}]} >Enter Symptoms Here</Text>
                {checkList}
              </View>
            : null}

            { this.state.meal == "NA"?
              <View style = { styles.SymptomInputNoEntery0}>
                 <Text style= {[{left:10, top: 10}]} >Enter Symptoms Here</Text>
                 {checkList}
              </View>
              : null}

              { this.state.meal == "NA"?
                <TouchableOpacity style ={styles.SubmmitButton} onPress={() => {
                      databaseinsert();
                      navigate("Home");
                  }}>
                    <Text style ={[{top:10}]}>Submit</Text>
                </TouchableOpacity>
              :null}

              { this.state.meal != "NA"?
                <TouchableOpacity style ={styles.SubmmitButton2} onPress={() => {
                      databaseinsert();
                      navigate("Home");
                  }}>
                    <Text style ={[{top:10}]}>Submit</Text>
                </TouchableOpacity>
              :null}

                </View>
                   
              </ScrollView>


            {BottomBar(0, navigate)}

          </View>
        );
      }
    } 




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



              { this.state.meal != "NA" || this.state.gluten != "NA" || this.state.mood != "NA" ?  
                  <Button
                    title="Submit"
                    color= "#ECA37A"
                    onPress={() => {
                      
                      if(this.state.mood != 'NA')
                      {
                        DatabaseManager.getInstance().createEmotionEvent(
                          this.state.mood,
                          Date.now(),
                          (_, error) => {alert(error)},
                          null
                        );
                      }

                      if (this.state.meal != 'NA')
                      {
                        DatabaseManager.getInstance().createFoodEvent(
                          this.state.meal,
                          dataPass.MealName,
                          Date.now(),
                          (_, error) => {alert(error)},
                          null
                        );
                        dataPass.MealName = "Scan Barcode or Type what you ate here!";
                      }

                      if(this.state.gluten != 'NA')
                      {
                        DatabaseManager.getInstance().createGlutenEvent(
                          this.state.gluten,
                          Date.now(),
                          (_, error) => {alert(error)},
                          null
                        );
                      }

                      navigate('INPUTSYMP')
                    }}
                    />
                    : null}

*/