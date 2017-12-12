$(document).ready(age);

function age(){
  var age = new Date().getFullYear() - 1989;   
  $('.presentation').text("I'm a "+age+ $('.presentation').text());  
}