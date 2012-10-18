$.ajax({
		"url": '/asdi/_design/app/_view/divisions',
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
		"url": '/asdi/_design/app/_view/leagues',
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
			"url": "/asdi/_design/app/_view/members",
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
			"url": "/asdi/_design/app/_view/central",
			"dataType": "json",
			"success": function(data){
				console.log(data);
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
			"url": "/asdi/_design/app/_view/east",
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
			"url": "/asdi/_design/app/_view/west",
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
			"url": "/asdi/_design/app/_view/international",
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
			"url": "/asdi/_design/app/_view/major",
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
			"url": "/asdi/_design/app/_view/national",
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
	
	
	
	$(document).on('pageshow', '#home', function(){
		$.couch.db("asdi").view("app/divisions", {
			success: function(data) {
				console.log(data);
			}
			
		});
	});	

	$('#viewMembers').on('pageinit', function(){
		getData(data);
	});	
			
	$('#addItem').on('pageinit', function(){
	delete $.validator.methods.date;
		var myForm = $('#formAddMember');
	    myForm.validate({
			invalidHandler: function(form, validator) {
		},
		submitHandler: function() {
			var data = myForm.serializeArray();
			storeData(this.key);
		}
	});
		
		//any other code needed for addItem page goes here
		
	});

	//The functions below can go inside or outside the pageinit function for the page in which it is needed.

	function getX(parameter){
			var theElement = document.getElementById(parameter);
			return theElement;
	};

	var autoFillData = function(){
		for(var n in json){
			var id = Math.floor(Math.random()*1010101010);
			localStorage.setItem(id, JSON.stringify(json[n]));
		}
	};

		

	var getData = function(data){
		var getImage = function(imageName, makeDataSubList){
			var imageLi = document.createElement("li");
			makeDataSubList.appendChild(imageLi);
			var newImage = document.createElement("img");
			var setSrc = newImage.setAttribute("src", "images/" + imageName + ".jpg");
			imageLi.appendChild(newImage);
		}
		var makeDataDiv = getX("data");
		var makeDataList = document.createElement("ul");
		makeDataList.setAttribute("data-role", "list-view");
		makeDataList.setAttribute("data-filter", "true");
		makeDataDiv.appendChild(makeDataList);	
		for(var i=0, len=localStorage.length; i<len; i++){
			var makeDataLi = document.createElement("li");
			var linksLi = document.createElement("li");
			makeDataList.appendChild(makeDataLi);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			var makeDataSubList = document.createElement("ul");
			makeDataLi.appendChild(makeDataSubList);
//			getImage(obj.league, makeDataSubList);
			for (var n in obj){
				var makeSubLi = document.createElement("li");
				makeDataSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubLi.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi);
		}
		
	};							

	var makeItemLinks = function(key, makeDataSubList){
		var editLink = document.createElement("a");
		editLink.setAttribute("data-role", "button");
		editLink.href = "#addItem";
		editLink.key = key;
		var editText = "Edit Member";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		makeDataSubList.appendChild(editLink);
		
		var deleteLink = document.createElement("a");
		deleteLink.setAttribute("data-role", "button");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Member";
		deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		makeDataSubList.appendChild(deleteLink);
	};

	var storeData = function(key){
		if(key == undefined || key == "null"){
			var key = Math.floor(Math.random()*1010101010);
		}
			var id = key;
			var item 			= {};
				item.alias		= ["Gaming Alias:", $("#alias").val()];
				item.fName 		= ["First Name:", $("#fName").val()];
				item.lName 		= ["Last Name:", $("#lName").val()];
				item.eMail 		= ["Email:", $("#eMail").val()];
				item.bDay 		= ["Birth-Day:", $("#bDay").val()];
				item.language	= ["Language:", $("#language").val()];
				item.skill		= ["Skill:", $("#skill").val()];
				
				var sexValue;
				if($("#male").checked){
					sexValue = "Male";
				}else if($("#female").checked){
					sexValue = "Female";
				}
				console.log(sexValue);
				item.sex  		= ["Sex:",  sexValue];
				
				var proValue;
				if($("#pro").checked){
					proValue = "Yes";
				}else{
					proValue = "No";
				}
				item.pro 		= ["Professional:", proValue];
				
				item.division 	= ["Division:", $("#division").val()];
				item.league  	= ["League:", $("#league").val()];
				item.notes		= ["Notes:", $("#notes").val()];
			localStorage.setItem(id, JSON.stringify(item));
			alert("Member has been Added! With a key: " + key);
			

		viewLink();
		return key;
	}; 

	var	deleteItem = function(){
		var ask = confirm("Are you sure you want to delete this member?")
		if (ask){
			localStorage.removeItem(this.key);
			alert("Contact was deleted.")
		}else{
			alert("Contact was NOT deleted.")
		}
		viewLink();				
	};


	var editItem = function(){

		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		console.log(item);
		$("#alias").val(item.alias[1]);
		$("#fName").val(item.fName[1]);
		$("#lName").val(item.lName[1]);
		$("#eMail").val(item.eMail[1]);
		$("#bDay").val(item.bDay[1]);
		$("#language").val(item.language[1]);
		$("#skill").val(item.skill[1]);
		$('#addItem').page();
		$('#skill').val(item.skill[1]);
		$('#skill').slider('refresh');
		
		if(item.sex[1] == "Male"){
			$("#female").attr("checked",false).checkboxradio("refresh");
			$("#male").attr("checked",true).checkboxradio("refresh");
		}else if(item.sex[1] == "Female"){
			$("#male").attr("checked",false).checkboxradio("refresh");
			$("#female").attr("checked",true).checkboxradio("refresh");
		}
		
		if (item.pro[1] == "Yes"){
			$("input[type='checkbox']:first").attr("checked",true).checkboxradio("refresh");
		}else{
			$("input[type='checkbox']:first").attr("checked",false).checkboxradio("refresh");
		}
		
		$("#division").value = item.division[1];
		$("select").selectmenu('refresh', true);

		$("#league").val = item.league[1];
		$("select").selectmenu('refresh', true);

		$("#notes").val = item.notes[1];
		
		
		saveButton.removeEventListener("click");
		var editSubmit = getX("submit");
		editSubmit.addEventListener("click");
		editSubmit.key = this.key;
		$("#submit").value = "Save Changes";
		$("#submit").button('refresh');
		
		localStorage.removeItem(this.key);
	};
					
	var clearLocal = function(){
		if (localStorage.length === 0){
			alert("There is no data to clear!")
		}else{
			var askDelete = confirm("Would you like to clear LocalStorage?");
			if(askDelete){
				localStorage.clear();
				alert("Local Storage Data has been deleted.")
				window.location.reload();
			}
			return false;
		}
	};

	var viewLink = function(){
		var	link = $('#viewMembers');
		link.click();
		window.location.reload();
		
	};

	var popJSON = function(){
		if(localStorage.length === 0){
			var askAutoFill = confirm("There is no Local Storage Data to display! Auto Populate Data from JSON file?");
			if(askAutoFill === true){
				autoFillData();	
			}
		}
	};




var displayLink = getX("displayLink");
displayLink.addEventListener("click", popJSON);

var clearLink = getX("clearLink");
clearLink.addEventListener("click", clearLocal);

var saveButton = getX("submit");
saveButton.addEventListener("click");

