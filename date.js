
exports.getDate =  function() {
    const today = new Date();
    // options object for the days of the week 
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
    }
    // var currentDay = today.getDay();
    // // Create a day variable to render on our list.ejs

    //we want ot pass d present day using the below method having us as 
    //lang and d options for our date format
    return today.toLocaleDateString("en-US", options);
    
    //a logic for weekend or weekday
    // if (currentDay === 6 || currentDay === 0) {
    //     day = "Weekend";
    // } else {
    //     day = "Weekday";  
    // }
    //logic for Day
}


exports.getDay = function (){
    const today = new Date();
    // options object for the days of the week 
    const options = {
        weekday: "long",
    }
    
    return today.toLocaleDateString("en-US", options);
   
}