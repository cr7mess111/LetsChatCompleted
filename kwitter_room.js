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


  user_name = localStorage.getItem("user_name") 
  document.getElementById("user_name").innerHTML = "Hello " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";

  }

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Nqame - " + Room_name);
   row = "<div class = 'room name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location = "kwitter.html"
}