import * as React from 'react';
import * as Native from 'react-native';
import DatabaseManager from './DataBaseManager';
import {CheckBox} from 'react-native-elements'


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



/*
export default class InputScreen extends React.Component{
  state={
    selectedLang:0
  }
  render(){
    return (
      <Native.View style={styles.container}>
        <Native.Text style={styles.header}>What's your favorite programming language?</Native.Text>
        <Native.View style={styles.item} >
            <CheckBox checked={this.state.selectedLang===1} color="#fc5185" onPress={()=>this.setState({selectedLang:1})}/>
            <Native.Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===1?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===1? "bold" :"normal"
              }}
              >Python</Native.Text>
        </Native.View>
        <Native.View style={styles.item}>
            <CheckBox checked={this.state.selectedLang===2} color="#fc5185" onPress={()=>this.setState({selectedLang:2})}/>
            <Native.Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===2?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===2? "bold" :"normal"
              }}
              >Javascript</Native.Text>
        </Native.View>
        <Native.View style={styles.item}>
            <CheckBox checked={this.state.selectedLang===3} color="#fc5185" onPress={()=>this.setState({selectedLang:3})}/>
            <Native.Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===3?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===3? "bold" :"normal"
              }}
              >Php</Native.Text>
        </Native.View>
        <Native.View style={styles.item}>
            <CheckBox checked={this.state.selectedLang===4} color="#fc5185" onPress={()=>this.setState({selectedLang:4})}/>
            <Native.Text style={
              {...styles.checkBoxTxt,
                color:this.state.selectedLang===4?"#fc5185":"gray",
                fontWeight:this.state.selectedLang===4? "bold" :"normal"
              }}
              >C#</Native.Text>
        </Native.View>
        <Native.TouchableOpacity style={styles.submit}>
          <Native.Text style={{color:"white"}}>SUBMIT</Native.Text>
        </Native.TouchableOpacity>
  
  
      </Native.View>
    );
  }
  
}

const styles = Native.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    fontSize:25,
    fontWeight:"bold",
    color:"#364f6b",
    marginBottom:40
  },
  item:{
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:20,
    padding:10,
    marginBottom:10,
    flexDirection:"row",
  },
  checkBoxTxt:{
    marginLeft:20
  },
  submit:{
    width:"80%",
    backgroundColor:"#fc5185",
    borderRadius:20,
    padding:10,
    alignItems:"center",
    marginTop:40
  }
});


            <CheckBox title='Click Here'
                checked={beep} 
                onPress={() => {beep=!beep}}/>

            
            <CheckBox  style={{flex: 0, padding: 0}}
              onClick={()=>{
                this.setState({
                    isChecked:!this.state.isChecked
                })
              }}
              isChecked={this.state.isChecked}/>
                
                        
              
                <CheckBox  style={{flex: 0, padding: 0}}
              onClick={()=>{
                this.setState({
                  isChecked:!this.state.isChecked
                })
              }}
              isChecked={this.state.isChecked}/>
                  
            


                
                  < Native.View style={[{ width: "60%", margin: 4 }]}>
                        <Native.Button
                        title="Input Symptom Test"
                        color='#ECA37A'
                        
                        onPress={() => DatabaseManager.getInstance().createSymptomEvent(
                            1,
                            "This is a test Note",
                            Date.now(),
                            (_, error) => {alert(error)},
                            
                            )}
                        />
                    </Native.View>



                    < Native.View style={[{ width: "60%", margin: 4 }]}>
                        <Native.Button
                        title="Output Symptom Test"
                        color='#ECA37A'
                        
                        onPress={() => DatabaseManager.getInstance().fetchEvents(

                            new Date().UTC,
                            (_, error) => {alert(error)},
                            (_, {rows: { _array }}) => (
                              _array.forEach(element => {
                                console.log(element);
                              }
                            ))
                            )}
                        />
                    </Native.View>






                    < Native.View style={[{ width: "60%", margin: 4 }]}>
                        <Native.Button
                        title="delete table contentes"
                        color='#ECA37A'
                        
                        onPress={() => DatabaseManager.getInstance().DeleteAllFromTable(
                            "events",
                            (_, error) => {alert(error)},
                            (_, {rows: { _array }}) => (
                              _array.forEach(element => {
                                console.log(element);
                              }
                            ))
                            )}
                        />
                    </Native.View>


                    < Native.View style={[{ width: "60%", margin: 4 }]}>
                        <Native.Button
                        title="delete table contentes"
                        color='#ECA37A'
                        
                        onPress={() => DatabaseManager.getInstance().DeleteFromTable(
                            "events",
                            4,
                            (_, error) => {alert(error)},
                            (_, {rows: { _array }}) => (
                              _array.forEach(element => {
                                console.log(element);
                              }
                            ))
                            )}
                        />
                    </Native.View>
                            */

                            