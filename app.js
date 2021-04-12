'use strict';

    let operationHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
    function randomValue(min, max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let parent = document.getElementById('container');
    let seattle = {
        location:'Seattle',
        minCust:23,
        maxCust:65,
        avgPerSale:6.3,
        randomCust:[],
        cookiesPerHour:[],
        total:0, 
        calcRandomNumbOfCust:function(){
            for(let i = 0 ;i<operationHours.length; i++){
                this.randomCust.push(randomValue(this.minCust,this.maxCust));
            }
        },
        calcNumOfCookiesPerHour:function(){
            let val = 0;
            for(let i = 0 ; i < operationHours.length; i++){
                val = Math.ceil(this.randomCust[i] * this.avgPerSale);
                this.total = this.total + val;
                this.cookiesPerHour.push(val);
            }
        },
        render:function(){
        //     let h2El = document.createElement('h2');
            let h2El =document.createElement('h2');
            parent.appendChild(h2El);
            h2El.textContent = this.location;
    
            let unorderdlistEl = document.createElement('ul');
    
            parent.appendChild(unorderdlistEl);
    
            let liEl = null;
            for(let i = 0 ; i < this.cookiesPerHour.length; i++){
                liEl = document.createElement('li');
                unorderdlistEl.appendChild(liEl);
                liEl.textContent = operationHours[i] + ': ' +this.cookiesPerHour[i] + ' Coookies';
            let totalLiItem = document.createElement('li');
            unorderdlistEl.appendChild(totalLiItem);
            totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
        }
    
    seattle.calcRandomNumbOfCust();
    seattle.calcNumOfCookiesPerHour();
    seattle.render();
    console.log(seattle);
    
    let Dubai = {
        location:'Dubai',
        minCust:11,
        maxCust:38,
        avgPerSale:3.7,
        randomCust:[],
        cookiesPerHour:[],
        total:0, 
        calcRandomNumbOfCust:function(){
            for(let i = 0 ;i<operationHours.length; i++){
                this.randomCust.push(randomValue(this.minCust,this.maxCust));
            }
        },
        calcNumOfCookiesPerHour:function(){
            let val = 0;
            for(let i = 0 ; i < operationHours.length; i++){
                val = Math.ceil(this.randomCust[i] * this.avgPerSale);
                this.total = this.total + val;
                this.cookiesPerHour.push(val);
            }
        },
        render:function(){
            let h2El = document.createElement('h2');
            parent.appendChild(h2El);
            h2El.textContent = this.location;
    
            let unorderdlistEl = document.createElement('ul');
    
            parent.appendChild(unorderdlistEl);
    
            let liEl = null;
            for(let i = 0 ; i < this.cookiesPerHour.length; i++){
                liEl = document.createElement('li');
                unorderdlistEl.appendChild(liEl);
                liEl.textContent = operationHours[i] + ': ' +this.cookiesPerHour[i] + ' Coookies';                        
            let totalLiItem = document.createElement('li');
            unorderdlistEl.appendChild(totalLiItem);
            totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
    
    
    
    
        }
    
    Dubai.calcRandomNumbOfCust();
    Dubai.calcNumOfCookiesPerHour();
    Dubai.render();
   

    let paris = {
        location:'Paris',
        minCust:20,
        maxCust:38,
        avgPerSale:2.3,
        randomCust:[],
        cookiesPerHour:[],
        total:0, 
        calcRandomNumbOfCust:function(){
            for(let i = 0 ;i<operationHours.length; i++){
                this.randomCust.push(randomValue(this.minCust,this.maxCust));
            }
        },
        calcNumOfCookiesPerHour:function(){
            let val = 0;
            for(let i = 0 ; i < operationHours.length; i++){
                val = Math.ceil(this.randomCust[i] * this.avgPerSale);
                this.total = this.total + val;        
                this.cookiesPerHour.push(val);
            }
        },
        render:function(){
            let h2El = document.createElement('h2');
            parent.appendChild(h2El);
            h2El.textContent = this.location;
    
            let unorderdlistEl = document.createElement('ul');
    
            parent.appendChild(unorderdlistEl);
    
            let liEl = null;
            for(let i = 0 ; i < this.cookiesPerHour.length; i++){
                liEl = document.createElement('li');
                unorderdlistEl.appendChild(liEl);
                liEl.textContent = operationHours[i] + ': ' +this.cookiesPerHour[i] + ' Coookies';
                                        
            }
            let totalLiItem = document.createElement('li');
            unorderdlistEl.appendChild(totalLiItem);
            totalLiItem.textContent = 'Total :' + this.total + ' Cookies';
    
    
    
    
        }
    }
    paris.calcRandomNumbOfCust();
    paris.calcNumOfCookiesPerHour();
    paris.render();



let Lima = {
    location:'lima',
    minCust:2,
    maxCust:16,
    avgPerSale:4.6,
    randomCust:[],
    cookiesPerHour:[],
    total:0, 
    calcRandomNumbOfCust:function(){
        for(let i = 0 ;i<operationHours.length; i++){
            this.randomCust.push(randomValue(this.minCust,this.maxCust));
            
        }
    },
    calcNumOfCookiesPerHour:function(){
        let val = 0;
        for(let i = 0 ; i < operationHours.length; i++){
            val = Math.ceil(this.randomCust[i] * this.avgPerSale);
            this.total = this.total + val;
                        
            this.cookiesPerHour.push(val);
            

        }
    },
    render:function(){
        let h2El = document.createElement('h2');
        parent.appendChild(h2El);
        h2El.textContent = this.location;

        let unorderdlistEl = document.createElement('ul');

        parent.appendChild(unorderdlistEl);

        let liEl = null;
        for(let i = 0 ; i < this.cookiesPerHour.length; i++){
            liEl = document.createElement('li');
            unorderdlistEl.appendChild(liEl);
            liEl.textContent = operationHours[i] + ': ' +this.cookiesPerHour[i] + ' Coookies';
                                    
        }
        let totalLiItem = document.createElement('li');
        unorderdlistEl.appendChild(totalLiItem);
        totalLiItem.textContent = 'Total :' + this.total + ' Cookies';




    }
}
lima,calcRandomNumbOfCust();
lima,calcNumOfCookiesPerHour();
lima,render();
        }
    }
}
    }




// let oprationHour= ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// let seattle={
//     minCust:23,
//     maxCust:65,
//     avaPerSale:6.3,
        