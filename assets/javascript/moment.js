// ///////////////////////////////////////VARIABLES////////////////////////////////////
var TrainName;
var Destination;
var FirstTrainTime;
var Frequency;
// ///////////////////////////////////////ARRAYS & OBJECTS/////////////////////////////
var newTrain={};
// ///////////////////////////////////////FUNCTIONS////////////////////////////////////
// //-----------------------------------------------------------------------------------  linking to Firebase
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaZJ8h69-c91KWDPcUyh5uym1Urh_eEbk",
    authDomain: "train-48992.firebaseapp.com",
    databaseURL: "https://train-48992.firebaseio.com",
    projectId: "train-48992",
    storageBucket: "train-48992.appspot.com",
    messagingSenderId: "755910222279"
  };
  firebase.initializeApp(config);


// //--------------------------------------------------------------------------------  saving form to variables
$("#submitButton").on("click",function(event){
    event.preventDefault();
    TrainName=$("#name").val();
        console.log("Train Name:", TrainName);
    Destination=$("#destination").val();
        console.log("Destination:", Destination);
    FirstTrainTime=$("#traintime").val();
        console.log("First Train Time:", FirstTrainTime);
    Frequency=$("#frequency").val();
        console.log("Frequency:", Frequency);
    newTrain={
        name: TrainName,
        destination: Destination,
        traintime: FirstTrainTime,
        frequency: Frequency
    };
    console.log(newTrain)
    firebase.database().ref('/newTrain').push(newTrain);
})
/////-------------------------------------------Missing:
///// I am missing the Code to calculate when the next train will arrive.
///// I also couldn't figure out how to plug in the new data into the table.