var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');
var text6 = document.getElementById('text6');
var text7 = document.getElementById('text7');
var text8 = document.getElementById('text8');
var button1 = document.getElementById('button1');



function btnClick() {
  var firebaseRef = firebase.database().ref();
  var text11 = ["Employee Name : " + text1.value , "Employee ID : " + text2.value , "Department  : " + text3.value ,"Order Item : " + text4.value , " Order Quantity: " + text5.value , "Item Serial Number  : " + text6.value  , "Cost  :" + text7.value , "Description  :" + text8.value];
  firebaseRef.child("Delevery Notes").push(text11);
  window.alert("submition is done");


}
