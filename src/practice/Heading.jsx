import React from "react";


function Heading(){

    var date = new Date();
    var hours = date.getHours() ;
    var message ;
    var customStyle = {
      color : null
    }
      if(hours<12){
        message = "Good Morning";
        customStyle.color = "red";
      }
      else if(hours>=12 && hours<16){
        message = "Good Afternoon" ;
        customStyle.color = "green";
      }
      else if(hours>=16 && hours<24){
        message = "Good Evening";
        customStyle.color = "blue";
      }
          

    return(<h1 style={customStyle}>{message}</h1>);
}

export default Heading ;