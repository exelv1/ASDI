function (doc) {
	if(doc._id.substr(0,9) === "division:") {
		emit(doc._id.substr(9), {
			"title": doc.title,
			"acronym": doc.acronym,
			"url": doc.url
		});
	}
}