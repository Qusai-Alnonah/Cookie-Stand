'use strict'
//console.log('hallo');
Contry.all = [];
Contry.totalHourArray=[];
Contry.storeForm = document.getElementById('storeForm');
Contry.standsTable = document.getElementById('standsTable');
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  let numHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  let contryName = ['Seattle','Tokyo','Dubai','Paris','Lima'];
  let megaTotal  = null;
 
  function Contry(minCustomers,maxCustomers,aveCookies,location){
   
   this.minCustomers = minCustomers;
   this.maxCustomers = maxCustomers;
   this.aveCookies = aveCookies;
   this.randomCust=[];
   this.cookiesPerHour=[];
   this.total=0;
   this.location=location;
    this.openTime=6;
   this.closeTime=20;
   this.cookieSoldArray=[];
   this.cookieSoldTable=[];
   Contry.all.push(this);
//   this.randRate();
//   this.cretHourlyRateTable();

}
Contry.prototype.randRate =function(){
    for(let i=0;i<(this.closeTime -    this.openTime);i++){
        this.cookieSoldArray.push(Math.floor(this.aveCookies *(Math.random() *(this.maxCustomers -this.minCustomers +1)+this.minCustomers)));
    }
    this.cookieSoldTotal= 0;
    for(i in this.cookieSoldArray){
        this.cookieSoldTotal += this.cookieSoldArray[i];
    }
    this.cookieSoldArray.push(this.cookieSoldTotal);
};
Contry.prototype.creatHourlyRateTable =function(){
    this.trEl =document.createElement('tr');
    Contry.standsTable.appendChild(this.trEl);
    var locCSArray = this.cookieSoldArray.slice(0);
    locCSArray.usnshift(this.name);
    for(let i=0;i<locCSArray.length;i++){
        this.tdEl =document.createElement('td');
        this.tdEl.textContent = locCSArray[i];
     this.trEl.appendChild(this.tdEl);

    }
};
var makeHeaderRow = function(){
    var hoursLocal =['Store','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Total'];
    var trEl =document.createElement('tr');
    for(let i=0;i<hoursLocal.length;i++){
        var thEl =document.createElement('th');
        thEl.textContent= hoursLocal[i];
        trEl.appendChild(thEl);
    }
    Contry.standsTable.appendChild(trEl);
};
//....
Contry.prototype.calcRandomNumbOfCust = function(){

    for(let i = 0 ;i<numHour.length; i++){
        this.randomCust.push(getRandomIntInclusive(this.minCust,this.maxCust));
    }
}
Contry.prototype.calcNumOfCookiesPerHour = function(){

    let val = 0;
    for(let i = 0 ; i < numHour.length; i++){
        val = Math.ceil(this.randomCust[i] * this.avgPerSale);
        this.total = this.total + val;
        this.cookiesPerHour.push(val);
       
 
       
        //for(let j=0;j<=contryName[i].length;j++){   
        }
    }
    
    //footerRow();

// }


//
let seattle = new Contry(23,65,6.3,'Seattle');
seattle.calcRandomNumbOfCust();
seattle.calcNumOfCookiesPerHour();
let tokyo= new Contry(3,24,1.2,'Tokyo');
tokyo.calcRandomNumbOfCust();
tokyo.calcNumOfCookiesPerHour();
let dubai = new Contry(11,38,3.7,'Dubai');
dubai.calcRandomNumbOfCust();
dubai.calcNumOfCookiesPerHour();
let paris = new Contry(20,38,2.3,'Paris');
paris.calcRandomNumbOfCust();
paris.calcNumOfCookiesPerHour();
let lima = new Contry(2,16,4.6,'Lima');
lima.calcRandomNumbOfCust();
lima.calcNumOfCookiesPerHour();

