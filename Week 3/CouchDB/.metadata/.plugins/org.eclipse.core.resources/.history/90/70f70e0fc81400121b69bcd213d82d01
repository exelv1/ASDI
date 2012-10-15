$(document).ready(function(){
	$.ajax({
		"url": '/asdip3/_design/app/_view/divisions',
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, division){
				var acronym = division.value.acronym;
				var title =   division.value.title;
				var url = division.value.url;
				$("#divisionList").append(
						$("<li>").append(
								$("<a>").attr("href", "#" + url)
									.text(title)
						)
				);
			});
			$("#divisionList").listview("refresh");
		}
		
	});
	
	$.ajax({
		"url": '/asdip3/_design/app/_view/leagues',
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, league){
				var acronym = league.value.acronym;
				var title =   league.value.title;
				var url = league.value.url;
				$("#leagueList").append(
						$("<li>").append(
								$("<a>").attr("href", "#" + url)
									.text(title)
						)
				);
			});
			$("#leagueList").listview("refresh");
		}
		
	});
	
	$('#membersPage').on('pageinit', function(){
		getMembers();
	});	
	
	var getMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/members",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = "Division: " + member.value.division;
					var league = "League: " + member.value.league;
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#membersList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#membersList").listview("refresh");
			}
		});
	};
	
	$('#centralPage').on('pageinit', function(){
		getCentralMembers();
	});	
	
	var getCentralMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/central",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = "Division: " + member.value.division;
					var league = "League: " + member.value.league;
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#centralList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#centralList").listview("refresh");
			}
		});
	};
	
	$('#eastPage').on('pageinit', function(){
		getEastMembers();
	});	
	
	var getEastMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/east",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = "Division: " + member.value.division;
					var league = "League: " + member.value.league;
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#eastList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#eastList").listview("refresh");
			}
		});
	};
	
	$('#westPage').on('pageinit', function(){
		getWestMembers();
	});	
	
	var getWestMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/west",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = "Division: " + member.value.division;
					var league = "League: " + member.value.league;
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#westList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#westList").listview("refresh");
			}
		});
	};
	
	
	$('#internationalLeague').on('pageinit', function(){
		getInternationalMembers();
	});	
	
	var getInternationalMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/international",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = "Division: " + member.value.division;
					var league = "League: " + member.value.league;
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#internationalList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#internationalList").listview("refresh");
			}
		});
	};
	
	$('#majorLeague').on('pageinit', function(){
		getMajorMembers();
	});	
	
	var getMajorMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/major",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = "Division: " + member.value.division;
					var league = "League: " + member.value.league;
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#majorList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#majorList ").listview("refresh");
			}
		});
	};
	
	$('#nationalLeague').on('pageinit', function(){
		getNationalMembers();
	});	
	
	var getNationalMembers = function(){
		$.ajax({
			"url": "/asdip3/_design/app/_view/national",
			"dataType": "json",
			"success": function(data){
				$.each(data.rows, function(index, member){
					var alias = member.value.alias[0] + " " + member.value.alias[1];
					var fname = member.value.fName[0] + " " + member.value.fName[1];
					var lname = member.value.lName[0] + " " + member.value.lName[1];
					var eMail = member.value.eMail[0] + " " + member.value.eMail[1];
					var bDay = member.value.bDay[0] + " " + member.value.bDay[1];
					var language = member.value.language[0] + " " + member.value.language[1];
					var skill = member.value.skill[0] + " " + member.value.skill[1];
					var sex = member.value.sex[0] + " " + member.value.sex[1];
					var pro = member.value.pro[0] + " " + member.value.pro[1];
					var division = "Division: " + member.value.division;
					var league = "League: " + member.value.league;
					var notes = member.value.notes[0] + " " + member.value.notes[1];
					$("#nationalList").append(
							$("<li>").append(
									$("<a>").attr("href", "#")
										.html(
												alias + "<br />" + 
												fname + "<br />" + 
												lname + "<br />" + 
												eMail + "<br />" + 
												bDay + "<br />" + 
												language + "<br />" + 
												skill + "<br />" + 
												sex + "<br />" + 
												pro + "<br />" + 
												division + "<br />" + 
												league + "<br />" + 
												notes + "<br />"
										)
									
							)
					);
				});
				$("#nationalList").listview("refresh");
			}
		});
	};
	
	
	
	
	
	
	
	
});