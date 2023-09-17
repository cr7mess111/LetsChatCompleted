user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("user_name");

var firebaseConfig = {
      apiKey: "AIzaSyBB7vq6JMm3i_htJit4u4uTK82dD43ZpvE",
      authDomain: "lets-chat-78878.firebaseapp.com",
      databaseURL: "https://lets-chat-78878-default-rtdb.firebaseio.com",
      projectId: "lets-chat-78878",
      storageBucket: "lets-chat-78878.appspot.com",
      messagingSenderId: "616842963888",
      appId: "1:616842963888:web:a62204de91ce0207714475"
    };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)



function send()
{
       msg = document.getElementById("msg").value;
      
       firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
      }