function tableheader(){
    console.log(standsTable);
  let tr=document.createElement('tr')
  standsTable.appendChild(tr)
  let th=document.createElement('th')
  tr.appendChild(th)
  th.textContent='';
  for (let i=0;i<=numHour.length;i++){
    let th2=document.createElement('th')
    tr.appendChild(th2)
    th2.textContent=numHour[i];
  }
  let th3 =document.createElement('th');
  tr.appendChild(th3);
  th3.textContent='Daily Location Total';
    }
    tableheader();
    Contry.prototype.render = function(){
     //console.log(this.calcNumOfCookiesPerHour);
        let tr =document.createElement('tr');
     
     standsTable.appendChild(tr);
     let td = document.createElement('td');
     tr.appendChild(td);
     td.textContent = this.location;
     for  (let i=0;i<= this.cookiesPerHour.length;i++){
         let td2 =document.createElement('td');
         tr.appendChild(td2);
         td2.textContent= this.cookiesPerHour[i];
     }
     let td3 =document.createElement('td');
     tr.appendChild(td3)
     td3.textContent=this.total;
    }
    function tablefooter(){
        let tr =document.createElement('tr')
       standsTable.appendChild(tr);
       let td=document.createElement('td');
       tr.appendChild(td);
       td.textContent = 'total';
    }
    function footerRow(){
        let lastRow= document.createElement('tr')
        standsTable.appendChild(lastRow);

    let firstcell =document.createElement('th');
    lastRow.appendChild(firstcell);
    firstcell.textContent = 'Totals';
    let tawatel =null;
    let sum = 0;
    let td = null;
    for (let i=0;i<numHour.length;i++){
        megaTotal  += sum ;
        sum = seattle.cookiesPerHour[i]+tokyo.cookiesPerHour[i]+dubai.cookiesPerHour[i]+paris.cookiesPerHour[i]+lima.cookiesPerHour[i];
        td=document.createElement('td');
        lastRow.appendChild(td);
        td.textContent= sum ;

    }

     tawatel = document.createElement('th')
    lastRow.appendChild(tawatel);
    tawatel.textContent= megaTotal;


    }

   
   
  



    seattle.render();
    tokyo.render();
    dubai.render();
    paris.render();
    lima.render();
    

    footerRow();


//

function renderTable(){
    Contry.standsTable.innerHTML =null;
    makeHeaderRow();
    for(let i in Contry.all){
        Contry.all[i].creatHourlyRateTable();
    }
    sumColumns();
}
function handleLocationSubmit(event){
    event.preventDefault();
    var name = event.target.name.value;
    var minCustomers =parseInt(event.target.minCustomers.value);
    var maxCustomers =parseInt(event.target.maxCustomers.value);
    var aveCookies =parseInt(event.target.aveCookies.value);
    if(Contry.allLocationsRef.indexOf(name)> -1){
        Contry.all[Contry.allLocationsRef.indexOf(name)].minCustomers=minCustomers;
        Contry.all[Contry.allLocationsRef.indexOf(name)].maxCustomers =maxCustomers;
        Contry.all[Contry.allLocationsRef.indexOf(name)].aveCookies= aveCookies;
        Contry.all[Contry.allLocationsRef.indexOf(name)].cookieSoldArray=[];
        Contry.all[Contry.allLocationsRef.indexOf(name)].randRate();
        renderTable();
        return;
    }
    var newCookieStand =new Contry(name,minCustomers,maxCustomers,aveCookies);
    event.target.name.value =null;
    event.target.minCustomers.value=null;
    event.target.maxCustomers.value=null;
    event.target.aveCookies.value=null ;
    renderTable();

}
Contry.storeForm.addEventListener('submit',handleLocationSubmit);
var sumColumns =function(){
    Contry.totalHourArray =[];
    for(let j=-1;j< Contry.all[0].cookieSoldArray.length;j++){
        var hourTotal =0;
        for(let k in Contry.all){
            hourTotal= hourTotal +Contry.all[k].cookieSoldArray[j];
        }
        Contry.totalHourArray.push(hourTotal);
    }
    var trEl = document.createElement('tr');
    Contry.standsTable.appendChild(trEl);
    for(let i in Contry.totalHourArray){
        var tdEl =document.createElement('td');
        if(i == 0){
            tdEl.textContent = 'Total';
        }else{
            tdEl.textContent =Contry.totalHourArray[i];
        }
        trEl.appendChild(tdEl);
    }

};
sumColumns();
//END CODE
//let table = document.getElementById('standsTable');
  
   
        
