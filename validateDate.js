//var val = "alert";
var val = "2017-08-09";

var date = Date.parse(val);
alert(isNaN(date));
if(isNaN(date))
 alert('This is not date');
else
 alert('This is date object');
 
 
 
 
function validateDate(dateToValidate) {
  var result = true;
  // if ( Object.prototype.toString.call(dateToValidate) === "[object Date]" ) {
  //   // it is a date
  //   if( isNaN( dateToValidate.getTime() ) ){  // d.valueOf() could also work
  //     // date is not valid
  //     result = false;
  //   }
  //   else{
  //     // date is valid
  //       result = true;
  //   }
  // }
  // else {
  //   // not a date
  //   result = false;
  // }
  // return result;
  try{
    var date = Date.parse(dateToValidate);
    // alert(isNaN(date));
    if(isNaN(date)){
      result = false;
      // alert('This is not date');
    }
    else{
      // alert('This is date object');
    }
    return result;
  }catch(e){
    return result;
  }
}
