//function convert(){
 // aNumber=document.myForm.arabicNumeral.value;
  
  aNumber=1232;
  x=aNumber%10
  rNumber="";
  console.log(x);
  switch(x){
   case 1:
   rNumber="I";
   break;
   case 2:
   rNumber="II";
    break;
   case 3:
   rNumber="III";
   break;
   case 4:
   rNumber="IV";
   break;
   case 5:
   rNumber="V";
   case 6:
   rNumber="VI";
   break;
   case 7:
   rNumber="VII";
   break;
   case 8:
   rNumber="VIII";
   break;
   case 9:
   rNumber="IX";
   break;
   }
   console.log(rNumber);
   aNumber=Math.floor(aNumber/10);
   console.log(aNumber);

   x=aNumber%10
  console.log(x);
  switch(x){
   case 1:
   rNumber="X"+rNumber;
   break;
   case 2:
   rNumber="XX"+rNumber;
    break;
   case 3:
   rNumber="XXX"+rNumber;
   break;
   case 4:
   rNumber="XL"+rNumber;
   break;
   case 5:
   rNumber="L"+rNumber;
   case 6:
   rNumber="LX"+rNumber;
   break;
   case 7:
   rNumber="LXX"+rNumber;
   break;
   case 8:
   rNumber="LXXX"+rNumber;
   break;
   case 9:
   rNumber="XC"+rNumber;
   break;
   }
   console.log(rNumber);
   aNumber=Math.floor(aNumber/10);
   console.log(aNumber);
   
      x=aNumber%10
  console.log(x);
  switch(x){
   case 1:
   rNumber="C"+rNumber;
   break;
   case 2:
   rNumber="CC"+rNumber;
    break;
   case 3:
   rNumber="CCC"+rNumber;
   break;
   case 4:
   rNumber="CD"+rNumber;
   break;
   case 5:
   rNumber="D"+rNumber;
   case 6:
   rNumber="DC"+rNumber;
   break;
   case 7:
   rNumber="DCC"+rNumber;
   break;
   case 8:
   rNumber="DCCC"+rNumber;
   break;
   case 9:
   rNumber="CM"+rNumber;
   break;
   }
   console.log(rNumber);
   aNumber=Math.floor(aNumber/10);
   console.log(aNumber);
   
         x=aNumber%10
  console.log(x);
  switch(x){
   case 1:
   rNumber="M"+rNumber;
   break;
   case 2:
   rNumber="MM"+rNumber;
    break;
   case 3:
   rNumber="MMM"+rNumber;
   break;
   case 4, 5, 6, 7, 8, 9
   Outside scope
   }
   console.log(rNumber);
   aNumber=Math.floor(aNumber/10);
   console.log(aNumber);
