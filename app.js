$(document).ready(function(){

	var userInput;
	var userInputString;

	$('#myform').submit(function(e){
		e.preventDefault();
		userInput = $('.searchquery').val();
		console.log(userInput);
		console.log(typeof userInput);
		
		
		if (userInput == ''){
			$('#warning').html("<h2> Oops! You didn't enter anything. </h2>");
			}
		else {
		//$('#warning').html("<h2>Check out these Github stars!</h2>");
		$('#warning').html("<h2>These Github stars have more than " + userInput + " followers!</h2>");
		}

		userInputString = userInput.toString();
		console.log(userInputString);
		var url = 'https://api.github.com/search/users?q=followers:%3E' + userInputString;
		console.log(url);


		$.getJSON(url, function(followers){
    	//Loop through each of the users returned from the API
    	$.each(followers.items, function(index, follow) {
     	var htmlUrl = follow.html_url;
      
      	//Get the login name
     	var name = follow.login;
      
     	// Now, lets create a link
     	var link = $('<p><a href="' + htmlUrl + '">' + name + '</a></p>');
      
      	//Append the link to #results
     	$('#results').append(link);
   		});
  		});





	});


	
  
  
	
});