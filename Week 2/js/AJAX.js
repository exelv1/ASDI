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
	$.ajax({
		url      : "xhr/data.json",
		type     : "GET",
		dataType : "JSON",
		success  : function(result){
			console.log(result);
		}
	});
});


/*
// assume that the XML above is in a string named "xml"
var data = $.parseXML(xml);
// wrap the XML in a jQuery object to make it easier to work with
var items = $( data );
items.find("item").each(function(){
    var item = $(this);
    console.log("Name: ", item.find("name"));
});
*/




$("#xml").on("click", function(){
		$("#xhr").empty();
$.ajax({
  type: "GET",
  url: "xhr/data.xml",
  dataType: "xml",
  success: function(data){
	  $(data).find("member").each(function(){
		var alias = $(this).find("alias").text();
		var fname = $(this).find("fname").text();
		var lname = $(this).find("lname").text();
		var eMail = $(this).find("eMail").text();
		var bDay = $(this).find("bDay").text();
		var language = $(this).find("language").text();
		var skill = $(this).find("skill").text();
		var sex = $(this).find("sex").text();
		var pro = $(this).find("pro").text();
		var division = $(this).find("division").text();
		var league = $(this).find("league").text();
		var notes = $(this).find("notes").text();
                     $("#xhr").append($(" " +
                         "<ul>" +
                         "<li>Alias: " + alias + "</li>" +
                         "<li>First Name: " + fname + "</li>" +
                         "<li>Last Name: " + lname + "</li>" +
                         "<li>Email: " + eMail + "</li>" + 
                         "<li>Birthdate: " + bDay + "</li>" +
                         "<li>Language: " + language + "</li>" +
                         "<li>Skill: " + skill + "</li>" +
                         "<li>Gender: " + sex + "</li>" +
                         "<li>Professional: " + pro + "</li>" +
                         "<li>Division: " + division + "</li>" +
                         "<li>League: " + league + "</li>" +
                         "<li>Notes: " + notes + "</li>" +  
						 "</ul>"));

 });

         $("#xhr").listview("refresh");

	  }
});
});