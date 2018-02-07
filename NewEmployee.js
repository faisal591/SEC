var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');
var text6 = document.getElementById('text6');
var text7 = document.getElementById('text7');
var text8 = document.getElementById('text8');
var text9 = document.getElementById('text9');
var button1 = document.getElementById('button1');

function btnClick() {
  var firebaseRef = firebase.database().ref();
  var text11 = ["First Name : " + text1.value , "Last Name : " + text2.value , "National ID : " + text3.value , "Date of birth : " + text4.value , "Age : " + text9.value , "city : " + text5.value ,"Phone Number : " + text6.value  , "Email : " + text7.value , "Blood Type : " + text8.value];
  firebaseRef.child("Employee").push(text11);
  window.alert("submition is done");


}
