////////// TECHNIQUE NO.1    ////////////

var countBits1 = function(n) {
  var bin=n.toString(2).split("").toString(); // first converting to binary, then splitting each number, then conver all of this to string /////
if(bin!=0){
var matched=bin.match(/1/g).length; // match method works with strings that's why converted to string in first step, Used RegExp to look for 1's in array bin ////
var result=[bin,matched]; // Stored results in an array
return result;}

  else{var results=[0,0]; // array created to get the response when it's index is called in function calling. ///
    return results;}
}


//////// TECHNIQUE NO.2  Without Bits counts. I was asked to write my own code so that a reader can have better understanding on what's really going on.  ////////////
var countBits2 = function(n) {
if(n!=0)
{
  var array=[]; var i=0;var exit;
  do{
    array[i]=n%2; // Find the Modulus and store it in array. If the number is even the result will be 0, If odd then 1  ///
    n=n/2;
    n=Math.floor(n); // Dividing the number gives answer in floating numbers. Used floor method to get the numbers before decimal point ///
    exit=n;
    i++;
  } while (exit>0);  // checks the exit variable in each iteration, When It gets Zero, STOP!  ///
  array= array.reverse();  // In traditional way to find binary, We take LCM of decimal number and write the remainders on right.
                          // Once finished, we count binary number from bottom to top. That's what reverser method is doing.
  return array;
}
else{return 0;}
}


var elvol= document.getElementById('tech1');
elvol.textContent=countBits1(95)[0]; // Give Any Decimal number, Not a Negative Value!

var elvol= document.getElementById('tech1-2');
elvol.textContent=countBits1(95)[1]; // Get the number of 1's in binary result.

var elvol= document.getElementById('tech2');
elvol.textContent=countBits2(95); // Give Any Decimal number, Not a Negative Value!
