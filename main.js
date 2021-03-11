
    'use strict';
    
    const cars=generateCars(200) 
    
    /*cars.push({make:"Ford",model:"Fiesta",colour:"Red", price:4000, mileage:63421})
    cars.push({make:"Daewoo",model:"Matiz",colour:"Blue", price:2000, mileage:33441})
    cars.push({make:"Mini",model:"One",colour:"White", price:3850, mileage:48263})
    cars.push({make:"BMW",model:"One series",colour:"Black", price:6450, mileage:51050})
    cars.push({make:"Mazda",model:"3",colour:"Blue", price:5550, mileage:58090})
    //Add a car here - *typing* out the object

    */

    
    function customerPrice(){
        let maxPrice = parseInt(document.getElementById("customerPrice").value)
        outputCars(c=>c.price<=maxPrice)        
    }

    function outputCars(requirement){

        document.getElementById('results').innerHTML='' //Empty the results div completely (set it to an empty string)

        for(let i=0;i<cars.length;i++){

            let car=cars[i] //pulls out each car from the array
            if (requirement(car)){ //use the ismatch function to see if we want this car
                outputCar(car) //only the ones that match are output
            }
        }
    }
    
    function outputCar(car){
                
        const div = document.createElement("div")        
        div.innerHTML=`<h1>${car.make}  ${car.model}</h1><span>£${car.price}</span>`   //Excercise - Add the mileage and colour
        
        document.getElementById('results').appendChild (div)
       
    }


 