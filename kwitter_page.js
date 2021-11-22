//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAoEHS4gEl50ph5Ufmv6aHMOtW3J09j7Zs",
      authDomain: "classtest-66c9f.firebaseapp.com",
      databaseURL: "https://classtest-66c9f-default-rtdb.firebaseio.com",
      projectId: "classtest-66c9f",
      storageBucket: "classtest-66c9f.appspot.com",
      messagingSenderId: "172173432530",
      appId: "1:172173432530:web:2c4f14819b1c8fe512bf0b"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
      
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }