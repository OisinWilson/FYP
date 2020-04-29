//Author : Oisin Wilson (C00213826)
// This is a calender component that takes the relevent day's data and displays it

import React, { Component } from 'react';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import DatabaseManager from './DataBaseManager';
import styles from './styles';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      displayText: ""
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {

    var m_stack ="";

    var dataDate = new Date(date)
    dataDate.setDate(dataDate.getDate());

    DatabaseManager.getInstance().fetchEvents(
      dataDate.toUTCString(),
      (_, error) => {alert(error)}, 
       (_, {rows: { _array }}) => (
         _array.forEach(element => {
         // console.log(element);
        
          date = new Date(parseInt(element.created));
            dateText = "";

            if(date.getHours() < 10){ dateText = dateText + '0' + date.getHours() + ':'}
            else{dateText = dateText + date.getHours() + ':'}

            if(date.getMinutes() < 10){dateText = dateText + '0' + date.getMinutes() + ':'}
            else{dateText = dateText + date.getMinutes() + ':'}

            if(date.getSeconds() < 10){dateText = dateText + '0' + date.getSeconds()}
            else{dateText = dateText + date.getSeconds()}

            var fullText = "";

            switch (element.symptomId) {
              case 0: //symptom
                var symptomString = JSON.parse(element.objData)["name"];
                symptomString = (symptomString[0] + symptomString.slice(1).toLowerCase());
                fullText = symptomString + " At " + dateText+'\n';
                break;
            
              case 1: //mood
                fullText = "Felt " + JSON.parse(element.objData)["emotion"] + " At " + dateText+'\n';
                break;

              case 2: //gluten
                if (JSON.parse(element.objData)["gluten"] == "Yes") 
                  fullText = "Positive for Gluten At " + dateText+'\n'
                else
                  fullText = "Negative for Gluten At " + dateText+'\n'
                break;

              case 3: //food
                fullText = "Had " + JSON.parse(element.objData)["note"] + " as " + JSON.parse(element.objData)["mealType"] + " At " + dateText+'\n';
                break;

              default:
                break;
            }
            m_stack += fullText;
    }),  this.setState({
      selectedStartDate: date,
      displayText: m_stack
    })));
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
        />
        
        <ScrollView>
          <Text>{this.state.displayText}</Text>
        </ScrollView>

        {BottomBar(2, navigate) }
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