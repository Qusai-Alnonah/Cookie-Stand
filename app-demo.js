'use strict';

//Global Variables

//Global Variable - Store hours
let hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];
//Global Variable - Store Locations Array
let storeLocations = [];
//Get Sales Data Table from sales.html
let salmonTable = document.getElementById('salmonTable');
//Get
let salesInput = document.getElementById('salesInput');
// var clearTable = document.getElementById('submit');

//Store constructor
function Store(name, minCustomers, maxCustomers, avgCookies) {
  //Properties
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  //Arrays
  this.averageCustomersPerHour = [];
  this.averageCookiesPerHour = [];
  this.totalCookiesPerDay = 0;
  //Methods
  this.numOfCustomersPerHour();
  this.cookiesPerCustomer();
  //Push the created instance to the storeLocations array
  storeLocations.push(this);
}

Store.prototype.render = function() {
  let trRowName = document.createElement('tr');
  let tdStore = document.createElement('td');
  tdStore.textContent = this.name;
  trRowName.appendChild(tdStore);
  for (let i = 0; i < this.averageCookiesPerHour.length; i++) {
    let tdCell = document.createElement('td');
    tdCell.textContent = this.averageCookiesPerHour[i];
    trRowName.appendChild(tdCell);
  };
  let tdTotal = document.createElement('td');
  tdTotal.textContent = this.totalCookiesPerDay;
  trRowName.appendChild(tdTotal);
  salmonTable.appendChild(trRowName);
};
Store.prototype.numOfCustomersPerHour = function() {
  for (let i = 0; i < hours.length; i++) {
    let singleHourCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers;
    this.averageCustomersPerHour.push(singleHourCustomers);
  }
};
Store.prototype.cookiesPerCustomer = function() {
  for (let i = 0; i < hours.length; i++) {
    let singleHourCookies = Math.ceil(this.averageCustomersPerHour[i] * this.avgCookies);
    this.averageCookiesPerHour.push(singleHourCookies);
    this.totalCookiesPerDay += singleHourCookies;
  }
};
//Table creation functions
function makeHeaderRow() { //eslint-disable-line
  let tableRow = document.createElement('tr');
  let thElement = document.createElement('th');
  thElement.textContent = null;
  salmonTable.appendChild(tableRow);
  tableRow.appendChild(thElement);
  for (let i = 0; i < hours.length; i++) {
    thElement = document.createElement('th');
    thElement.textContent = hours[i];
    tableRow.appendChild(thElement);
    // console.log(thElement);
  }
  thElement = document.createElement('th');
  thElement.textContent = 'Location Total';
  tableRow.appendChild(thElement);
  console.log(salmonTable);
  salmonTable.appendChild(tableRow);
};
function renderAllStores() {
  for (let i = 0; i < storeLocations.length; i++) {
    storeLocations[i].render();
  }
};
function makeFooterRow() { //eslint-disable-line
  let tableRow = document.createElement('tr');
  tableRow.textContent = 'Totals';
  salmonTable.appendChild(tableRow);
   let bigStupidTotal = 0;
  for (var i = 0; i < hours.length; i++) {
    let  hourlyTotal = 0;
    for (let j = 0; j < storeLocations.length; j++) {
      hourlyTotal = hourlyTotal + storeLocations[j].averageCookiesPerHour[i];
      bigStupidTotal += storeLocations[j].averageCookiesPerHour[i];
    }
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotal;
    tableRow.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = bigStupidTotal;
  tableRow.appendChild(tdElement);
}

//Store Object Declarations
new Store('Alki', 2, 16, 4.6); //eslint-disable-line
new Store('Seattle Center', 11, 38, 3.7); //eslint-disable-line
new Store('SeaTac Airport', 3, 24, 1.2); //eslint-disable-line
new Store('Capitol Hill', 20, 38, 2.3); //eslint-disable-line
new Store('1st & Pike', 23, 65, 6.3); //eslint-disable-line


//Store method to calculate input for our arrays.



//Event Handler function
function dataInput(event) {
  event.preventDefault();
  console.log('Submit button was clicked');
//If statement to prevent empty text fields
  if (!event.target.name.value || !event.target.minCustomers.value || !event.target.maxCustomers.value || !event.target.avgCookies.value) {
    return alert('Fields cannot be empty!');
  }

  event.target.name = null;
  event.target.minCustomers = null;
  event.target.maxCustomers = null;
  event.target.avgCookies = null;

  let name = event.target.name.value;
  let minCustomers = parseInt(event.target.minCustomers.value);
  let maxCustomers = parseInt(event.target.maxCustomers.value);
  let avgCookies = parseFloat(event.target.avgCookies.value);

  salmonTable.textContent = null;
  //Code to make the input fields blank after user submits

  let storeExist = doesStoreExist(storeLocations, name);
  let  index;

  function doesStoreExist(x,y) {
    for (let i = 0; i < x.length; i++) {
      if (x[i].name === y) {
        index = i;
        return true;
      }
    }
    return false;
  }

  doesStoreExist(storeLocations, name);
  console.log(doesStoreExist(storeLocations, name));

  if (storeExist === true) {
    console.log('did find name');
    storeLocations[index].minCustomers = parseInt(minCustomers);
    storeLocations[index].maxCustomers = parseInt(maxCustomers);
    storeLocations[index].avgCookies = parseFloat(avgCookies);
    storeLocations[index].averageCustomersPerHour = [];
    storeLocations[index].averageCookiesPerHour = [];
    storeLocations[index].totalCookiesPerDay = 0;
    storeLocations[index].numOfCustomersPerHour();
    storeLocations[index].cookiesPerCustomer();
  }

  if (storeExist === false) {
    let newStore = new Store(name, minCustomers, maxCustomers, avgCookies);
  }

  //Re-creating our table with the new user inputs
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
}


makeHeaderRow();
renderAllStores();
makeFooterRow();

salesInput.addEventListener('submit', dataInput);