//Author : Oisin Wilson (C00213826)
// This has the database access and commands

import * as SQLite from 'expo-sqlite';

let InputType = {
  "Symptom": 0, 
  "Emotion": 1,
  "Gluten": 2,
  "Food": 3
};

{
/*
  -------------------------------Example uses of a few of these functions-------------------------------

  DatabaseManager.getInstance().insertToTable(
          'Hello Test 1',
          (_, error) => {alert(error)},
          console.log("Sucessful input")
        );

        DatabaseManager.getInstance().updateTestTable(
          'Changed stuff',
          (_, error) => {alert(error)},
          console.log("Sucessful update")
        );

        DatabaseManager.getInstance().DropItAll(
          (_, error) => {alert(error)},
          console.log("Droped Test Table")
        );

        DatabaseManager.getInstance().DeleteItAll(
          (_, error) => {alert(error)},
          console.log("Delete Test Table Contenets")
        );

        DatabaseManager.getInstance().GetTableData(
          'symptoms',
          (_, error) => {alert(error)},
          (_, {rows: { _array }}) => (
            _array.forEach(element => {
             console.log(element);
            }
          ))
        );

        DatabaseManager.getInstance().fetchEvents(
          new Date().UTC,
          (_, error) => {alert(error)}, 
          (_, {rows: { _array }}) => (
            _array.forEach(element => {
              console.log(element);
            })))


        DatabaseManager.getInstance().DeleteAllFromTable('events',
          (_, error) => {alert(error)}, 
           null)
      }

*/

}


export default class DatabaseManager{

    static DB = 'app.db';

    static getInstance() {
        if(DatabaseManager.instance == null){
            DatabaseManager.instance = new DatabaseManager();

            this.instance.db = SQLite.openDatabase(DatabaseManager.DB);

            this.instance.db.transaction(tx => {
                tx.executeSql(
                'CREATE TABLE IF NOT EXISTS symptoms (\
                    id INTEGER PRIMARY KEY AUTOINCREMENT,\
                    name TEXT,\
                    created INT,\
                    modified INT,\
                    usage INT);', 
                (param) => alert("Error Creating table symptoms: " + JSON.stringify(param)));
            
                let now = Date.now();
            
                tx.executeSql(
                  'INSERT OR IGNORE INTO symptoms (id, name, created, modified, usage) VALUES \
                    (1, "DIARRHEA", ' + now + ', ' + now + ', 0),\
                    (2, "STOMACHACHE", ' + now + ', ' + now + ', 0),\
                    (3, "HEADACHE",  ' + now + ', ' + now + ', 0),\
                    (4, "FATIGUE",  ' + now + ', ' + now + ', 0),\
                    (5, "IRRITABILITY",  ' + now + ', ' + now + ', 0),\
                    (6, "VOMITING",  ' + now + ', ' + now + ', 0),\
                    (7, "RASH", ' + now + ', ' + now + ', 0),\
                    (8, "WEIGHT_LOSS", ' + now + ', ' + now + ', 0);',
                    (param) => alert("Error inserting into symptoms: " + JSON.stringify(param)));
                
                tx.executeSql(
                  'CREATE TABLE IF NOT EXISTS events (\
                    id INTEGER PRIMARY KEY AUTOINCREMENT,\
                    symptomId INT,\
                    created INT,\
                    modified INT,\
                    objData TEXT);', 
                  (param) => alert("Error creating table events: " + JSON.stringify(param)));



            },(error) => alert("DB init: " + JSON.stringify(error)));
        }

        return this.instance;

    }

   //-------------------------------general commands-------------------------------

    GetTableData(tableName,onError, onSucess) {
        this.db.transaction(tx => {
            tx.executeSql('SELECT * FROM ' + tableName + ';', null, onSucess, onError);
        });
    }

    //InsertIntoTable(tableName, word, onError, onSucess) {
    //    this.db.transaction(tx => {
    //        tx.executeSql('INSERT INTO ' + tableName + ' (name) VALUES (?);', [word], onSucess, onError);
    //    });
    //}

    //UpdateTestTable(word, onError, onSucess){
    //    this.db.transaction(tx => {
    //        tx.executeSql('UPDATE test SET (name) = (?);', [word], onSucess, onError);
    //    });
    //}

