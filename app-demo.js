'use strict'
let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
let salesInput = document.getElementById('salesInput');
const seaitel ={
   minCust:23,
   maxCust:65 ,
   avarag: 6.3,
   
   getRandomIntInclusive:function (min,max) {
    min = Math.ceil(23);
    max = Math.floor(65);
    return Math.floor(Math.random() * (max- min + 1) + min); //The maximum is inclusive and the minimum is inclusive
   }}