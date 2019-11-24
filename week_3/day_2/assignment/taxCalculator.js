var income=600000;
var saving=400000;
var incometax;

if(income > 250000 && income < 500000){
    var rebate = saving * 0.5;
    if(rebate>50000){
    rebate=50000;
    }
    var taxableAmount = income -rebate;
    if(taxableAmount>250000){
        incometax = (taxableAmount-250000)*0.1
    }else{
        incometax = 0;
    }
    console.log("Tax:" + incometax);
}else if(income > 500000 && income < 1000000){
    rebate = saving * 0.3;
    if(rebate>50000){
       rebate=50000;
    }
    taxableAmount = income - rebate;
    if(taxableAmount>500000){
        tax1=taxableAmount-500000;
        tax2=250000*0.1
        incometax=(tax1*0.2)+tax2;
    }else{
        incometax=0;
    }
    console.log("Tax:" +incometax)
}else  if(income > 1000000){
    rebate = saving * 0.1
    if(rebate>50000){
        rebate=50000;
    }
        taxableAmount = income - rebate;
        if(taxableAmount>250000){
            tax1=(taxableAmount-1000000)*0.3;
            tax2=500000*0.2;
            tax3=250000*0.1;
            incometax=tax1+tax2+tax3;
        }else{
            incometax=0;
        }
    console.log("Tax:"+incometax);

}
else{
    console.log("No Tax");
}