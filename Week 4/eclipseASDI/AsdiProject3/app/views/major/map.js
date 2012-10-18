function (doc) {
	if(doc.league === "Major") {
		emit(doc.league, {
			"alias": doc.alias,
			"fName": doc.fName,
			"lName": doc.lName,
			"eMail": doc.eMail,
			"bDay":  doc.bDay,
			"language": doc.language,
			"skill": doc.skill,
			"sex":   doc.sex,
			"pro":   doc.pro,
			"division": doc.division,
			"league": doc.league,
			"notes": doc.notes
		});
	}
}