var firebaseConfig = {
      apiKey: "AIzaSyBjEmzeuzwjhbmCCYTIIeh5s8aV75RMUyo",
      authDomain: "web-chat-e8ce8.firebaseapp.com",
      databaseURL: "https://web-chat-e8ce8-default-rtdb.firebaseio.com",
      projectId: "web-chat-e8ce8",
      storageBucket: "web-chat-e8ce8.appspot.com",
      messagingSenderId: "110200299701",
      appId: "1:110200299701:web:07e4c636a5831d1829defc",
      measurementId: "G-18FGHCWVE4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
  function addroom(){
        room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding room name "
        });
        localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
        }
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
       //Start code
       console.log("room name- "+Room_names);
 
       row="<div class='room_name' id="+ Room_names+" onclick='redirecttoroomname(this.id)'># "+Room_names+"</div> <hr>";
       document.getElementById("output").innerHTML+=row;
 
       //End code
       });});}
 getData();
 function redirecttoroomname(name){
       
 console.log(name);
 
 localStorage.setItem("room_name",name);
 window.location="kwitter_page.html";
 }
 function logout(){
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
       window.location="index.html";
 }
