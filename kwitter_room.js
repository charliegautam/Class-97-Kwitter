
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBIugSzkJvPVW9kXs7pB-UAc5kttXDlY9k",
      authDomain: "kwitter-910d0.firebaseapp.com",
      databaseURL: "https://kwitter-910d0-default-rtdb.firebaseio.com",
      projectId: "kwitter-910d0",
      storageBucket: "kwitter-910d0.appspot.com",
      messagingSenderId: "889361395793",
      appId: "1:889361395793:web:0ea5d880440fe177688870"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("hello").innerHTML = "Welcome "+user_name+"!";
    
function addRoom(){
      room_name = document.getElementById("enter_room").value;
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({purpose:"Add Room Name"});
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names - ",Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}

getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}