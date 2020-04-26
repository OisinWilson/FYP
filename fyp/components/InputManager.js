import * as React from 'react';
import * as Native from 'react-native';
import DatabaseManager from './DataBaseManager';
import {Picker} from '@react-native-community/picker';

export default class InputScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          mood: 'NA',
          mealText: '',
          meal: 'NA',
          gluten: 'NA',
          //switchValue: false,
        };
      }

      toggleSwitch = value => {
        this.setState({ switchValue: !this.state.switchValue});
      };
     

      render() {

    
        const {navigate} = this.props.navigation;
        return (
          <Native.View style={styles.container}>
          
                <Native.Text>Enter Your Mood</Native.Text>
                <Picker
                selectedValue={this.state.mood}
                style={{height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({mood: itemValue})
                }>
                <Picker.Item label="Todays Mood?" value="NA" />
                <Picker.Item label="Great" value="Great" />
                <Picker.Item label="Good" value="Good" />
                <Picker.Item label="Just Ok" value="Ok" />
                <Picker.Item label="Poor" value="Poor" />
                <Picker.Item label="Terrible" value="Terrible" />
                </Picker>


                <Native.Text>Enter Meal Eaten</Native.Text>
                <Picker
                selectedValue={this.state.meal}
                style={{height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({meal: itemValue})
                }>
                <Picker.Item label="Meal?" value="NA" />
                <Picker.Item label="Breakfast" value="Breakfast" />
                <Picker.Item label="Snack" value="Snack" />
                <Picker.Item label="Lunch" value="Lunch" />
                <Picker.Item label="Tea" value="Tea" />
                <Picker.Item label="Dinner" value="Dinner" />
                </Picker>


             <Native.TextInput
                  style={{height: 40, borderColor: 'grey', borderWidth: 1}}
                  placeholder="Type what you ate here!"
                  onChangeText={(mealText) => this.setState({mealText})}
                  defaultValue={this.state.mealText}
                />


              <Native.Text>Do you feel you ate gluten?</Native.Text>
              
              <Picker
                selectedValue={this.state.gluten}
                style={{height: 50, width: 200}}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({gluten: itemValue})
                }>
                <Picker.Item label="Input Here" value="NA" />
                <Picker.Item label="Yes" value="Yes" />
                <Picker.Item label="No" value="No" />
                </Picker>


              


            <Native.Button
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
                    this.state.mealText,
                    Date.now(),
                    (_, error) => {alert(error)},
                    null
                  );
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

          </Native.View>
        );
      }
    } 



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



    {
      /*
      <Native.Switch
                style={{ marginTop: 5 }}
                onValueChange={this.toggleSwitch}
                value={this.state.switchValue}
                />
      */
    }