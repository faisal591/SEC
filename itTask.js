var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');
var text6 = document.getElementById('text6');
var text9 = document.getElementById('text9');
var demo = document.getElementById('demo');
var button1 = document.getElementById('button1');
var d = new Date();



function btnClick() {
  var firebaseRef = firebase.database().ref();
  var text11 = ["Request Number : "+ text1.value ,"Employee Name : " + text2.value , "Employee ID : " + text3.value , "Department : " + text4.value , "E-mail : " + text9.value , "Phone Number : " + text5.value ,"Required Completion Date : " + text6.value];
  firebaseRef.child("IT Task Reports").push(text11);
  window.alert("Report saved successfully :     " + Date());


}
