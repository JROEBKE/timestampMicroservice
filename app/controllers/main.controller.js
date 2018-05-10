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

		
	if (date.length <=10 && !isNaN(date) && date<=2100000000) { 
	//console.log("linux timestamp");
	var utcDate = date.toString();
	//console.log(utcDate);
	
	var naturalDate = new Date(date*1000);
	//console.log(naturalDate);	
	
	var result = {  
            unix: utcDate,          
            natural: naturalDate
	};  

	console.log(result);	
	res.json(result);
	}
	
	
	else if (!isNaN(utcDate)){
	//console.log("natural timestamp");
	
	var naturalDate = date.toString();
	//console.log(naturalDate);	
	

	
	var result = {  
            unix: utcDate,          
            natural: naturalDate
	};  
	console.log(result);		
	res.json(result);	
	}
	
	
	else {
	
	console.log("not a linux timestamp and not a natural date");
	res.render('pages/home', {
     //errors: req.flash('errors')
	});
	}
	
	

 }
 
 
 