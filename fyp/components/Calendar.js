import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, Platform, Image } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';


let today = moment();
let day = today.clone().startOf('month');
let customDatesStyles = [];
while(day.add(1, 'day').isSame(today, 'month')) {
  customDatesStyles.push({
    date: day.clone(),
    style: {backgroundColor: '#'+('#00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)},
    textStyle: {color: 'black'},
    containerStyle: [],
  });
}

export default class CalendarScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectEndDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  static navigationOptions = {
        title: 'Welcome!'
    };
  
  onDateChange(date, type) {
    if (type === 'END_DATE'){
      this.setState({selectedEndDate: date,});
    } else {
      this.setState({selectedStartDate: date,
                      selectedEndDate: null,});
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date();
    const maxDate = new Date(2020, 2, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.MainContainer}>
        <CalendarPicker
          startFromMonday={true}
          allowRangeSelection={true}
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor={'transparent'}
          //selectedDayColor="#7300e6"
          //selecteDaTextColor="#FFFFFF"
          customDatesStyles={customDatesStyles}
          onDateChange={this.onDateChange}
        />
  
        <View>
          <Text>Selected Start Date:{ startDate }</Text>
          <Text>Selected End Date:{ endDate }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
        MainContainer:
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
  
  });