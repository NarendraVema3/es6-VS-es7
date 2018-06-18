
//es5

years = [1990,1995,2000,2005,2010]


var ages = years.map(function(el){

            return 2018 - el;

};

console.log(ages);


// es6

// one parameter

var ages6 = years.map(el =>{
  
   retrun 2018 - ele;
 
};

console.log(ages);



// two parameters 


var ages = years.map((ele,index) =>`Age element ${index + 1}: ${2016 - el}.`

