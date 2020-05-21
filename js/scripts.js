var amountInLiters=function(amountInGallons,conversionRate){
  return amountInGallons*conversionRate;
};
var amountInGallons=parseInt(prompt("Enter amount in gallons:"));
var conversionRate=3.78541;
var result=amountInLiters(amountInGallons,conversionRate);
alert(result);