    DropTable(tableName, onError,onSucess){
        this.db.transaction(tx => {
            tx.executeSql('DROP TABLE ' + tableName + ';', null, onSucess, onError);
        });
    }

    DeleteAllFromTable(TableName,onError,onSucess){
        this.db.transaction(tx => {
            tx.executeSql('DELETE FROM ' + TableName + ';', null, onSucess, onError);
        });
    }

    DeleteFromTable(TableName, idnum ,onError,onSucess){
      this.db.transaction(tx => {
          tx.executeSql('DELETE FROM ' + TableName + ' where id = ' + idnum + ';', null, onSucess, onError);
      });
  }

 //-------------------------------------Symptom Commands--------------------------------------
    
    fetchSymptoms(onError, onSuccess) {
        this.db.transaction(tx => {
        tx.executeSql('SELECT * FROM symptoms ORDER BY usage DESC', null, onSuccess, onError);
        });
    }

    updateSymptomUsage(symptomID, onError, onSuccess) {
      this.db.transaction(tx => {
        tx.executeSql('UPDATE symptoms SET usage = usage + 1 WHERE id = ?', [symptomID]);
      }, onError, onSuccess);
    }

    createSymptomEvent(symptomID, note, timestamp, onError, onSuccess) {
      let objData = {
        symptomID,
        note
      }
      
      
      this.db.transaction(tx => {
        tx.executeSql('SELECT * FROM symptoms WHERE id = ?',
          [symptomID], 
          (_, {rows: {_array}}) => {
            objData.name = _array[0].name;
            this.createEvent(InputType.Symptom, timestamp, objData, onError, null);
            this.updateSymptomUsage(symptomID, onError, onSuccess);
          }, 
          (_, param) => alert("create events: " + JSON.stringify(param)));
      });
    }


    //------------------------------------Event Commands--------------------------------------------


    createEvent(eventType, timestamp, objData, onError, onSuccess) {
        this.db.transaction(tx => {
          tx.executeSql('INSERT INTO events (symptomId, created, modified, objData) VALUES (?, ?, ?, ?)',
            [eventType, timestamp, timestamp, JSON.stringify(objData)]);
        }, onError, onSuccess);
      }
    
      updateEvent(eventID, objData, onError, onSuccess) {
        this.db.transaction(tx => {
          tx.executeSql('UPDATE events SET (modified, objData) VALUES (?, ?) WHERE id = ?',
            [Date.now(), objData, eventID]);
        }, onError, onSuccess);
      }
    
      deleteEvent(eventID, onError, onSuccess) {
        this.db.transaction(tx => {
          tx.executeSql('DELETE FROM events WHERE id = ?', [eventID]);
        }, onError, onSuccess);
      }

    fetchEvents(timestamp, onError, onSuccess) {
        if (timestamp != null) {
          let start = new Date(timestamp);
          let end = new Date(timestamp);
          start.setHours(0, 0, 0);
          end.setHours(23, 59, 59);
    
          this.db.transaction(tx => {
            tx.executeSql('SELECT * FROM events '
                        + 'WHERE created BETWEEN ? AND ? '
                        + 'ORDER BY created DESC',
              [start.getTime(), end.getTime()], onSuccess, onError);
          });
        } else {
          this.db.transaction(tx => {
            tx.executeSql('SELECT * FROM events ORDER BY created DESC',
              null, onSuccess, onError);
          });
        }
      }

      //--------------------------------------------------------------------------
      createGlutenEvent(gluten, timestamp, onError, onSuccess) {
        let objData = {
          gluten
        }
        
        this.createEvent(InputType.Gluten, timestamp, objData, onError, onSuccess);
      }

      //--------------------------------------------------------------------------
      createFoodEvent(mealType, note, timestamp, onError, onSuccess) {
        let objData = {
          mealType,
          note
        }
        
        this.createEvent(InputType.Food, timestamp, objData, onError, onSuccess);
      }

       //--------------------------------------------------------------------------
       createEmotionEvent(emotion, timestamp, onError, onSuccess) {
        let objData = {
          emotion
        }
        
        this.createEvent(InputType.Emotion, timestamp, objData, onError, onSuccess);
      }
}