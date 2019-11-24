var total=200;
var discount;

if(total>1000){
       discount=100;
       finalprice=total-discount;
       console.log("Final Price:" +finalprice, "Discount:" +discount)
}else if(total>=300){
       discount=total*0.1;
       finalprice=total-discount;
       console.log("Final Price:" +finalprice, "Discount:" +discount)
}else{
       console.log("Discount is Invalid. Final Price:" +total)
}
