
    'use strict';
    
    const cars=generateCars(6000).filter(c=>c.year>2010) 
    let filtered=[]
    
    filtered = Array.from(cars)
    outputCars()
       
    function filterCars(requirement){
        filtered = filtered.filter(requirement)        
        outputCars()
    }
    
    function makeUI(){

        //scan the filtered results for distinct values of each property
        
        let filtersDiv = document.getElementById('filters')
        filtersDiv.innerHTML= ""
        filtersDiv.appendChild(buttonsForDistinct("make"))
        filtersDiv.appendChild(buttonsForDistinct("model"))
        filtersDiv.appendChild(buttonsForDistinct("colour"))      
        filtersDiv.appendChild(buttonsForDistinct("year"))
        filtersDiv.appendChild(bandButtons("price"))
        filtersDiv.appendChild(bandButtons("mileage"))
    }


    function distinctValues(property){
        const d=[]        
        filtered.forEach(car => {if (!d.includes(car[property])){d.push(car[property])}})
        return d
    }	
    

    function buttonsForDistinct(property){
        //Returns a div containing buttons, one for each distinct value of the property
        
        const buttonsDiv = document.createElement("div")
        const heading = document.createElement("h2")
        heading.innerHTML=property
        buttonsDiv.appendChild(heading)

        const distinct = distinctValues(property)
        
        distinct.forEach(v=>{
            let button = document.createElement("button")
            button.innerHTML=v            
            button.setAttribute("onclick",`filterCars(c => c.${property} == '${v}')`) 
            buttonsDiv.appendChild(button)           
        })

        return buttonsDiv //this is a DIV element holding the full set of button
    }


    function bandButtons(property){
        
        const buttonsDiv = document.createElement("div")
        const heading = document.createElement("h2")
        heading.innerHTML=property
        buttonsDiv.appendChild(heading)

        const b=bands(property)  ////b will be an array of band objects {from:x,to:y} - for the requested property of the cars (e.g. mileage, price)

        b.forEach(band=>{
            let button = document.createElement("button")
            button.innerHTML=`${band.from} - ${band.to}` 
            button.setAttribute("onclick",`filterCars(c => c.${property}>=${band.from} && c.${property} <= ${band.to})`) 
            buttonsDiv.appendChild(button)           
        })

        return buttonsDiv //this is a DIV element holding a set of 'band' buttons

    }

    function bands(property){
        //scan the 'filtered' cars - find the max and min of property (which might be mileage, price or any other numeric property )
                
        let min = Number.MAX_VALUE, max=0
        filtered.forEach(car=>{
            let v=car[property]  // the syntax is confusing here - car looks like an array - but it is an object and we are using the square bracket accessor (instead of the dot notation)
            if(v>max){max=v}
            if(v<min){min=v}                
        })

        const range = max-min

        const b=[]
        for (let i=0;i<5;i++){
            b.push({from:Math.floor(min+range/5 * i),to:Math.floor(min+range/5 * (i+1))})
        }

        return b //return an array of 'band' objects - each with a from and to value

    }


    function outputCars(){

        makeUI()

        document.getElementById('results').innerHTML='' //Empty the results div completely (set it to an empty string)
        
        const h1 = document.createElement("h1")
        h1.innerHTML= filtered.length + " Cars match"        
        document.getElementById('results').appendChild (h1)

        for(let i=0;i<filtered.length;i++){
            let car=filtered[i] //pulls out each car from the array            
            outputCar(car)             
        }
    }
    

    
    function outputCar(car){
                
        const div = document.createElement("div")        
        div.innerHTML=`<h1>${car.make}  ${car.model}</h1><span> Price:&pound;${car.price}</span><span> Mileage:${car.mileage}</span><span> Colour: ${car.colour}</span>`   //Excercise - Add the mileage and colour
        
        document.getElementById('results').appendChild (div)
       
    }

   function resetFilters(){
    filtered = cars
    outputCars()
   }

 