const form = document.getElementById('storeForm');
form .addEventListener('submit',handleSubmitting)
     function handleSubmitting(event){
         event.preventDefault();
       
             let name =event.target.name.value;
             let Min =parseInt(event.target.minCustomers.value);
             let Max =parseInt(event.target. maxCustomers.value);
             let Avareg =parseInt(event.target.aveCookies.value);
                  } 
           
            
            

    
    
    //END OF CODE//
    


    //NOTE//
    //unorderdlistEl.appendChild(totalLiItem);
    //parent.appendChild(h2El);
    //parent.appendChild(unorderdlistEl);
    //arrOfobjects.push(this);
    //     let h2El = document.createElement('h2');
 //The maximum is inclusive and the minimum is inclusive 
 // calcNumOfCookiesPerDay :function ((cookiesPerHour * (numHour.length)){
   //unorderdlistEl.appendChild(liEl);
  
  
  //   for (i=0;i<=numHour.length;i++)
  //   this.randomCust = randomValue(min,max);
  //   //   this.cookiesNumperDay= [];
  
  // }
  // let total=0;
  // let cookiesPerHour=[];
 // let randomCust=[];
 // calcNumOfCookiesPerHour:function(){
 //     let val = 0;
  //     for(let i = 0 ; i < numHour.length; i++){
 //         val = Math.ceil(this.randomCust[i] * this.avaragCust);
  //         this.total = this.total + val;
  //         this.calcNumOfCookiesPerHour.push(val); 0 0
  //     }


  //calcNumOfCookiesPerDay.prototype.getAge = function(){
    

 //Creating the objects



 // the methods for out objects
 // Kitten.prototype.getAge = function(){
    // this.age = randomValue(3,12);
    // for(let i = 0 ; i < 10; i++){
    //     this.newArr.push(i);
    //     console.log(this.newArr);
    // }



 // Contry.prototype.render = function(){
 //     let container = document.getElementById('Cookies');
 //     let article = document.getElement('article');
 //     //container.appendChild(article);
 //     let h2 = document.getElement('h2');
 //     //article.appendChild(h2);
 //     h2.textContent = this.Contry;
 //     let paragraph = document.getElement('p');
 //     //article.appendChild(paragraph);
 //     paragraph.textContent = `${this.contryName} is a ${this.breed} and his age is ${this.age} years old`;

 //     let unorderlist = document.createElement('ul');
 //     article.appendChild(unorderlist);
 //     let li = null;
 //     for(let i = 0 ; i < this.likes.length ; i++){
 //         li = document.createElement('li');
 //         unorderlist.appendChild(li);
 //         li.textContent = this.likes[i];
 //     }
 //     let image = document.createElement('img');
 //     article.appendChild(image);
 //     // image.setAttribute('src', 'images/frankie.jpeg');
 //     image.setAttribute('src', `images/${this.kittenName}.jpeg`);

 //     let table = document.createElement('table');
 //     article.appendChild(table);
 //     let headerRow = document.createElement('tr');
 //     table.appendChild(headerRow);



 //     let interesArr = ['isGoodWithKids','IsGoodWithDogs','IsGoodWithOtherCats'];
 //     for(let i = 0 ;i< interesArr.length;i++){
 //         let thElemnt = document.createElement('th');
 //         headerRow.appendChild(thElemnt);
 //         thElemnt.textContent = interesArr[i];
 //     }

 //     let dataRow = document.createElement('tr');
 //     table.appendChild(dataRow);
 //     let td1= document.createElement('td');
 //     dataRow.appendChild(td1);
 //     td1.textContent = this.isGoodWithKids;
 //     let td2= document.createElement('td');
 //     dataRow.appendChild(td2);
 //     td2.textContent = this.isGoodWithDogs;
 //     let td3= document.createElement('td');
 //     dataRow.appendChild(td3);
 //     td3.textContent = this.isGoodWithOtherCats;


 // }

 // for(let i = 0 ; i< arrOfobjects.length; i++){
 //     arrOfobjects[i].getAge();
 //     arrOfobjects[i].render();

