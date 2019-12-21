$(document).ready(function(){
    var myCarList = []
    var myCar;
    $('#presentStatus').hide();
    $('#btnSubmitCarDetails').click(function(){
        event.preventDefault()
        let carMake = $('#carMake').val();
        let model = $('#model').val();
        let topSpeed = $('#topSpeed').val();

        myCar = new Car(carMake, model, topSpeed)
        myCarList.push(myCar)
        // console.log(myCarList)
        $('#selectCar').append(`<option value=${model}>${model}</option>`)
    });

    $('#curStatusCar').click(function(val){
        $('#presentStatus').show();
        let time = $('#time').val();
        let distance = parseInt($('#distance').val());
        let selectCar = $('#selectCar').val();
        alert(selectCar)
        myCarList.forEach(function(val){
            if(selectCar == val.model){
                val.trip(time, distance)
                val.avgTripSpeed()
                $('#presenteStatus').text(val.presentStatus())
            }
        });
        $('#presentStatus').show();
        // myCar.trip(time, distance)
        console.log(myCar)
        console.log(myCarList)
    });

    // $('#presentStatusCar').click(function(){
        
    // });

    class Car {
        constructor(carMake = 'invalid', model = 'invalid', topSpeed = 0) {
            this.carMake = carMake
            this.model = model
            this.topSpeed = topSpeed
            this.distance = 0
            this.avgSpeed = 0
            this.tripDetails = []
        }
    
        trip(time = 1, dist = 0) {
            if (dist == 0) {
                this.speed = this.topSpeed / 2
            }else{
                this.distance += dist
                this.tripDetails.push({
                    tripTime: time,
                    tripDist: dist,
                    tripSpeed: dist / time
                });
            }   
        }
        avgTripSpeed(){
            let totaltime = 0
            let totalDistance = 0 
            this.tripDetails.forEach(function(val){
                totaltime += val.tripTime
                totalDistance += val.tripDist
            });
            this.avgSpeed = totalDistance / totaltime        
        }
        presentStatus(){
            let str =  (`${this.carMake} ${this.topSpeed}km/hr ${this.distance}km`)
            return str
        }
    }
    
    // let myCar = new Car('Maruti', 'Swift', 100)
    // // console.log(myCar)
    // myCar.trip(2, 120)
    // myCar.trip(2, 60)
    // myCar.trip(2, 180)
    // myCar.avgTripSpeed()
    // myCar.presentStatus()
    // // console.log(myCar.avgSpeed())
    // console.log(myCar)
})