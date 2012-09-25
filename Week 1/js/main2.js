
var sexValue;
var proValue;



$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	

$('#viewMembers').on('pageinit', function(){
	
	getData();

});	

$('#addItem').on('pageinit', function(){
	delete $.validator.methods.date;
	var addForm = $('#formAddMember');
		addForm.validate({
			invalidHandler: function(form, validator) {

			},

			submitHandler: function() {
				var data = addForm.serializeArray();
				key = getData();
				storeData(key);
				console.log(key);
			}

	});
	
	//any other code needed for addItem page goes here
	
});

console.log(this.key);


//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var getE = function(parameter){
		var theElement = document.getElementById(parameter);
		return theElement;
}


var autoFillData = function (){
	for(var n in json){
		var id = Math.floor(Math.random()*1010101010);
		localStorage.setItem(id, JSON.stringify(json[n]));
	}
};

var getData = function(key){

	var makeDiv = getE("data");
	var makeList = document.createElement("ul");
	makeDiv.appendChild(makeList);
	for(var i=0, len=localStorage.length; i<len; i++){
		var makeLi = document.createElement("li");
		var linksLi = document.createElement("li");
		makeList.appendChild(makeLi);
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		var obj = JSON.parse(value);
		var makeSubList = document.createElement("ul");
		makeLi.appendChild(makeSubList);
		if (obj.league[1] === undefined){
			obj.league[1] === "National";
		}
		getImage(obj.league[1], makeSubList);
		for (var n in obj){
			var makeSubLi = document.createElement("li");
			makeSubList.appendChild(makeSubLi);
			var optSubText = obj[n][0]+" "+obj[n][1];
			makeSubLi.innerHTML = optSubText;
			makeSubLi.appendChild(linksLi);
		}
		makeItemLinks(localStorage.key(i), linksLi);
		
	}
	console.log(key);
	return key;
	
};
	
var makeItemLinks = function(key, linksLi){
	var editLink = document.createElement("a");
	editLink.setAttribute("data-role", "button");
	editLink.href = "#addItem";
	editLink.key = key;
	var editText = "Edit Member ";
	editLink.addEventListener("click", editItem);
	editLink.innerHTML = editText;
	linksLi.appendChild(editLink);
	
	var deleteLink = document.createElement("a");
	deleteLink.setAttribute("data-role", "button");
	deleteLink.href = "#";
	deleteLink.key = key;
	var deleteText = "Delete Member";
	deleteLink.addEventListener("click", deleteItem);
	deleteLink.innerHTML = deleteText;
	linksLi.appendChild(deleteLink);
		
}
	
var getImage = function(imageName, makeSubList){
		var imageLi = document.createElement("li");
		makeSubList.appendChild(imageLi);
		var newImage = document.createElement("img");
		var setSrc = newImage.setAttribute("src", "images/" + imageName + ".jpg");
		imageLi.appendChild(newImage);
	}

var storeData = function(key){   
	console.log(this.key);           
	if(!key){
		var id = Math.floor(Math.random()*1010101010);
		
	}else{
		id = key;
	}
		getSelectedRadio();
		getCheckBoxValue();

		var item 			= {};
			item.alias		= ["Gaming Alias:", getE("alias").value];
			item.fName 		= ["First Name:", getE("fName").value];
			item.lName 		= ["Last Name:", getE("lName").value];
			item.eMail 		= ["Email:", getE("eMail").value];
			item.bDay 		= ["Birth-Day:", getE("bDay").value];
			item.language	= ["Language:", getE("language").value];
			item.skill		= ["Skill:", getE("skill").value];
			item.sex  		= ["Sex:", sexValue];
			item.pro 		= ["Professional:", proValue];
			item.division 	= ["Division:", getE("division").value];
			item.league  	= ["League:", getE("league").value];
			item.notes		= ["Notes:", getE("notes").value];
		localStorage.setItem(id, JSON.stringify(item));
		
		alert("Member has been Added!");
		viewLink();

}; 


var getSelectedRadio = function(){
	if(getE("male").checked){
		sexValue = "Male";
	}else if(getE("female").checked){
		sexValue = "Female";
	}
}

var getCheckBoxValue = function(){
	if(getE("pro").checked){
		proValue = "Yes";
	}else if(getE("pro").unchecked){
		proValue = "No";
	}else if(proValue === null){
		proValue = "Unavailable";
	}else{
		getE("pro").unchecked
	}
}


var	deleteItem = function (){
	var ask = confirm("Are you sure you want to delete this member?")
	if (ask){
		localStorage.removeItem(this.key);
		alert("Contact was deleted.")
	}else{
		alert("Contact was NOT deleted.")
	}
		viewLink(this.key);		
};
					
var clearData = function(){
	if (localStorage.length === 0){
		alert("There is no data to clear!")
	}else{
		localStorage.clear();
		alert("Local Storage Data has been deleted.")
		window.location.reload();
		return false;
	}
};



var editItem = function(key){
	console.log(this.key);
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		getE("alias").value = item.alias[1];
		getE("fName").value = item.fName[1];
		getE("lName").value = item.lName[1];
		getE("eMail").value = item.eMail[1];
		getE("bDay").value = item.bDay[1];
		getE("language").value = item.language[1];
		getE("skill").value = item.skill[1];
console.log("1TEST");
/*
		if(item.sex[1] === "Male"){
			$("#male").attr("checked",true);	
		}else if(item.sex[1] === "Female"){
			$("#female").attr("checked",true);
		}else if (item.sex[1] === null){
			$("#male").attr("checked",false);
			$("#female").attr("checked",false);
		}
		
		console.log("2TEST");
		if(item.pro[1] === "Yes"){
			$("#pro").attr("checked",true);
			$("input:checkbox").checkboxradio("refresh");	
		}else if(item.pro[1] === "No") {
			$("#pro").attr("checked",false);
			$("input:checkbox").checkboxradio("refresh");
		}else if (item.pro[1] === null){
			$("#pro").attr("checked",false);
		}
*/
		
		console.log("3TEST");

		
		getE("division").value = item.division[1];
		getE("league").value = item.league[1];
		getE("notes").value = item.notes[1];
		
		
		getE("submit").value = "Save Changes";
		var editSubmit = getE("submit");
		editSubmit.addEventListener("click");
		editSubmit.key = key;
		console.log(this.key);
	
		
	};

var popJSON = function(){
	if(localStorage.length === 0){
		var askAutoFill = confirm("There is no Local Storage Data to display! Auto Populate Data from JSON file?");
		if(askAutoFill === true){
			autoFillData();	
			getData(this.key);
		}
	}
};

var viewLink = function(key){
	var	link = $('#viewLink');
	link.click();
	window.location.reload();
	return key;
}


	var displayLink = getE("displayLink");
	displayLink.addEventListener("click", popJSON);
	
	var clearLink = getE("clearLink");
	clearLink.addEventListener("click", clearData);
	
	var saveButton = getE("submit");
	saveButton.addEventListener("click");
