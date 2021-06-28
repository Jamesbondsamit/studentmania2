//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDc6BEh8Jwwt0CHSaNJ_DwIgn7bkaCDdCU",
      authDomain: "switter-be303.firebaseapp.com",
      databaseURL: "https://switter-be303-default-rtdb.firebaseio.com",
      projectId: "switter-be303",
      storageBucket: "switter-be303.appspot.com",
      messagingSenderId: "958512257600",
      appId: "1:958512257600:web:8839bcec0113e486249da5",
      measurementId: "G-RMG88WNRTG"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
               name:user_name,
               message:msg,
               like:0
         });
         document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
