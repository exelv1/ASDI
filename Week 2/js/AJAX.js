/*
Advanced Scalable Data Infrastructure
Full Sail University
Mobile Development
Professor: Marianne Sheldon
PlayIGL Team Management App
Project 2
Jonathan Caraveo 
*/

$("#json").on("click", function(){
console.log("hello");
	$.ajax({
		url      : "xhr/data.json",
		type     : "GET",
		dataType : "json",
		success  : function(result){
			console.log(result);
		}
	});
});


