module.exports = {
  showHome: showHome,
  processInput: processInput
}

  
/**
 * Show the home page
*/
 function showHome(req, res) {
   res.render('pages/home');
 }
 
/**
 * Process input
*/
 function processInput(req, res) {
	 
	var input = req.params;
	//console.log(input);
	var date = Object.values(input)
	//console.log(date);
	var utcDate = Date.parse(date)/1000;
	console.log(utcDate);
	//console.log(timestamp.toString()); // shows 'Invalid Date'

	// if input date is a number and between maximum and minimum defined unix time
	if (!isNaN(date) && date<2147483648 && date>=-2147483648) { 
	//console.log("linux timestamp");
	var utcDate = date.toString();
	//console.log(utcDate);
	
	var naturalDate = new Date(date*1000);
	//console.log(naturalDate);	
	
	var result = {  
            unix: utcDate,          
            natural: naturalDate
	};  

	//console.log(result);	
	res.json(result);
	}
	
	// if parse utcDate leads not to an error
	else if (!isNaN(utcDate)){
	//console.log("natural timestamp");
	
	var naturalDate = date.toString();
	//console.log(naturalDate);	
	
	var result = {  
            unix: utcDate,          
            natural: naturalDate
	};  
	//console.log(result);		
	res.json(result);	
	}
	
	// if neither correct UTC nor natural date then show null values
	else {
	
            unix: null,          
            natural: null
	};  
	//console.log(result);		
	res.json(result);	
	}


 }
 
 
 