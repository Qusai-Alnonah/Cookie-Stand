'use strict'
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }
  let numHour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  let contryName = ['Seattle','Tokyo','Dubai','Paris','Lima'];

  function Contry(mainCust,maxCust,avgPerSale){
   this.mainCust = 0;
   this.maxCust = 0;
   this.avgPerSale = 0;
   
   
}
let Seattle = new Contry(23,65,6.3);
let Tokyo= new Contry(3,24,1.2);
let Dubai = new Contry(11,38,3.7);
let Paris = new Contry(20,38,2.3);
let Lima = new Contry(2,16,4.6);



let parent = document.getElementById('Cookies');
    let Contry = {
        location: contryName,
        minCust:minCust,
        maxCust:maxCust,
        avgPerSale:avgPerSale,
        randomCust:[],
        cookiesPerHour:[],
        total:0, 
        calcRandomNumbOfCust:function(){
            for(let i = 0 ;i<numHour.length; i++){
                this.randomCust.push(randomValue(this.minCust,this.maxCust));
            }
        },
        calcNumOfCookiesPerHour:function(){
            let val = 0;
            for(let i = 0 ; i < numHour.length; i++){
                val = Math.ceil(this.randomCust[i] * this.avgPerSale);
                this.total = this.total + val;
                this.cookiesPerHour.push(val);
            }
        },
        render:function(){
        
            let h2El =document.getElement('h2');
            
            h2El.textContent = this.location;
    
            let unorderdlistEl = document.getElement('ul');
    
            
    
            let liEl = null;
            for(let i = 0 ; i < this.cookiesPerHour.length; i++){
                liEl = document.getElement('li');
               
                liEl.textContent = operationHours[i] + ': ' +this.cookiesPerHour[i] + ' Coookies';
            let totalLiItem = document.getElement('li');
            
            totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
        }
    
    Contry.calcRandomNumbOfCust();
    Contry.calcNumOfCookiesPerHour();
    Contry.render();
    console.log(Contry);
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
//         this.calcNumOfCookiesPerHour.push(val);
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

}

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
}

