$(document).ready(function(){
	console.log("I'm rich mofo!");
	$.ajax({
		"url": '/type/_all_docs?include_docs=true&start_key=%22division:%22&end_key=%22division:zzz%22',
		"dataType": "json",
		"success": function(data){
			$.each(data.rows, function(index, division){
				var acronym = division.doc.acronym;
				var title =   division.doc.title;
				$("#divisionList").append(
						$("<li>").append(
								$("<a>").attr("href", "#")
									.text(title)
						)
				);
			});
			$("#divisionList").listview("refresh");
		}
		
	});
});