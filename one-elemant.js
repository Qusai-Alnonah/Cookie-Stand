'use strict'
console.log('hallo');
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  let numHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  let contryName = ['Seattle','Tokyo','Dubai','Paris','Lima'];
  let megaTotal  = null;
  
  function Contry(minCust,maxCust,avgPerSale,location){
   
    this.minCust = minCust;
   this.maxCust = maxCust;
   this.avgPerSale = avgPerSale;
   this.randomCust=[];
   this.cookiesPerHour=[];
   this.total=0;
   this.location=location;
   
}
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


let table = document.getElementById('cookieTable');
    function tableheader(){
    console.log(table);
  let tr=document.createElement('tr')
  table.appendChild(tr)
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
     
     table.appendChild(tr);
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
        table.appendChild(tr);
       let td=document.createElement('td');
       tr.appendChild(td);
       td.textContent = 'total';
    }
    function footerRow(){
        let lastRow= document.createElement('tr')
        table.appendChild(lastRow);

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

