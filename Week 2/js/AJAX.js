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
	$("#xhr").empty();
	$.ajax({
			type     : "GET",
			url      : "xhr/data.json",
			dataType : "json",
			success  : function(result){
				console.log(result);
					for(var i in result.members){
						var items = result.members[i];
						$("#xhr").append($("<ul>" + 
						"<li>" + items.alias[0] + " " + items.alias[1] + "</li>" +
						"<li>" + items.fName[0] + " " + items.fName[1] + "</li>" +
						"<li>" + items.lName[0] + " " + items.lName[1] + "</li>" +
						"<li>" + items.eMail[0] + " " + items.eMail[1] + "</li>" +
						"<li>" + items.bDay[0] + " " + items.bDay[1] + "</li>" +
						"<li>" + items.language[0] + " " + items.language[1] + "</li>" +
						"<li>" + items.skill[0] + " " + items.skill[1] + "</li>" +
						"<li>" + items.sex[0] + " " + items.sex[1] + "</li>" +
						"<li>" + items.pro[0] + " " + items.pro[1] + "</li>" +
						"<li>" + items.division[0] + " " + items.division[1] + "</li>" +
						"<li>" + items.league[0] + " " + items.league[1] + "</li>" +
						"<li>" + items.notes[0] + " " + items.notes[1] + "</li>" +
						"<ul>"));
					}
			},
			error	: function(error){
				console.log("AJAX - JSON error");
			}
		});
	console.log("hello")
});





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
 				$("#xhr").listview();
      			$("#xhr").listview("refresh");
	  }
});
});