const firebaseConfig = {
      apiKey: "AIzaSyDzk2lSpk5g0QJTOGHwCaYvzQn1tC-pujI",
      authDomain: "classtest-de719.firebaseapp.com",
      databaseURL: "https://classtest-de719-default-rtdb.firebaseio.com",
      projectId: "classtest-de719",
      storageBucket: "classtest-de719.appspot.com",
      messagingSenderId: "1008485584867",
      appId: "1:1008485584867:web:2e3213190ae790634e5ad6",
    };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welocme "+user_name+"!";
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room_name"

  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;      
//End code
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
window.location="index.html"
}