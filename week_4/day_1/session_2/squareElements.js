var number=[]

function squareElement(number){
    square=number.map(function(element){
        return(element*element)
    })
    
    console.log(square)
}

squareElement([4,5,6])

