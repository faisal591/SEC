var text1 = document.getElementById('text1');
var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3');
var text4 = document.getElementById('text4');
var text5 = document.getElementById('text5');
var pc1 = document.getElementById('pc1');
var Laptop1 = document.getElementById('Laptop1');
var Printer1 = document.getElementById('Printer1');
var Monitor1 = document.getElementById('Monitor1');
var add1 = document.getElementById('add1');
var em = document.getElementById('em');
var ia= document.getElementById('ia');
var button1 = document.getElementById('button1');



function btnClick() {
  var firebaseRef = firebase.database().ref();
  var text11 = ["Employee Name : " + text1.value , "Employee ID : " + text2.value , "Department  : " + text3.value , "Type of Request ? :  " + add1.value
,"PC ? : " + pc1.value , "Laptop ? :" + Laptop1.value , "Printer ? : " + Printer1.value
,"Services Needed  ? : " + em.value , "Services Needed  ? : " + ia.value ,"Other : " + text4.value , " Other Requests and Software Needs : " + text5.value];
  firebaseRef.child("Employee Equipment Requests").push(text11);
  window.alert("submition is done");


}
